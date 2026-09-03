import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Heart, FileText } from 'lucide-react';

export default function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('trips'); // 'trips' or 'posts'
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${userInfo.token}` };
        
        // Fetch trips
        const tripsRes = await fetch('http://localhost:5000/api/trips', { headers });
        const tripsData = await tripsRes.json();
        
        // Fetch posts
        const postsRes = await fetch('http://localhost:5000/api/posts/user/me', { headers });
        const postsData = await postsRes.json();

        setTrips(tripsData);
        setPosts(postsData);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, userInfo]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-8">
          <div>
            <h1 className="text-4xl font-heading text-primary">Traveler Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome back, <strong className="text-foreground">{userInfo?.name}</strong>. Here is your expedition command center.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/')}>Home</Button>
            <Button variant="destructive" onClick={handleLogout}>Log Out</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="text-muted-foreground text-sm font-mono mb-2 uppercase">Saved Trips</div>
            <div className="text-3xl font-heading text-primary">{trips.length}</div>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="text-muted-foreground text-sm font-mono mb-2 uppercase">Dispatches</div>
            <div className="text-3xl font-heading text-primary">{posts.length}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-4 border-b border-border pb-2 pt-4">
          <button 
            className={`text-lg font-heading pb-2 px-2 border-b-2 transition-colors ${activeTab === 'trips' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('trips')}
          >
            My Itineraries
          </button>
          <button 
            className={`text-lg font-heading pb-2 px-2 border-b-2 transition-colors ${activeTab === 'posts' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            onClick={() => setActiveTab('posts')}
          >
            My Field Dispatches
          </button>
        </div>

        {/* Content */}
        <div className="pt-4">
          {activeTab === 'trips' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.length === 0 ? (
                <p className="text-muted-foreground">You haven't planned any trips yet.</p>
              ) : (
                trips.map(trip => (
                  <div key={trip._id} className="bg-card border border-border p-6 rounded-xl space-y-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(`/itinerary/${trip._id}`)}>
                    <div className="flex items-center gap-2 text-secondary font-mono text-sm uppercase">
                      <MapPin size={16} /> {trip.destination}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} /> {new Date(trip.startDate).toLocaleDateString()}
                    </div>
                    <p className="line-clamp-2 text-foreground">{trip.preferences}</p>
                    <div className="pt-4 text-primary text-sm font-semibold">View Itinerary →</div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.length === 0 ? (
                <p className="text-muted-foreground">You haven't published any dispatches yet.</p>
              ) : (
                posts.map(post => (
                  <div key={post._id} className="bg-card border border-border overflow-hidden rounded-xl group cursor-pointer hover:shadow-md transition-all" onClick={() => navigate(`/community/${post._id}`)}>
                    <div className="h-40 overflow-hidden">
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="font-heading text-xl text-primary line-clamp-1">{post.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1"><Heart size={14} /> {post.likes.length}</span>
                        <span className="flex items-center gap-1"><FileText size={14} /> {post.comments.length}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

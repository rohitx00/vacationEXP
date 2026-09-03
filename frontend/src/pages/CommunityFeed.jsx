import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, MessageCircle } from 'lucide-react';

export default function CommunityFeed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-heading text-primary cursor-pointer" onClick={() => navigate('/')}>
            VacationExp Community
          </h1>
          <Button onClick={() => navigate('/community/new')} className="bg-primary text-primary-foreground">
            Document Journey
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div 
              key={post._id} 
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
              onClick={() => navigate(`/community/${post._id}`)}
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1024' }} // fallback image
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center text-muted-foreground text-sm space-x-1">
                  <MapPin size={14} />
                  <span>{post.location}</span>
                </div>
                <h2 className="text-xl font-heading text-primary leading-tight line-clamp-2">
                  {post.title}
                </h2>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-muted-foreground">By {post.name}</span>
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <span className="flex items-center space-x-1"><Heart size={16} /> <span>{post.likes?.length || 0}</span></span>
                    <span className="flex items-center space-x-1"><MessageCircle size={16} /> <span>{post.comments?.length || 0}</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-xl">No field dispatches yet.</p>
            <p className="mt-2">Be the first to share your journey!</p>
          </div>
        )}
      </main>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CreateDispatch() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) navigate('/login');
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ title, location, imageUrl, content }),
      });

      if (res.ok) {
        navigate('/community');
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to publish dispatch');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-4 border-b border-border pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading text-primary">
              Field Dispatch Studio
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Document your journey. Share your experiences with the global traveler community.
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate('/community')}>Cancel</Button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-destructive">{error}</p>}
          
          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Title</label>
            <input 
              type="text" 
              required 
              placeholder="A breathtaking sunrise over Old Manali..."
              className="w-full text-2xl font-heading border-b border-border bg-transparent focus:outline-none focus:border-primary py-2"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Location</label>
            <input 
              type="text" 
              required 
              placeholder="e.g., Old Manali, Himachal Pradesh, India"
              className="w-full border-b border-border bg-transparent focus:outline-none focus:border-primary py-2"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Cover Image (Unsplash URL)</label>
            <input 
              type="url" 
              required 
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full border-b border-border bg-transparent focus:outline-none focus:border-primary py-2"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            />
          </div>

          <div className="space-y-2 pt-6">
            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Story Content</label>
            <textarea 
              required 
              rows={10}
              placeholder="Start writing your travel story here..."
              className="w-full border border-border rounded-md px-4 py-4 bg-transparent focus:outline-none focus:border-primary resize-y leading-relaxed"
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
            {loading ? 'Publishing...' : 'Publish Dispatch'}
          </Button>
        </form>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function TripPlanner() {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('Moderate');
  const [preferences, setPreferences] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    try {
      const res = await fetch('http://localhost:5000/api/trips/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          destination,
          startDate,
          endDate,
          budget,
          preferences: preferences.split(',').map(p => p.trim()),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save generated trip locally to view in the next page
        localStorage.setItem('currentGeneratedTrip', JSON.stringify(data));
        // We will pass the data to the generated itinerary page. For now, just save it locally.
        navigate('/itinerary/new');
      } else {
        setError(data.message || 'Failed to generate trip');
      }
    } catch (err) {
      setError('Network error or AI timeout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-heading text-primary">
            AI Trip Planner Studio
          </h1>
          <p className="text-lg text-muted-foreground">
            Define your expedition parameters. Our AI will craft a bespoke itinerary based on your preferences.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6">
          {error && <p className="text-destructive font-medium">{error}</p>}
          
          <div>
            <label className="block text-sm font-semibold mb-2">Destination</label>
            <input 
              type="text" 
              required 
              placeholder="e.g., Kyoto, Japan"
              className="w-full border border-border rounded-md px-4 py-3 bg-background focus:outline-none focus:border-primary"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Start Date</label>
              <input 
                type="date" 
                required 
                className="w-full border border-border rounded-md px-4 py-3 bg-background focus:outline-none focus:border-primary"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">End Date</label>
              <input 
                type="date" 
                required 
                className="w-full border border-border rounded-md px-4 py-3 bg-background focus:outline-none focus:border-primary"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Budget Level</label>
            <select 
              className="w-full border border-border rounded-md px-4 py-3 bg-background focus:outline-none focus:border-primary"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="Budget">Budget-friendly</option>
              <option value="Moderate">Moderate / Standard</option>
              <option value="Luxury">Luxury & Premium</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Travel Preferences (comma separated)</label>
            <input 
              type="text" 
              placeholder="e.g., Museums, Local Food, Hiking, Photography"
              className="w-full border border-border rounded-md px-4 py-3 bg-background focus:outline-none focus:border-primary"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg rounded-md"
          >
            {loading ? 'Generating Expedition...' : 'Generate Itinerary'}
          </Button>
        </form>
      </div>
    </div>
  );
}

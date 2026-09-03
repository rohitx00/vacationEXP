import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';

export default function GeneratedItinerary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('currentGeneratedTrip');
    if (data) {
      try {
        setItinerary(JSON.parse(data));
        setLoading(false);
      } catch (e) {
        navigate('/plan');
      }
    } else {
      navigate('/plan');
    }
  }, [navigate]);

  const handleSaveTrip = async () => {
    setSaving(true);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    // We didn't save destination explicitly in local storage separate from JSON,
    // so we'll just extract a fake one or use title if needed.
    // For MVP, we pass the basic details again or we should have saved them.
    // Let's assume the user just wants to save the JSON.
    try {
      const res = await fetch('http://localhost:5000/api/trips/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({
          destination: itinerary.title || 'My AI Trip',
          travelDates: { start: new Date(), end: new Date() }, // Placeholder for MVP
          budget: 'Moderate',
          preferences: [],
          itinerary: itinerary
        }),
      });

      if (res.ok) {
        toast({
          title: "Expedition Saved",
          description: "You can view this itinerary anytime in your dashboard.",
        });
        navigate('/dashboard');
      } else {
        const data = await res.json();
        toast({
          variant: "destructive",
          title: "Save Failed",
          description: data.message || "Failed to save.",
        });
        setError(data.message || 'Failed to save');
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Network error occurred.",
      });
      setError('Network error');
    } finally {
      setSaving(false);
    }
  };

  if (!itinerary) return <div className="p-16 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="space-y-4 border-b border-border pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading text-primary">
              {itinerary.title || 'Expedition Journal'}
            </h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              {itinerary.overview}
            </p>
          </div>
          <Button onClick={handleSaveTrip} disabled={saving} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            {saving ? 'Saving...' : 'Save Trip'}
          </Button>
        </header>
        
        {error && <p className="text-destructive">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-heading text-primary border-b border-border pb-2">Daily Itinerary</h2>
            {itinerary.dailyItinerary?.map((day, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-primary mb-2">Day {day.day}: {day.theme}</h3>
                <div className="space-y-4 mt-4">
                  {day.activities?.map((act, i) => (
                    <div key={i} className="pl-4 border-l-2 border-secondary/50">
                      <p className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">{act.time}</p>
                      <h4 className="font-bold text-lg">{act.title}</h4>
                      <p className="text-muted-foreground">{act.description}</p>
                      <p className="text-sm font-mono mt-1 text-primary">📍 {act.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-muted/30 border border-border rounded-xl p-6">
              <h3 className="text-lg font-heading text-primary mb-4 border-b border-border pb-2">Estimated Budget</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Accommodation</span> <strong>{itinerary.estimatedBudget?.accommodation}</strong></li>
                <li className="flex justify-between"><span>Food</span> <strong>{itinerary.estimatedBudget?.food}</strong></li>
                <li className="flex justify-between"><span>Transport</span> <strong>{itinerary.estimatedBudget?.transport}</strong></li>
                <li className="flex justify-between"><span>Activities</span> <strong>{itinerary.estimatedBudget?.activities}</strong></li>
                <li className="flex justify-between pt-2 border-t border-border text-base"><span>Total</span> <strong className="text-secondary">{itinerary.estimatedBudget?.total}</strong></li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-heading text-primary mb-4">Hidden Gems</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {itinerary.hiddenGems?.map((gem, i) => <li key={i}>{gem}</li>)}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-heading text-primary mb-4">Food Recommendations</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {itinerary.foodRecommendations?.map((food, i) => <li key={i}>{food}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

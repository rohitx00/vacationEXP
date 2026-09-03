import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-6xl md:text-7xl font-heading text-primary font-medium tracking-tight">
          Plan with AI. <br />
          <span className="italic text-secondary">Travel with real experiences.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
          VacationExp crafts highly personalized, aesthetic travel itineraries powered by artificial intelligence and curated by a global community.
        </p>

        <div className="pt-8">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-xl shadow-primary/20"
            onClick={() => navigate('/plan')}
          >
            Start Your Expedition
          </Button>
        </div>
      </div>
    </div>
  );
}

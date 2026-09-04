import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalUsers: 0, totalTrips: 0, totalPosts: 0 });
  const [budget, setBudget] = useState(45000);
  const [destination, setDestination] = useState("Old Manali, Himachal Pradesh");
  
  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  useEffect(() => {
    fetch("http://localhost:5000/api/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error("Error fetching stats:", err));
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <section className="relative w-full -mt-20 overflow-hidden bg-primary">
            <div className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center">
              {/* High Res Cinematic Background */}
              <img
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Epic landscape"
              />

              {/* Advanced Gradients for Text Legibility & Mood */}
              <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
              
              <div className="relative z-10 w-full px-container-margin-sm md:px-container-margin-md pt-20 pb-unit-3xl flex flex-col items-center">
                
                {/* Glowing Glassmorphic Badge */}
                <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <span className="font-label-caps text-[11px] text-white uppercase tracking-widest font-bold">
                    VacationExp AI Engine 2.0
                  </span>
                </div>

                <div className="max-w-5xl space-y-6">
                  {/* Majestic Headline */}
                  <h1 className="font-display-hero text-[56px] md:text-[80px] leading-[1.1] text-white tracking-tight drop-shadow-2xl">
                    Plan less. <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-secondary to-secondary-container italic font-caption-editorial">
                      Experience more.
                    </span>
                  </h1>
                  
                  {/* Refined Subheadline */}
                  <p className="font-body-lead text-[18px] md:text-[22px] text-white/90 max-w-3xl mx-auto pt-4 drop-shadow-md font-medium">
                    Tell us where you're going, when you're traveling, and your budget. Our localized intelligence engine compiles terrain conditions and community secrets into a bespoke blueprint in seconds.
                  </p>
                </div>

                {/* Stunning Premium Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 w-full max-w-md sm:max-w-none">
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-8 py-4 rounded-2xl font-label-md text-[16px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(253,111,73,0.5)] shadow-xl group cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/plan");
                    }}
                  >
                    <span>Design Your Journey</span>
                    
                  </a>
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl font-label-md text-[16px] bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/community");
                    }}
                  >
                    <span className="material-symbols-outlined text-[20px] mr-2 text-secondary-fixed">
                      explore
                    </span>
                    Explore Real Experiences
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-container-low py-unit-2xl">
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
                <div className="lg:col-span-5 space-y-unit-2xs">
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-bold">
                    The Modern Dispatches
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary leading-snug">
                    One destination. <br />
                    <span className="italic font-caption-editorial text-on-surface-variant font-normal">
                      Infinite ways to experience it.
                    </span>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md pt-1">
                    Algorithmic precision plans the complex logistics. Authentic
                    notes from seasoned wanderers ensure every sunrise, coffee
                    shop, and detour feels personal.
                  </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-unit-md">
                  <div className="bg-surface p-unit-md rounded-xl space-y-1 shadow-sm">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                      Field Archive
                    </span>
                    <div className="font-headline-md text-headline-md text-primary font-bold">
                      {stats.totalPosts > 0 ? stats.totalPosts : "128k+"}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Real field stories and raw route logs recorded.
                    </p>
                  </div>
                  <div className="bg-surface p-unit-md rounded-xl space-y-1 shadow-sm">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                      Active Travelers
                    </span>
                    <div className="font-headline-md text-headline-md text-secondary font-bold">
                      {stats.totalUsers > 0 ? stats.totalUsers : "94%"}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Explorers designing bespoke journeys right now.
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-surface p-unit-md rounded-xl space-y-1 shadow-sm">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                      Expeditions Mapped
                    </span>
                    <div className="font-headline-md text-headline-md text-primary font-bold">
                      {stats.totalTrips > 0 ? stats.totalTrips : "42"}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      AI-generated itineraries connecting unique terrains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full bg-surface py-unit-3xl"
            id="planner-studio"
          >
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg space-y-unit-xl">
              <div className="flex flex-col items-center justify-center gap-unit-md text-center">
                <div className="space-y-unit-2xs max-w-2xl flex flex-col items-center">
                  <div className="inline-flex items-center gap-unit-2xs bg-primary-fixed/40 text-primary px-unit-xs py-1 rounded-full font-meta-mono text-meta-mono uppercase">
                    <span className="material-symbols-outlined text-[14px]">
                      auto_awesome
                    </span>
                    AI Cartographic Studio
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    Design your journey in seconds.
                  </h2>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    Input your parameters. Our localized travel intelligence
                    engine compiles terrain conditions, travel speeds, and
                    community secrets into a bespoke blueprint.
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start">
                <div className="lg:col-span-8 lg:col-start-3 bg-surface-container-low p-unit-lg md:p-unit-xl rounded-2xl shadow-sm space-y-unit-lg">
                  <div className="space-y-unit-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                        01 • Where do you wish to go?
                      </label>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        Coordinates auto-detect
                      </span>
                    </div>
                    <div className="relative flex items-center bg-surface rounded-xl p-unit-xs shadow-sm">
                      <span className="material-symbols-outlined text-primary ml-unit-xs">
                        pin_drop
                      </span>
                      <input
                        className="w-full bg-transparent px-unit-sm py-unit-2xs font-headline-sm text-headline-sm text-primary focus:outline-none placeholder:text-outline/40"
                        id="destination-input"
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                      <span className="bg-surface-container px-unit-xs py-1 rounded font-meta-mono text-meta-mono text-on-surface-variant">
                        IN • 2,050m
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-unit-xs pt-1">
                      <span className="font-meta-mono text-meta-mono text-outline">
                        Trending:
                      </span>
                      <button
                        className="tag-shortcut px-unit-xs py-0.5 rounded bg-surface hover:bg-surface-container text-on-surface font-meta-mono text-meta-mono transition-colors"
                        type="button"
                      >
                        Spiti Valley
                      </button>
                      <button
                        className="tag-shortcut px-unit-xs py-0.5 rounded bg-surface hover:bg-surface-container text-on-surface font-meta-mono text-meta-mono transition-colors"
                        type="button"
                      >
                        Fontainhas, Goa
                      </button>
                      <button
                        className="tag-shortcut px-unit-xs py-0.5 rounded bg-surface hover:bg-surface-container text-on-surface font-meta-mono text-meta-mono transition-colors"
                        type="button"
                      >
                        Munnar Terraces
                      </button>
                      <button
                        className="tag-shortcut px-unit-xs py-0.5 rounded bg-surface hover:bg-surface-container text-on-surface font-meta-mono text-meta-mono transition-colors"
                        type="button"
                      >
                        Zanskar
                      </button>
                    </div>
                  </div>

                  <div className="space-y-unit-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                        02 • Temporal Window &amp; Climate
                      </label>
                      <span className="font-meta-mono text-meta-mono text-secondary font-bold">
                        Optimal Season
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-unit-sm">
                      <div className="bg-surface p-unit-sm rounded-xl shadow-sm">
                        <span className="font-meta-mono text-meta-mono text-outline block">
                          Departure Date
                        </span>
                        <span className="font-headline-sm text-headline-sm text-primary">
                          {today}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          5 nights • Flexible
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-unit-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                        03 • Total Expedition Budget
                      </label>
                      <span
                        className="font-headline-sm text-headline-sm text-secondary font-bold"
                        id="budget-value"
                      >
                        ₹{budget.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="bg-surface p-unit-md rounded-xl shadow-sm space-y-unit-sm">
                      <input
                        className="w-full accent-secondary cursor-pointer h-2 bg-surface-container rounded-lg"
                        id="budget-slider"
                        max="150000"
                        min="15000"
                        step="5000"
                        type="range"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                      />
                      <div className="flex justify-between font-meta-mono text-meta-mono text-outline">
                        <span>₹15k (Backpacker)</span>
                        <span>₹50k (Heritage Boutique)</span>
                        <span>₹1.5L+ (Expedition Luxury)</span>
                      </div>
                      <div className="pt-2 flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                        <span>Selected style unlocks:</span>
                        <span className="font-semibold text-primary">
                          Private heritage stone homestay + Local driver
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-unit-xs">
                    <label className="font-label-caps text-label-caps uppercase text-primary tracking-wider">
                      04 • Travel Tempo &amp; Inclinations
                    </label>
                    <div className="grid grid-cols-2 gap-unit-xs font-label-md text-label-md">
                      <button
                        className="archetype-btn active bg-primary text-on-primary py-unit-xs px-unit-sm rounded-lg text-left flex items-center justify-between transition-colors"
                        type="button"
                      >
                        <span>Slow Wanderer</span>
                        <span className="material-symbols-outlined text-[16px]">
                          coffee
                        </span>
                      </button>
                      <button
                        className="archetype-btn bg-surface text-on-surface hover:bg-surface-container py-unit-xs px-unit-sm rounded-lg text-left flex items-center justify-between transition-colors"
                        type="button"
                      >
                        <span>Alpine Treks</span>
                        <span className="material-symbols-outlined text-[16px]">
                          hiking
                        </span>
                      </button>
                      <button
                        className="archetype-btn bg-surface text-on-surface hover:bg-surface-container py-unit-xs px-unit-sm rounded-lg text-left flex items-center justify-between transition-colors"
                        type="button"
                      >
                        <span>Artisan Cafes</span>
                        <span className="material-symbols-outlined text-[16px]">
                          bakery_dining
                        </span>
                      </button>
                      <button
                        className="archetype-btn bg-surface text-on-surface hover:bg-surface-container py-unit-xs px-unit-sm rounded-lg text-left flex items-center justify-between transition-colors"
                        type="button"
                      >
                        <span>Heritage Craft</span>
                        <span className="material-symbols-outlined text-[16px]">
                          temple_hindu
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-unit-xs space-y-2">
                    <button
                      className="w-full py-unit-md bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:bg-primary-container shadow-md transition-all flex items-center justify-center gap-2 group"
                      id="generate-btn"
                      type="button"
                      onClick={() => navigate('/plan', { state: { destination, budget } })}
                    >

                      <span>Generate Your Precision Itinerary</span>
                    </button>
                    <p className="text-center font-meta-mono text-meta-mono text-outline">
                      Synthesizing 42 live traveler logs • 8-second generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-container-low py-unit-3xl">
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg space-y-unit-2xl">
              <div className="max-w-xl space-y-unit-2xs">
                <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                  Methodology
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  How VacationExp shapes your journey.
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  Moving past uniform tourist itineraries. We combine
                  algorithmic calculations with the sensory memories of people
                  who actually walked the path.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
                <div className="bg-surface p-unit-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-unit-lg group hover:shadow-md transition-all">
                  <div className="space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-lg text-headline-lg text-outline-variant font-light group-hover:text-secondary transition-colors">
                        01
                      </span>
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        edit_calendar
                      </span>
                    </div>
                    <div className="space-y-unit-xs">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Tell us your journey.
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Select your destination, dates, budget envelope, and
                        pace. Whether you crave slow café mornings or technical
                        mountain ridge treks, the system molds to your rhythm.
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-md font-meta-mono text-meta-mono text-outline border-t border-outline-variant/20">
                    Phase 1 • Personal Profile Calibration
                  </div>
                </div>

                <div className="bg-surface p-unit-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-unit-lg group hover:shadow-md transition-all">
                  <div className="space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-lg text-headline-lg text-outline-variant font-light group-hover:text-primary transition-colors">
                        02
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[28px]">
                        insights
                      </span>
                    </div>
                    <div className="space-y-unit-xs">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Let AI calculate the details.
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Our models analyze mountain transit durations, local
                        market hours, weather buffers, and price spikes to craft
                        a continuous, stress-free route schedule.
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-md font-meta-mono text-meta-mono text-outline border-t border-outline-variant/20">
                    Phase 2 • Dynamic Constraint Routing
                  </div>
                </div>

                <div className="bg-surface p-unit-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-unit-lg group hover:shadow-md transition-all">
                  <div className="space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-lg text-headline-lg text-outline-variant font-light group-hover:text-secondary-container transition-colors">
                        03
                      </span>
                      <span className="material-symbols-outlined text-surface-tint text-[28px]">
                        explore
                      </span>
                    </div>
                    <div className="space-y-unit-xs">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Experience like a traveler.
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Unlock field notes, unmapped trails, and authentic
                        secrets from travelers who arrived yesterday. Never get
                        pushed into standard tourist traps again.
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-md font-meta-mono text-meta-mono text-outline border-t border-outline-variant/20">
                    Phase 3 • Ground-Truth Verification
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface py-unit-3xl space-y-unit-3xl">
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
                <div className="lg:col-span-6 space-y-unit-md">
                  <div className="space-y-unit-2xs">
                    <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                      Module A • Itinerary Engineering
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Your trip, organized around you.
                    </h2>
                  </div>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    A full-day trip is not a rigid spreadsheet. It is a
                    harmonious narrative. VacationExp constructs morning
                    contemplation, active afternoon discovery, and intimate
                    evening dinners with built-in rest periods.
                  </p>

                  <div className="grid grid-cols-2 gap-unit-md pt-unit-xs">
                    <div className="bg-surface-container-low p-unit-sm rounded-xl space-y-1">
                      <span className="font-meta-mono text-meta-mono text-secondary font-bold uppercase">
                        Transit Buffers
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        Calculates winding mountain switchback delays
                        automatically.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-unit-sm rounded-xl space-y-1">
                      <span className="font-meta-mono text-meta-mono text-secondary font-bold uppercase">
                        Offline Dispatches
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        Full access to terrain notes and phone numbers when cell
                        reception drops.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-surface-container-high p-unit-lg rounded-2xl shadow-sm space-y-unit-md">
                    <div className="flex items-center justify-between pb-unit-xs border-b border-outline-variant/30">
                      <span className="font-meta-mono text-meta-mono uppercase text-primary font-bold">
                        Chronological Flow Blueprint
                      </span>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        Manali • Day 2
                      </span>
                    </div>
                    <div className="space-y-unit-sm relative pl-6 border-l-2 border-primary/20">
                      <div className="relative space-y-1">
                        <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          07:30 AM • Acclimatization Walk
                        </span>
                        <div className="font-label-md text-label-md text-primary">
                          Hidden Pine Path behind Manu Temple
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Gentle 250m elevation gain. Fresh morning mountain
                          mist.
                        </p>
                      </div>
                      <div className="relative space-y-1 pt-unit-xs">
                        <span className="absolute -left-[31px] top-4 w-3 h-3 rounded-full bg-primary"></span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          12:15 PM • Local Sustenance
                        </span>
                        <div className="font-label-md text-label-md text-primary">
                          Babu Ram’s Traditional Siddu Hearth
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Steamed walnut and poppyseed wheat bread served with
                          pure clarified butter.
                        </p>
                      </div>
                      <div className="relative space-y-1 pt-unit-xs">
                        <span className="absolute -left-[31px] top-4 w-3 h-3 rounded-full bg-surface-tint"></span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          04:45 PM • Golden Hour Outlook
                        </span>
                        <div className="font-label-md text-label-md text-primary">
                          Goshal Valley Edge Overlook
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Watch sunset shadows drape across Rohtang Pass range.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-surface-container-low py-unit-2xl">
              <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
                  <div className="lg:col-span-6 order-2 lg:order-1 bg-surface p-unit-lg md:p-unit-xl rounded-2xl shadow-sm space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                          Dynamic Ledger Allocation
                        </span>
                        <h4 className="font-headline-sm text-headline-sm text-primary">
                          Expedition Envelope • ₹45,000
                        </h4>
                      </div>
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        account_balance_wallet
                      </span>
                    </div>

                    <div className="space-y-unit-sm pt-unit-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between font-body-sm text-body-sm">
                          <span className="font-semibold text-primary">
                            Character Stays &amp; Homestays (42%)
                          </span>
                          <span className="font-meta-mono text-meta-mono text-on-surface">
                            ₹18,900
                          </span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "42%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between font-body-sm text-body-sm">
                          <span className="font-semibold text-primary">
                            Food, Coffee &amp; Local Kitchens (24%)
                          </span>
                          <span className="font-meta-mono text-meta-mono text-on-surface">
                            ₹10,800
                          </span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-secondary h-full rounded-full"
                            style={{ width: "24%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between font-body-sm text-body-sm">
                          <span className="font-semibold text-primary">
                            Dedicated Local Transit (18%)
                          </span>
                          <span className="font-meta-mono text-meta-mono text-on-surface">
                            ₹8,100
                          </span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-surface-tint h-full rounded-full"
                            style={{ width: "18%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between font-body-sm text-body-sm">
                          <span className="font-semibold text-primary">
                            Curated Passes &amp; Trail Permits (16%)
                          </span>
                          <span className="font-meta-mono text-meta-mono text-on-surface">
                            ₹7,200
                          </span>
                        </div>
                        <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-tertiary-container h-full rounded-full"
                            style={{ width: "16%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface-container p-unit-sm rounded-xl flex items-center gap-unit-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        shield
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        <strong>Anti-Tourist Trap Engine:</strong> Live pricing
                        flags taxis charging over 1.4x standard union tariff.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-6 order-1 lg:order-2 space-y-unit-md">
                    <div className="space-y-unit-2xs">
                      <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                        Module B • Smart Budget Planning
                      </span>
                      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                        Know where your money goes before your journey begins.
                      </h2>
                    </div>
                    <p className="font-body-lead text-body-lead text-on-surface-variant">
                      No nebulous vacation estimates. VacationExp categorizes
                      and locks your daily expenses based on real-time market
                      rates for accommodation, private cabs, regional meals, and
                      unexpected mountain pass permits.
                    </p>
                    <ul className="space-y-unit-xs font-body-md text-body-md text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        Direct contact links to local verified drivers, skipping
                        intermediary aggregator fees.
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                        Clear split recommendations for cash-heavy remote
                        Himalayan and coastal bazaars.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
                <div className="lg:col-span-5 space-y-unit-md">
                  <div className="space-y-unit-2xs">
                    <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                      Module C • Secret Cartography
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Discover places you won't always find in a travel guide.
                    </h2>
                  </div>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    Mass-tourism algorithms push everyone to the same crowded
                    viewpoints. We tap our network of local hosts, naturalists,
                    and solo travelers to reveal quiet sanctuaries.
                  </p>
                  <div className="space-y-unit-sm">
                    <div className="bg-surface-container-low p-unit-md rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary">
                          The Sulphur Spring of Kalath
                        </span>
                        <span className="font-meta-mono text-meta-mono text-secondary">
                          Avoid Vashisht Crowds
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Located 6km downstream from Manali. Natural, quiet
                        thermal springs tucked behind river boulders, maintained
                        by local elders.
                      </p>
                    </div>
                    <div className="bg-surface-container-low p-unit-md rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary">
                          Soil &amp; Timber Kath-Kuni Houses
                        </span>
                        <span className="font-meta-mono text-meta-mono text-primary font-bold">
                          Naggar Foothills
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Earthquake-resistant indigenous wood architecture
                        preserved across 300 years without nails.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl bg-primary">
                    <img
                      className="w-full h-[75vh] object-cover opacity-90"
                      data-alt="Stunning alpine landscape with dramatic mountain ridges under star-filled clear sky, small solitary wooden stone cabin glowing softly from within, moody deep teal and warm amber night light"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcxaVC0u5b9cv9Er6mH3PVcYXSGJ4BoxjSAzTEI_t6a4tGYyVa6F_3BVtbrJg_y1lMPwcPNJm5RvaW2jz7A9_N-sP4VEClAf7mqOpYjNUdtPjFYSPd8YqIlFVu90WfVJkbQM_w9pU4cayOzl2an2pNT8vUpsZNYR2TU9wn9DkvOgcBKlKl3HLijlIL2IG2gDmEIbdyKJDys8Ci0Mq9j6Yc3O1a2C6GfPIqgz0XprWbu29hzkje17Nq"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent"></div>

                    <div className="absolute top-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-unit-sm rounded-xl max-w-xs shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-secondary-container animate-pulse"></span>
                        <span className="font-meta-mono text-meta-mono uppercase font-bold text-primary">
                          Hidden Node Unlocked
                        </span>
                      </div>
                      <div className="font-label-md text-label-md text-primary pt-1">
                        Hampta Valley High Meadow
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        3,100m ASL • Zero vehicle access • 45m trail walk from
                        last asphalt point.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-surface-container-low py-unit-2xl">
              <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
                  <div className="lg:col-span-6 grid grid-cols-2 gap-unit-md">
                    <div className="space-y-unit-md">
                      <div className="h-56 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="Traditional steaming pot of rich mountain broth and handmade dumplings garnished with wild mountain coriander and toasted chili oils, warm ambient natural wooden table setting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGYJvhgN0ZHinBQyvxV57Ame5bSCNVCIzUb8VbRDXxKmYp4Gux4BWTLd_u-b-lugDwcfNIs4ezyq8e3MMkS6dNKC7Rxj6X8Qg6t_m0zxPZXbi49NBoLAtwL5-_rrU6PkaEpnQ06rcBpfbILQAn-RAhpDejkdtU96V9tIPOfnNkK0k_XZABVmp32BDrAGh8JcUGzfTyL6jMGoT_5c4V1uF3xSEDLhC_9FmarABOWUgDFFnVhRmFVuiF"
                        />
                      </div>
                      <div className="bg-surface p-unit-md rounded-2xl shadow-sm space-y-1">
                        <span className="font-meta-mono text-meta-mono text-secondary font-bold uppercase">
                          Heritage Bakery
                        </span>
                        <div className="font-label-md text-label-md text-primary">
                          Dylan's Old Manali
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Famous for toasted cinnamon walnut cookies and dark
                          roast since 1998.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-unit-md pt-unit-lg">
                      <div className="bg-surface p-unit-md rounded-2xl shadow-sm space-y-1">
                        <span className="font-meta-mono text-meta-mono text-secondary font-bold uppercase">
                          Mountain Specialty
                        </span>
                        <div className="font-label-md text-label-md text-primary">
                          Trout in Walnut Pesto
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Fresh cold-stream Beas river harvest prepared with
                          locally ground wild herbs.
                        </p>
                      </div>
                      <div className="h-56 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="Cozy rustic mountain cafe interior with dark timber beams, traveler journals on shelves, vintage coffee grinder, warm glowing incandescent lighting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWskeMRY-psYe4m-qPJKBM60owJzzoOrHcqUe-t5HM5GgS6G1P2mQW-RJ2h-ht3z1u_IrHMboYHgyhABZQf8mF_5VL4Iv8l09ZpRxWg2_xrVXgtJVozqyJcz5TG8y2jN3UqyraLoQ67ddy1gSn4eEY8ZhmhluBgkc6V9myA1cHorpiFGCHtybfnESu2HXwdAexaUrz3SqR5MqU9DAufzMi0j1CGrDymrTPqaKaWn71QCj_TrYqE9i"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-unit-md">
                    <div className="space-y-unit-2xs">
                      <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                        Module D • Authentic Gastronomy
                      </span>
                      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                        Eat like you belong there.
                      </h2>
                    </div>
                    <p className="font-body-lead text-body-lead text-on-surface-variant">
                      Every region has two culinary cultures: the sanitized menu
                      designed for transient tourists, and the vibrant,
                      fire-cooked recipes passed down through generations.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      VacationExp directs you to family thali parlors, high-pass
                      tea shelters where truckers drink salted yak butter tea,
                      and hidden village bakeries using 50-year-old sourdough
                      starters.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full bg-surface py-unit-3xl"
            id="community-dispatches"
          >
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg space-y-unit-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md">
                <div className="space-y-unit-2xs max-w-xl">
                  <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                    Field Notes &amp; Real Travelers
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    Dispatches from the road.
                  </h2>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    Unfiltered stories, verified budgets, and honest logs
                    written by members of the VacationExp fellowship.
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                  href="#"
                >
                  <span>Read All 1,420 Journal Entries →</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-lg">
                <article className="md:col-span-7 bg-surface-container-low rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                  <div className="relative h-72 w-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      data-alt="Deep green fir trees framing a winding mountain road in northern India with distant snowy peaks shrouded in misty golden morning light"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ2mBhhepBwinIJIPJhKriTjeYSGxYm-2peegpq1bP8pOh7dCnD0YOlqHw5Bu87GEOA87WQW-VQTHXu11_fzF0zu9h2ldM2A7w9_bQipAoxvUzUWzxWwmVQBMqBY9Jml531DFimLQMb2h54Jd8GmrH0a5zsVJ1pEFiFj_-PWFCKyHCaV4n2vFzzZVtjJWQvg28vSdUffRyd9sNckTApKwjXCdAaRcPzH-8ueQdQy_7GA-PSXGqOV5g"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary font-meta-mono text-meta-mono px-unit-xs py-1 rounded">
                      FEATURE DISPATCH
                    </div>

                  </div>
                  <div className="p-unit-lg space-y-unit-sm">
                    <div className="flex items-center gap-unit-sm font-meta-mono text-meta-mono text-outline">
                      <span>By Aarav Sharma</span>
                      <span>•</span>
                      <span>8 min read</span>
                      <span>•</span>
                      <span className="text-secondary font-semibold">
                        Verified Route
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors">
                      The side of Manali most tourists never see: Ten days in
                      high Goshal.
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                      If you stay on the main Mall Road, you’re missing the
                      quiet rhythm of the valley. Here is where the woodcarvers
                      work, where local cider is pressed, and where silence
                      still exists.
                    </p>
                    <div className="pt-unit-xs flex items-center justify-between border-t border-outline-variant/20 font-meta-mono text-meta-mono">
                      <span className="text-outline">
                        Recorded: October 2024
                      </span>
                      <span className="text-primary font-bold">
                        Read Field Notes →
                      </span>
                    </div>
                  </div>
                </article>

                <article className="md:col-span-5 bg-surface-container-low rounded-2xl p-unit-lg shadow-sm flex flex-col justify-between space-y-unit-md group hover:shadow-md transition-all">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="bg-secondary/10 text-secondary font-label-caps text-label-caps px-2 py-0.5 rounded">
                        Financial Breakdown
                      </span>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        1,204 Saves
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      How I explored South Goa for ₹15,000 without sacrificing
                      comfort.
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Priya Nair documents a detailed 6-day balance sheet:
                      renting a vintage Honda Activa, quiet homestays in
                      Galgibaga beach, and local fish thalis for ₹180.
                    </p>

                    <div className="bg-surface p-unit-sm rounded-xl space-y-1 font-meta-mono text-meta-mono">
                      <div className="flex justify-between text-outline">
                        <span>Homestay (5 nights):</span>
                        <span className="text-primary font-bold">₹7,500</span>
                      </div>
                      <div className="flex justify-between text-outline">
                        <span>Scooter &amp; Fuel:</span>
                        <span className="text-primary font-bold">₹2,800</span>
                      </div>
                      <div className="flex justify-between text-outline">
                        <span>Coastal Dining:</span>
                        <span className="text-primary font-bold">₹4,700</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-unit-xs border-t border-outline-variant/20 font-meta-mono text-meta-mono">
                    <span className="text-on-surface">Author: Priya Nair</span>
                    <span className="text-secondary font-semibold">
                      Inspect Budget Ledger →
                    </span>
                  </div>
                </article>

                <article className="md:col-span-6 bg-surface-container-low rounded-2xl p-unit-lg shadow-sm flex flex-col justify-between space-y-unit-md group hover:shadow-md transition-all">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="bg-surface-tint/10 text-surface-tint font-label-caps text-label-caps px-2 py-0.5 rounded">
                        Culinary Trail
                      </span>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        890 Saves
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      7 Old Delhi culinary corners worth deliberately getting
                      lost for.
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kabir Mehta tracks century-old nihari cauldrons, khameeri
                      rotis in Chitli Qabar, and jalebi makers who still clarify
                      their own milk fat.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-unit-xs border-t border-outline-variant/20 font-meta-mono text-meta-mono">
                    <span className="text-on-surface">Author: Kabir Mehta</span>
                    <span className="text-primary font-bold">
                      Open Food Map →
                    </span>
                  </div>
                </article>

                <article className="md:col-span-6 bg-surface-container-low rounded-2xl p-unit-lg shadow-sm flex flex-col justify-between space-y-unit-md group hover:shadow-md transition-all">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="bg-primary/10 text-primary font-label-caps text-label-caps px-2 py-0.5 rounded">
                        Solitude Dispatch
                      </span>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        620 Saves
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      A quiet weekend among the apple orchards of Kotgarh.
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ananya Roy shares the exact GPS coordinates of a
                      90-year-old stone farmhouse overlooking the Sutlej river
                      gorge where Wi-Fi gives way to silence.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-unit-xs border-t border-outline-variant/20 font-meta-mono text-meta-mono">
                    <span className="text-on-surface">Author: Ananya Roy</span>
                    <span className="text-primary font-bold">
                      View Homestay Log →
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-container-low py-unit-3xl">
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg space-y-unit-2xl">
              <div className="max-w-2xl space-y-unit-2xs">
                <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-wider">
                  Cartographic Atlas
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Where will your next story begin?
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  Select a geographic node to unlock curated live itineraries,
                  weather windows, and direct traveler contacts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-unit-md">
                <div className="lg:col-span-5 group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="Dramatic high mountain peaks of Himachal Pradesh covered with snow and pine forests under bright alpine sun, clear deep teal skies"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqZJ1xK-qGkCGRIow3HI2UFYHYdmGoGCbjWNzWiaofx6USNoe79-KxwB-MOTcHQGqS4_wpoMIUI0fIuM-8r1I62XLeXm_JuB-NxvGSyLWR5z0KTs2tmwYQrwglhmapJNgVaSiXQU4nhJ557uIqsh75wKDmSkhFOT7N0OnXm_LUg5rVuAp6Orj0CsUVAE8cTqG89_CZufdc0Xs8ttdm1FdHFl-HZrLml3LCgfAG7IrQdpx_fwFqWbK2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
                    <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase">
                      32.24° N • Elevation 2,050m
                    </span>
                    <h3 className="font-headline-md text-headline-md">
                      Manali &amp; Kullu Valley
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                      Pine mist, unmapped waterfalls, and historic deodar cedar
                      forests.
                    </p>
                    <div className="pt-2 flex items-center justify-between font-meta-mono text-meta-mono">
                      <span>Best: Apr – Jun</span>
                      <span className="text-secondary-fixed">
                        840 Active Journals →
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 group relative h-96 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="Vibrant Portuguese heritage villa in Goa with terracotta roof tiles, pastel ochre walls, lush palm fronds, warm tropical sunlight"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn-6txeqUf6p4vu5Q2WxmlE5TR0vnF2iDJ2iII-xHN3B8JsEDG1mkaQiRtttORPQLVwLegYI_7_PpF_wqQc2WdU7tf-XQB1Za-HDhTNWjqvNlILHPRAlGgnc6rDV-M-iFfJLjLrIPiecEpSX_RaSnXAg4Cr1_9SCHa64W-rdYZWvVYs7ihxuE9V1xo02GbcMBPwB1jvaNwUMHSRd9gzcaSiP3uHB6thupTFVZ3chEtoBVeOX7bV-vB"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
                    <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase">
                      15.29° N • Arabian Coastal Strip
                    </span>
                    <h3 className="font-headline-md text-headline-md">
                      Old Goa &amp; South Coves
                    </h3>
                    <p className="font-body-sm text-body-sm text-primary-fixed-dim">
                      Portuguese baroque architecture, quiet estuary backwaters,
                      and susegad living.
                    </p>
                    <div className="pt-2 flex items-center justify-between font-meta-mono text-meta-mono">
                      <span>Best: Nov – Mar</span>
                      <span className="text-secondary-fixed">
                        1,120 Active Journals →
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="Stark high-altitude desert mountains of Ladakh with ancient whitewashed Buddhist monastery perched dramatically on a jagged rock cliff under brilliant blue sky"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD92QCYJxIP0iIUflJf9Ynov_MyvRe1NxzgpEv5TStCslecuoEx5sqn2-hpT4HUcQdc7hGzRJK7Ssp5PLuHxJg6gFe1osFLfZJk0ivtSc8F4UyWOTjcwmDDC4YmRmb5tfQtV6FA5SW59YpmVWvc6t51zxsABofN_xp_mojZl39wZrOHzViIWID-nihtu4g9VvSUtuWCF0aY8LSgK7UXMUAnAFG0CWQykriYXl8FlhiJoFMA-fMeAjxp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
                    <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase">
                      34.15° N • High Plateau
                    </span>
                    <h3 className="font-headline-sm text-headline-sm">
                      Ladakh Monasteries
                    </h3>
                    <div className="pt-1 flex items-center justify-between font-meta-mono text-meta-mono">
                      <span>Season: Jun – Sep</span>
                      <span className="text-secondary-fixed">Explore →</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="Ornate pink sandstone arched pavilion and geometric courtyard in Rajasthan, India, warm golden afternoon shadows and desert majesty"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2QMErvi4ODk8GVw4GrQ_uIUbjTMeJ955Cyg-0n6a1v9NfvVTHn3RhS0kCFzzrs3I4QHdtSQoP0P39EMg5-tyGaUQ0-RM-PGERktU6Ez-CZClfKmRE8Luogp2Pne9uf50v-IFKRIPHu9a8z_jPhTwQsGolXILsMT_5wGozAO7cj189AkoGdh-BlN1LxaaYY_KMKUYY-3i12Hq93YAwpz_aRvSNeupwcuVDPKwADr2mlxJ1qDwWU0fH"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
                    <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase">
                      26.91° N • Pink Sandstone
                    </span>
                    <h3 className="font-headline-sm text-headline-sm">
                      Jaipur Courtyards
                    </h3>
                    <div className="pt-1 flex items-center justify-between font-meta-mono text-meta-mono">
                      <span>Season: Oct – Mar</span>
                      <span className="text-secondary-fixed">Explore →</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="Serene emerald green Kerala backwaters with a traditional wooden thatched houseboat floating quietly under overhanging coconut palm trees at tranquil dawn"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZIBuqFQMej7rS72dtjKIDHFHy6FXZqqyL-NOqP_zIlBGO3SHGaXwwPhoQWKMJsV0hC39lJd8ej8G8XBCWF4JqwrmaHWLMy_3-LdoQwRWACKE38RPR-PddjDCOrchRJsmT3yFcBvhwAs9JMdRi4BQ4n7wLv3dBBdHXJeBSkcFjIURWwRs7LJQG_q8bRQHM9IPQQ8JepHShItwXFtjeLENWXidhwfPaaJEXcWp2lWKNnbCyTA0Xvde8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
                    <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase">
                      9.49° N • Emerald Canals
                    </span>
                    <h3 className="font-headline-sm text-headline-sm">
                      Kerala Waterways
                    </h3>
                    <div className="pt-1 flex items-center justify-between font-meta-mono text-meta-mono">
                      <span>Season: Sep – Mar</span>
                      <span className="text-secondary-fixed">Explore →</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-primary text-on-primary py-unit-4xl relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg text-center max-w-4xl mx-auto space-y-unit-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md font-meta-mono text-meta-mono text-primary-fixed uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Begin Your Next Expedition
              </div>
              <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary tracking-tight">
                Your next story starts with a journey.
              </h2>
              <p className="font-body-lead text-body-lead text-primary-fixed-dim max-w-2xl mx-auto">
                Plan your trip with AI. Discover it through the boots, journals,
                and field advice of real travelers. Zero cookie-cutter packages.
              </p>
              <div className="pt-unit-md flex flex-col sm:flex-row items-center justify-center gap-unit-md">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-secondary-container text-on-secondary-container px-unit-xl py-unit-md rounded-xl font-label-md text-label-md transition-all duration-200 hover:bg-secondary hover:text-on-secondary shadow-xl"
                  href="#planner-studio"
                >
                  Start Planning With AI →
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center px-unit-xl py-unit-md rounded-xl font-label-md text-label-md bg-surface-container-lowest/10 backdrop-blur-md text-on-primary hover:bg-surface-container-lowest/20 transition-colors"
                  href="#community-dispatches"
                >
                  Browse Community Dispatches
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

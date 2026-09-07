import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // Greeting based on time of day
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${userInfo.token}` };

        const tripsRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/trips`,
          { headers },
        );
        if (tripsRes.status === 401) {
          navigate("/login");
          return;
        }
        const tripsData = await tripsRes.json();

        const postsRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/posts/user/me`,
          { headers },
        );
        const postsData = await postsRes.json();

        setTrips(Array.isArray(tripsData) ? tripsData : []);
        setPosts(Array.isArray(postsData) ? postsData : []);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  if (loading) {
    return (
      <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased">
        <Navbar />
        <div className="w-full pt-20 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-unit-md text-outline">
            <span className="material-symbols-outlined text-[48px] animate-spin">
              progress_activity
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest">
              Loading Expedition Workspace...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* 1. Personalized Editorial Welcome Bar */}
          <section className="w-full bg-surface px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg pt-unit-xl pb-unit-2xl border-b border-surface-variant/70">
            <div className="w-full flex flex-col gap-unit-lg">
              {/* Telemetry Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-y-unit-xs gap-x-unit-md text-on-surface-variant font-meta-mono text-meta-mono tracking-wider pb-unit-xs border-b border-surface-variant/40">
                <div className="flex items-center gap-unit-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-primary font-bold">
                    Expedition Workspace
                  </span>
                  <span className="text-outline">/</span>
                  <span className="bg-surface-container-high px-unit-xs py-0.5 rounded text-on-surface font-semibold">
                    {userInfo?.name?.toUpperCase() || "CARTOGRAPHER"}
                  </span>
                </div>
                <div className="flex items-center gap-unit-md font-meta-mono text-meta-mono text-outline">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-surface-tint">
                      backpack
                    </span>
                    {trips.length} Expedition{trips.length !== 1 ? "s" : ""}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-surface-tint">
                      edit_note
                    </span>
                    {posts.length} Dispatch{posts.length !== 1 ? "es" : ""}
                  </span>
                </div>
              </div>

              {/* Main Welcome Block */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-unit-xl">
                <div className="max-w-3xl space-y-unit-xs">
                  <div className="inline-flex items-center gap-unit-2xs text-secondary font-label-caps text-label-caps uppercase tracking-widest bg-secondary-fixed/50 px-unit-sm py-unit-2xs rounded-full">
                    <span className="material-symbols-outlined text-[14px]">
                      auto_awesome
                    </span>
                    Expedition Workspace • Field Office
                  </div>
                  <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight leading-none">
                    {greeting}, {userInfo?.name?.split(" ")[0] || "Explorer"}.
                  </h1>
                  <p className="font-caption-editorial text-caption-editorial text-on-surface-variant italic pt-unit-2xs leading-relaxed max-w-2xl">
                    Where will your next story take you? Your expedition
                    workspace awaits.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-unit-sm shrink-0">
                  <button
                    onClick={() => navigate("/plan")}
                    className="inline-flex items-center justify-center gap-unit-xs bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md shadow-md hover:bg-secondary/90 transition-all group"
                  >
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-12">
                      auto_awesome
                    </span>
                    <span>+ Plan a New Trip</span>
                    <span className="bg-secondary-container/40 text-on-secondary text-[10px] px-1.5 py-0.5 rounded font-meta-mono">
                      AI CORE
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/community/new")}
                    className="inline-flex items-center justify-center gap-unit-xs bg-surface-container-low text-primary px-unit-md py-unit-sm rounded-xl font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      history_edu
                    </span>
                    <span>Draft Field Dispatch</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Canvas Body */}
          <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl space-y-unit-4xl">
            {/* 2. Expedition Launchpad */}
            <section className="w-full">
              <div className="flex items-baseline justify-between mb-unit-md">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Cartographic Toolkit
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Expedition Launchpad
                  </h2>
                </div>
                <span className="font-meta-mono text-meta-mono text-outline hidden sm:block">
                  SELECT ENGINE OR WORKSPACE
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md">
                {/* AI Trip Planner Studio (7 cols) */}
                <div
                  onClick={() => navigate("/plan")}
                  className="md:col-span-7 bg-surface-container-low rounded-2xl p-unit-xl relative overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="absolute -right-8 -top-8 w-48 h-48 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="space-y-unit-sm relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">
                          auto_awesome
                        </span>
                      </div>
                      <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-unit-xs py-0.5 rounded uppercase">
                        AI Generative Engine
                      </span>
                    </div>
                    <div className="pt-unit-xs">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        AI Trip Planner Studio
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant pt-unit-2xs leading-relaxed max-w-lg">
                        Generate bespoke, optimized itineraries with verified
                        local tariffs, off-grid homestay coordinates, and zero
                        tourist-trap guarantees.
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-lg relative z-10">
                    <span className="inline-flex items-center gap-unit-xs font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors">
                      <span>Initiate AI Synthesizer</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>

                {/* Field Dispatches & Atlas (5 cols) */}
                <div
                  onClick={() => navigate("/community")}
                  className="md:col-span-5 bg-surface-container rounded-2xl p-unit-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
                        <span className="material-symbols-outlined text-[22px]">
                          public
                        </span>
                      </div>
                      <span className="font-meta-mono text-meta-mono text-outline">
                        COMMUNITY ARCHIVE
                      </span>
                    </div>
                    <div className="pt-unit-xs">
                      <h3 className="font-headline-sm text-headline-sm text-primary">
                        Field Dispatches &amp; Atlas
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant pt-unit-2xs leading-relaxed">
                        Explore independent, unsponsored stories logged by
                        verified cartographers. Real fuel costs, seasonal water
                        points, and hidden village trails.
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-lg">
                    <span className="inline-flex items-center gap-unit-xs font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors">
                      <span>Inspect Global Atlas</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </div>

                {/* Share Field Notes (6 cols) */}
                <div
                  onClick={() => navigate("/community/new")}
                  className="md:col-span-6 bg-surface-container-low rounded-2xl p-unit-lg flex items-start gap-unit-md shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">
                      rate_review
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-label-md text-label-md text-primary font-bold">
                      Share Field Notes &amp; Dispatches
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Document a recent traverse or publish your next travel
                      story to safeguard fellow explorers.
                    </p>
                    <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary pt-unit-2xs uppercase tracking-wider group-hover:underline">
                      Publish Route Log →
                    </span>
                  </div>
                </div>

                {/* My Dispatches Vault (6 cols) */}
                <div
                  onClick={() => navigate("/community")}
                  className="md:col-span-6 bg-surface-container-low rounded-2xl p-unit-lg flex items-start gap-unit-md shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">
                      article
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-label-md text-label-md text-primary font-bold">
                        My Dispatch Archive
                      </h4>
                      <span className="bg-surface-variant text-on-surface font-meta-mono text-[11px] px-2 py-0.5 rounded-full">
                        {posts.length} Published
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Your published field dispatches and travel stories.
                    </p>
                    <span className="inline-flex items-center gap-1 font-label-caps text-label-caps text-primary pt-unit-2xs uppercase tracking-wider group-hover:underline">
                      View All Dispatches →
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Recent Journeys (Trips from API) */}
            <section className="w-full space-y-unit-md">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-unit-xs">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                    Archival Log
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Your Recent Journeys
                  </h2>
                </div>
                <button
                  onClick={() => navigate("/plan")}
                  className="font-label-md text-label-md text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  <span>Plan New Expedition</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>

              {trips.length === 0 ? (
                <div className="bg-surface-container-low rounded-2xl p-unit-xl flex flex-col items-center justify-center text-center gap-unit-md border border-dashed border-outline-variant/60 min-h-[200px]">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      add_location_alt
                    </span>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider block">
                      Uncharted Ledger
                    </span>
                    <h4 className="font-headline-sm text-[18px] text-primary pt-1">
                      No Expeditions Logged Yet
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 max-w-sm leading-relaxed">
                      Feed VacationExp a destination, budget, and dates. Let our
                      cartographic AI weave your route.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/plan")}
                    className="inline-flex items-center gap-1 bg-primary text-on-primary py-unit-xs px-unit-md rounded-xl font-label-caps text-label-caps uppercase tracking-wider hover:bg-primary-container transition-all"
                  >
                    <span>Synthesize First Route</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
                  {trips.slice(0, 3).map((trip) => (
                    <div
                      key={trip._id}
                      onClick={() => navigate(`/itinerary/${trip._id}`)}
                      className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="relative h-52 w-full overflow-hidden bg-surface-container">
                          <div className="w-full h-full flex items-center justify-center text-outline-variant">
                            <span className="material-symbols-outlined text-[48px] opacity-30">
                              landscape
                            </span>
                          </div>
                          <div className="absolute top-unit-sm left-unit-sm bg-surface/90 backdrop-blur font-meta-mono text-meta-mono text-primary px-unit-xs py-0.5 rounded">
                            {trip.travelDates?.start
                              ? new Date(
                                  trip.travelDates.start,
                                ).toLocaleDateString("en-IN", {
                                  month: "short",
                                  year: "numeric",
                                })
                              : "TRIP LOG"}
                          </div>
                          <div className="absolute bottom-unit-sm right-unit-sm bg-primary/80 backdrop-blur text-on-primary font-meta-mono text-meta-mono px-unit-xs py-0.5 rounded">
                            {trip.budget ? `₹${trip.budget}` : "AUDITED"}
                          </div>
                        </div>
                        <div className="p-unit-md space-y-unit-xs">
                          <div className="flex items-center justify-between text-on-surface-variant font-meta-mono text-meta-mono">
                            <span>
                              SECTOR:{" "}
                              {trip.destination?.toUpperCase() || "FIELD"}
                            </span>
                            <span className="text-secondary font-semibold">
                              LOGGED
                            </span>
                          </div>
                          <h3 className="font-headline-sm text-primary text-xl">
                            {trip.destination || "Expedition"}
                          </h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-2">
                            {trip.preferences?.join(", ") ||
                              "Personal expedition log"}
                          </p>
                        </div>
                      </div>
                      <div className="p-unit-md pt-0 border-t border-surface-variant/40 mt-unit-sm flex items-center justify-between">
                        <span className="font-caption-editorial text-caption-editorial italic text-secondary flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            article
                          </span>
                          View expedition journal
                        </span>
                        <span className="font-meta-mono text-[11px] text-outline">
                          {trip.itinerary?.dailyItinerary?.length || 0} days
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 4. Two-Column Split: My Dispatches + Community Pulses */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl">
              {/* My Published Dispatches (7 cols) */}
              <section className="lg:col-span-7 space-y-unit-md">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                      Personal Archive
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      My Field Dispatches
                    </h2>
                  </div>
                  <button
                    onClick={() => navigate("/community")}
                    className="font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                  >
                    View All ({posts.length}) →
                  </button>
                </div>

                {posts.length === 0 ? (
                  <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm text-center space-y-unit-sm border border-dashed border-outline-variant/60">
                    <span className="material-symbols-outlined text-[36px] text-outline-variant opacity-40 block">
                      edit_note
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      No dispatches published yet.
                    </p>
                    <button
                      onClick={() => navigate("/community/new")}
                      className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary uppercase tracking-wider hover:underline"
                    >
                      Publish First Dispatch →
                    </button>
                  </div>
                ) : (
                  <div className="space-y-unit-sm">
                    {posts.slice(0, 3).map((post) => (
                      <div
                        key={post._id}
                        onClick={() => navigate(`/community/${post._id}`)}
                        className="bg-surface-container-lowest p-unit-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-unit-md group cursor-pointer"
                      >
                        <div className="flex items-center gap-unit-md min-w-0">
                          <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden shrink-0 flex items-center justify-center">
                            {post.imageUrl ? (
                              <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            ) : (
                              <span className="material-symbols-outlined text-[24px] text-outline-variant opacity-40">
                                image
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-meta-mono text-[11px] text-secondary font-semibold uppercase">
                                Field Dispatch
                              </span>
                              {post.location && (
                                <span className="font-meta-mono text-[11px] text-outline">
                                  • {post.location}
                                </span>
                              )}
                            </div>
                            <h4 className="font-label-md text-label-md text-primary font-bold truncate">
                              {post.title}
                            </h4>
                            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                              {post.likes?.length || 0} endorsements •{" "}
                              {post.comments?.length || 0} dispatches
                            </p>
                          </div>
                        </div>
                        <button className="shrink-0 text-secondary hover:text-primary transition-colors p-2">
                          <span className="material-symbols-outlined text-[20px]">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Quiet Community Pulses (5 cols) */}
              <section className="lg:col-span-5 space-y-unit-md">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                      Network Telegraph
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Quiet Pulses
                    </h2>
                  </div>
                  <span className="font-meta-mono text-meta-mono text-outline">
                    LIVE LOG
                  </span>
                </div>
                <div className="bg-surface-container-low p-unit-lg rounded-2xl shadow-sm space-y-unit-md">
                  <div className="flex items-start gap-unit-sm pb-unit-sm border-b border-surface-variant/40">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0 font-meta-mono text-xs font-bold">
                      <span className="material-symbols-outlined text-[16px]">
                        auto_awesome
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        <strong className="font-semibold text-primary">
                          AI Planner
                        </strong>{" "}
                        is ready to synthesize your next expedition with
                        verified local intelligence.
                      </p>
                      <div className="font-meta-mono text-[11px] text-outline flex items-center gap-1">
                        <span>Now</span> • <span>Gemini + Groq Powered</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-unit-sm pb-unit-sm border-b border-surface-variant/40">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 font-meta-mono text-xs font-bold">
                      {posts.length}
                    </div>
                    <div className="space-y-1">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        You have published{" "}
                        <strong className="font-semibold text-primary">
                          {posts.length} dispatch
                          {posts.length !== 1 ? "es" : ""}
                        </strong>{" "}
                        to the community atlas.
                      </p>
                      <div className="font-meta-mono text-[11px] text-outline flex items-center gap-1">
                        <span>Your archive</span> •{" "}
                        <span>Field Correspondent</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-unit-sm">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        trending_up
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                        <span className="font-semibold text-primary">
                          {trips.length} expedition
                          {trips.length !== 1 ? "s" : ""}
                        </span>{" "}
                        logged in your cartographic archive.
                      </p>
                      <div className="font-meta-mono text-[11px] text-outline flex items-center gap-1">
                        <span>All time</span> • <span>Cartographic Ledger</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-unit-xs">
                    <button
                      onClick={() => navigate("/community")}
                      className="w-full block text-center py-unit-xs bg-surface text-primary rounded-xl font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-container transition-colors shadow-sm"
                    >
                      Open Community Dispatch Line →
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

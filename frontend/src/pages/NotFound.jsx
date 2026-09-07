import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 sm:pt-28 bg-background flex-1">
        <div className="flex flex-col w-full">
          

          {/* Main Hero Narrative & Scenic Anomaly Stage */}
          <section className="max-w-7xl mx-auto px-6 lg:px-container-margin-lg pb-unit-3xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-center">
              {/* Left Cartographic Visual Centerpiece (The Trail Anomaly) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-2 lg:order-1">
                <div className="relative w-full max-w-md bg-surface-container-lowest rounded-xl p-unit-lg shadow-[0_16px_40px_-12px_rgba(26,72,67,0.08)] overflow-hidden">
                  {/* Archival Registration Marks & Subtle Grid Elements */}
                  <div className="absolute top-2 left-2 font-meta-mono text-[9px] text-outline tracking-widest uppercase">
                    REG. MARK // 01-A
                  </div>
                  <div className="absolute top-2 right-2 font-meta-mono text-[9px] text-outline tracking-widest uppercase">
                    ELEV. 3140M
                  </div>
                  <div className="absolute bottom-2 left-2 font-meta-mono text-[9px] text-outline tracking-widest uppercase">
                    TOPOGRAPHY REF: HIMAL-404
                  </div>
                  <div className="absolute bottom-2 right-2 font-meta-mono text-[9px] text-secondary font-bold uppercase tracking-wider">
                    OFF-MAP
                  </div>

                  {/* Topographic Map Graphic with Trail Split SVG */}
                  <div className="w-full h-72 relative flex items-center justify-center pt-unit-xs pb-unit-xs">
                    <svg
                      className="w-full h-full text-primary"
                      fill="none"
                      viewBox="0 0 380 260"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Topographic Contours */}
                      <path
                        d="M-20 60 C80 20, 160 80, 240 40 C310 10, 360 50, 420 30"
                        stroke="currentColor"
                        strokeDasharray="3 3"
                        strokeOpacity="0.1"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M-10 110 C90 70, 150 130, 260 80 C330 45, 380 95, 410 70"
                        stroke="currentColor"
                        strokeOpacity="0.14"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M-20 160 C70 120, 180 180, 280 130 C340 90, 390 140, 420 120"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M0 210 C100 170, 170 230, 270 180 C330 150, 390 200, 420 170"
                        stroke="currentColor"
                        strokeOpacity="0.15"
                        strokeWidth="1.2"
                      ></path>
                      <path
                        d="M10 250 C120 220, 210 270, 310 220 C370 190, 410 230, 430 210"
                        stroke="currentColor"
                        strokeOpacity="0.08"
                        strokeWidth="1.2"
                      ></path>

                      {/* Primary Marked Trail (Solid, Grounded) */}
                      <path
                        d="M190 250 C185 220, 182 195, 190 170 C194 150, 190 135, 185 125"
                        stroke="#1A4843"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      ></path>

                      {/* Fork A: Safe Waypoint (Points left, solid line to sanctuary) */}
                      <path
                        d="M185 125 C170 110, 140 100, 95 90 C70 85, 45 80, 30 75"
                        stroke="#1A4843"
                        strokeDasharray="4 3"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      ></path>
                      <circle cx="30" cy="75" fill="#1A4843" r="5"></circle>
                      <circle
                        cx="30"
                        cy="75"
                        r="9"
                        stroke="#1A4843"
                        strokeOpacity="0.3"
                        strokeWidth="1.5"
                      ></circle>

                      {/* Fork B: Route 404 / Vanishing Trail (Fades into mist on the right) */}
                      <path
                        d="M185 125 C205 110, 235 95, 275 75 C310 60, 340 45, 365 35"
                        opacity="0.65"
                        stroke="#C45A35"
                        strokeDasharray="3 5"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      ></path>

                      {/* Subtle Mountain Mist / Shading */}
                      <circle
                        cx="320"
                        cy="50"
                        fill="url(#mistGradient)"
                        opacity="0.85"
                        r="45"
                      ></circle>
                      <defs>
                        <radialGradient
                          cx="50%"
                          cy="50%"
                          id="mistGradient"
                          r="50%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#F7FAF8"
                            stopOpacity="0.95"
                          ></stop>
                          <stop
                            offset="70%"
                            stopColor="#F7FAF8"
                            stopOpacity="0.5"
                          ></stop>
                          <stop
                            offset="100%"
                            stopColor="#F7FAF8"
                            stopOpacity="0"
                          ></stop>
                        </radialGradient>
                      </defs>

                      {/* Junction Signpost Graphic */}
                      <g transform="translate(185, 125)">
                        <line
                          stroke="#2D2B23"
                          strokeWidth="2.5"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="28"
                        ></line>
                        {/* Left Sign: Known Trail */}
                        <polygon
                          fill="#1A4843"
                          points="-4,-6 -34,-6 -40,-13 -34,-20 -4,-20"
                        ></polygon>
                        <text
                          fill="#FFFFFF"
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          fontSize="7"
                          fontWeight="700"
                          letterSpacing="0.5"
                          textAnchor="middle"
                          x="-20"
                          y="-10"
                        >
                          BASECAMP
                        </text>

                        {/* Right Sign: Route 404 Detour */}
                        <polygon
                          fill="#FD6F49"
                          points="4,-6 34,-6 40,-13 34,-20 4,-20"
                        ></polygon>
                        <text
                          fill="#3C0800"
                          fontFamily="'Plus Jakarta Sans', sans-serif"
                          fontSize="7"
                          fontWeight="700"
                          letterSpacing="0.5"
                          textAnchor="middle"
                          x="21"
                          y="-10"
                        >
                          DETOUR
                        </text>
                        {/* Central brass finial pin */}
                        <circle cx="0" cy="-13" fill="#E8E2D5" r="2.5"></circle>
                      </g>

                      {/* Traveler Pin at Current Deviation Location */}
                      <g transform="translate(275, 75)">
                        <circle
                          cx="0"
                          cy="0"
                          fill="#C45A35"
                          fillOpacity="0.12"
                          r="14"
                        ></circle>
                        <circle cx="0" cy="0" fill="#C45A35" r="5"></circle>
                        <circle cx="0" cy="0" fill="#FFFFFF" r="1.5"></circle>
                      </g>
                    </svg>
                  </div>

                  {/* Card Bottom Field Metadata */}
                  <div className="bg-surface-container-low rounded-lg p-unit-xs flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[18px]">
                        satellite_alt
                      </span>
                      <span className="font-meta-mono text-meta-mono text-on-surface-variant font-medium">
                        LIDAR Grid: Cloud Cover 84%
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Reroute Ready
                    </span>
                  </div>
                </div>

                {/* Atmospheric Photo Thumbnail Underpinning */}
                <div className="w-11/12 -mt-4 bg-surface-container rounded-xl p-unit-xs shadow-sm flex items-center gap-unit-sm relative z-10">
                  <div className="w-12 h-12 bg-surface-container-highest rounded flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline-variant text-[24px]">
                      landscape
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-caption-editorial text-caption-editorial italic text-on-surface truncate">
                      "The trail was here just at sunrise."
                    </p>
                    <span className="font-meta-mono text-[11px] text-on-surface-variant uppercase">
                      Field Notes • Rohtang Valley, Pass 4
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Editorial Hierarchy & Recovery Core */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-unit-md order-1 lg:order-2">
                {/* Cartographic Error Pill */}
                <div className="inline-flex items-center gap-unit-xs px-unit-sm py-1 rounded bg-secondary/10 text-secondary">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-meta-mono text-meta-mono uppercase font-bold tracking-wider">
                    HTTP 404 // Uncharted Territory
                  </span>
                </div>

                {/* Main Editorial Headline */}
                <h1 className="font-display-hero text-headline-lg lg:text-display-hero text-primary tracking-tight leading-[1.08]">
                  Looks like you've taken a{" "}
                  <span className="italic font-normal text-secondary underline decoration-secondary/30 underline-offset-8">
                    wrong turn.
                  </span>
                </h1>

                {/* Supporting Narrative Copy */}
                <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl leading-relaxed">
                  This page seems to have wandered somewhere off the established
                  map. Even the seasoned cartographers lose the contour line
                  when the high mountain mist descends — let's guide you back to
                  steady ground.
                </p>

                {/* Poetic Travel Aside Stamp */}
                <div className="w-full max-w-xl bg-surface-container-low p-unit-md rounded-lg shadow-sm border-l-4 border-secondary flex items-start gap-unit-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px] flex-shrink-0 mt-0.5">
                    format_quote
                  </span>
                  <div>
                    <p className="font-caption-editorial text-caption-editorial italic text-on-surface leading-snug">
                      "Every great journey has a wrong turn. This one just
                      happens to be yours. Take a breath, check your compass,
                      and choose a new waypoint."
                    </p>
                    <span className="font-meta-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 block">
                      VacationExp Field Almanac • Dispatch 404
                    </span>
                  </div>
                </div>

                {/* Action Cluster / Recovery Paths */}
                <div className="pt-unit-xs flex flex-wrap items-center gap-unit-md w-full sm:w-auto">
                  {/* Primary CTA Button */}
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-unit-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-lg py-3 rounded shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      cottage
                    </span>
                    <span>Back to Home Base</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </Link>

                  {/* Secondary CTA Button */}
                  <Link
                    to="/explore"
                    className="inline-flex items-center justify-center gap-unit-xs bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md px-unit-md py-3 rounded transition-all duration-200"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      map
                    </span>
                    <span>Explore Expeditions</span>
                  </Link>

                </div>
              </div>
            </div>
          </section>

          {/* Suggested Waypoints Ahead (Curated Alternative Paths) */}
          <section className="w-full bg-surface-container-low/80 py-unit-2xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-container-margin-lg">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-unit-lg gap-unit-xs">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      alt_route
                    </span>
                    <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                      Recommended Waypoints
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Or take one of our verified trails instead
                  </h2>
                </div>
                <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                  4 VERIFIED CORRIDORS OPEN
                </span>
              </div>

              {/* 4-Column Minimal Bento Waypoint Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-md">
                {/* Card 1: AI Planner Studio */}
                <Link
                  to="/plan"
                  className="group bg-surface-container-lowest p-unit-md rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-unit-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        smart_toy
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-mono text-[11px] text-secondary uppercase font-semibold">
                        AI Core 4.2
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                        north_east
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] text-primary mb-1">
                      Trip Planner Studio
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Generate custom, mathematically balanced itineraries based
                      on your pace and season.
                    </p>
                  </div>
                  <div className="mt-unit-md pt-unit-xs border-t border-surface-container flex items-center justify-between text-on-surface-variant font-meta-mono text-[11px]">
                    <span>Est. build: 12s</span>
                    <span className="text-primary font-medium group-hover:underline">
                      Launch →
                    </span>
                  </div>
                </Link>

                {/* Card 2: Field Dispatches */}
                <Link
                  to="/community"
                  className="group bg-surface-container-lowest p-unit-md rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-unit-sm group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        auto_stories
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-mono text-[11px] text-on-surface-variant uppercase">
                        1,420+ Field Logs
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all">
                        north_east
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] text-primary mb-1">
                      Field Dispatches
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Raw, unsponsored expedition journals and photographic
                      essays from community walkers.
                    </p>
                  </div>
                  <div className="mt-unit-md pt-unit-xs border-t border-surface-container flex items-center justify-between text-on-surface-variant font-meta-mono text-[11px]">
                    <span>Updated today</span>
                    <span className="text-secondary font-medium group-hover:underline">
                      Read logs →
                    </span>
                  </div>
                </Link>

                {/* Card 3: Curated Mountain Sanctuaries */}
                <Link
                  to="/explore"
                  className="group bg-surface-container-lowest p-unit-md rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 text-primary-container flex items-center justify-center mb-unit-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        landscape
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-mono text-[11px] text-on-surface-variant uppercase">
                        Index: Solitude
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary group-hover:translate-x-1 transition-all">
                        north_east
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] text-primary mb-1">
                      Alpine Sanctuaries
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Hand-verified off-grid mountain cabins, architect-designed
                      stays, and remote tea dens.
                    </p>
                  </div>
                  <div className="mt-unit-md pt-unit-xs border-t border-surface-container flex items-center justify-between text-on-surface-variant font-meta-mono text-[11px]">
                    <span>18 Selected retreats</span>
                    <span className="text-primary font-medium group-hover:underline">
                      View map →
                    </span>
                  </div>
                </Link>

                {/* Card 4: Dispatch Desk / Report Trail Marker */}
                <Link
                  to="/contact"
                  className="group bg-surface-container-lowest p-unit-md rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-tertiary-container/10 text-tertiary flex items-center justify-center mb-unit-sm group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        support_agent
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-meta-mono text-[11px] text-on-surface-variant uppercase">
                        Human Stewards
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-tertiary group-hover:translate-x-1 transition-all">
                        north_east
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-[18px] text-primary mb-1">
                      Dispatch Desk
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Report a missing route link or consult our human field
                      navigators directly.
                    </p>
                  </div>
                  <div className="mt-unit-md pt-unit-xs border-t border-surface-container flex items-center justify-between text-on-surface-variant font-meta-mono text-[11px]">
                    <span>Avg. reply: 18m</span>
                    <span className="text-primary font-medium group-hover:underline">
                      Send note →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Reassurance Footnote & Security Banner */}
          <section className="max-w-7xl mx-auto px-6 lg:px-container-margin-lg py-unit-xl w-full">
            <div className="bg-surface-container-lowest p-unit-md rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-unit-md">
              <div className="flex items-center gap-unit-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    verified_user
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong className="text-on-surface font-semibold">
                    Your Traveler Dossier is safe:
                  </strong>{" "}
                  All planned journeys, saved topographic waypoints, and offline
                  bookmarks remain synced and unharmed in your profile vault.
                </p>
              </div>
              {/* Quick Search Bar for Missing Route */}
              <form
                className="w-full md:w-80 flex items-center bg-surface-container rounded px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/explore");
                }}
              >
                <span className="material-symbols-outlined text-outline text-[18px] mr-2">
                  search
                </span>
                <input
                  className="w-full bg-transparent text-on-surface text-body-sm placeholder:text-outline focus:outline-none"
                  placeholder="Search destinations or guides..."
                  type="text"
                />
                <button
                  className="font-meta-mono text-[10px] text-primary uppercase font-bold tracking-wider hover:text-secondary px-1"
                  type="submit"
                >
                  Find
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

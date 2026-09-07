import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          

          {/* 2. HERO SECTION */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl md:py-unit-3xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-unit-xl lg:gap-unit-2xl items-center">
              {/* Narrative Left Column */}
              <div className="lg:col-span-6 flex flex-col space-y-unit-md">
                <div className="inline-flex items-center gap-unit-xs self-start bg-surface-container px-unit-sm py-unit-2xs rounded-full">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    explore
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                    The VacationExp Philosophy
                  </span>
                </div>
                <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight leading-tight">
                  Travel planning should feel like the{" "}
                  <span className="italic font-headline-md text-secondary">
                    beginning
                  </span>{" "}
                  of the adventure.
                </h1>
                <p className="font-body-lead text-body-lead text-on-surface-variant max-w-xl leading-relaxed">
                  VacationExp brings AI-driven route precision and living field
                  dispatches together in one quiet, unified ledger. No
                  speculative hallucination without trail proof; no chaotic
                  forum drift without audited route math.
                </p>
                {/* CTAs & Micro Proof */}
                <div className="pt-unit-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-md">
                  <button
                    onClick={() => navigate("/plan")}
                    className="inline-flex items-center justify-center bg-secondary text-on-secondary px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-md"
                  >
                    <span>Plan Your Journey (AI Core)</span>
                    <span className="material-symbols-outlined text-[18px] ml-2">
                      north_east
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/community")}
                    className="inline-flex items-center justify-center bg-surface-container-high text-primary px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md hover:bg-surface-dim transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] mr-2">
                      menu_book
                    </span>
                    <span>Explore Field Stories</span>
                  </button>
                </div>
                {/* Telemetry Stats Row */}
                <div className="pt-unit-lg grid grid-cols-3 gap-unit-sm border-none bg-surface-container-low p-unit-md rounded-xl">
                  <div>
                    <div className="font-meta-mono text-meta-mono text-outline uppercase">
                      Audited Field Legs
                    </div>
                    <div className="font-headline-sm text-headline-sm text-primary font-semibold">
                      1,840+
                    </div>
                  </div>
                  <div>
                    <div className="font-meta-mono text-meta-mono text-outline uppercase">
                      AI Accuracy Factor
                    </div>
                    <div className="font-headline-sm text-headline-sm text-primary font-semibold">
                      99.4%
                    </div>
                  </div>
                  <div>
                    <div className="font-meta-mono text-meta-mono text-outline uppercase">
                      Zero Ads
                    </div>
                    <div className="font-headline-sm text-headline-sm text-secondary font-semibold">
                      100%
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Visual Right Column */}
              <div className="lg:col-span-6 relative">
                <div className="relative bg-surface-container rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-primary-container">
                     {/* Image placeholder */}
                     <span className="material-symbols-outlined text-on-primary-container text-[80px] opacity-20">
                       landscape
                     </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    {/* In-frame Field Tags */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-meta-mono text-meta-mono text-primary font-medium">
                        FIELD PROOF // HIMACHAL
                      </span>
                    </div>
                    {/* In-frame Editorial Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                      <p className="font-caption-editorial text-caption-editorial italic text-surface-container-lowest">
                        “Alpine scree ridge above Solang, Himachal — Audited
                        Field Dispatch #084. True elevation 3,180m.”
                      </p>
                      <div className="mt-1 flex items-center justify-between text-on-primary-container font-meta-mono text-[11px]">
                        <span>LOGGED BY: ARJUN SETHI</span>
                        <span>OCTOBER 2024</span>
                      </div>
                    </div>
                  </div>
                  {/* Secondary Inset Floating Note */}
                  <div className="p-unit-md bg-surface-container-low flex items-start gap-unit-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      verified
                    </span>
                    <div>
                      <h4 className="font-label-md text-label-md text-primary">
                        Unvarnished Ground Truth
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. THE PROBLEM: "Planning a trip shouldn't mean opening twenty tabs" */}
          <section className="w-full bg-surface-container-low py-unit-3xl">
            <div className="max-w-7xl mx-auto px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
              {/* Section Header */}
              <div className="max-w-3xl space-y-unit-xs mb-unit-2xl">
                <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                  Cartographic Dilemma
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                  Planning a trip shouldn’t mean wrestling twenty chaotic
                  browser tabs.
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  Modern travelers drown in synthetic listicles, sponsored
                  algorithmic clickbait, outdated travel forums, and volatile
                  Excel sheets just to decode five fundamental ground questions:
                </p>
              </div>

              {/* The 5 Core Questions Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md mb-unit-2xl">
                <div className="md:col-span-4 bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm space-y-unit-xs">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    QUERY 01
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    “Where should I actually go?”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Beyond the oversaturated tourist hubs. Places that match
                    your exact emotional cadence, silence index, and seasonal
                    weather window.
                  </p>
                </div>
                <div className="md:col-span-4 bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm space-y-unit-xs">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    QUERY 02
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    “What will it genuinely cost?”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Real rupee-for-rupee breakdowns. Not vague dollar signs, but
                    taxi union tariffs, homestay deposits, firewood surcharges,
                    and trail permits.
                  </p>
                </div>
                <div className="md:col-span-4 bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm space-y-unit-xs">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    QUERY 03
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    “Where do locals really eat?”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    The ₹120 wood-hearth siddu huts in Goshal, the unlisted
                    dhaba tucked behind the cedar grove, the tea stall that
                    opens at 5:00 AM.
                  </p>
                </div>
                <div className="md:col-span-6 bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm space-y-unit-xs">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    QUERY 04
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    “Is the high pass actually clear?”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Static blog posts from three years ago won’t tell you if
                    Shinku La has black ice this week. You need dispatches from
                    boots on the ground right now.
                  </p>
                </div>
                <div className="md:col-span-6 bg-surface-container-lowest p-unit-lg rounded-xl shadow-sm space-y-unit-xs">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    QUERY 05
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    “How do I pace each day without exhaustion?”
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Realistic drive times over winding Himalayan passes,
                    acclimatization rest buffers, and daylight calculations that
                    corporate travel engines ignore.
                  </p>
                </div>
              </div>

              {/* Asymmetrical Comparison: 20 Tabs vs The Unified Dossier */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-lg items-center">
                {/* 20-Tab Chaos State */}
                <div className="lg:col-span-5 bg-surface-container-highest/60 p-unit-lg rounded-xl space-y-unit-sm">
                  <div className="flex items-center justify-between pb-unit-xs">
                    <span className="font-label-caps text-label-caps text-error uppercase tracking-wider">
                      The Fragmented Past
                    </span>
                    <span className="material-symbols-outlined text-error">
                      tab_close
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    The 20-Tab Chaos
                  </p>
                  <ul className="space-y-unit-2xs font-body-sm text-body-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[18px]">
                        close
                      </span>
                      4 conflicting Google Maps drive time estimates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[18px]">
                        close
                      </span>
                      SEO sponsored blogs masquerading as authentic reviews
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[18px]">
                        close
                      </span>
                      Disjointed WhatsApp forwarded hotel phone numbers
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[18px]">
                        close
                      </span>
                      Manual spreadsheet currency calculations
                    </li>
                  </ul>
                </div>
                {/* Arrow Transmutation Indicator */}
                <div className="lg:col-span-2 flex justify-center py-unit-xs">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {/* The Unified Ledger */}
                <div className="lg:col-span-5 bg-primary text-on-primary p-unit-lg rounded-xl shadow-lg space-y-unit-sm">
                  <div className="flex items-center justify-between pb-unit-xs">
                    <span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
                      The VacationExp Solution
                    </span>
                    <span className="material-symbols-outlined text-primary-fixed">
                      folder_special
                    </span>
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-primary">
                    The Unified Cartographic Dossier
                  </p>
                  <ul className="space-y-unit-2xs font-body-sm text-body-sm text-surface-container-high">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        check
                      </span>
                      Instant algorithmic route synthesis &amp; elevation curves
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        check
                      </span>
                      Verified receipts, local taxi tariffs &amp; real food cost
                      logs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        check
                      </span>
                      Real-time community dispatches from hikers on the ground
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                        check
                      </span>
                      Offline printable field guide with GPS coordinates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. OUR IDEA ("So we built VacationExp") */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-unit-3xl space-y-unit-xs">
                <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                  Our Founding Architecture
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                  So we built VacationExp.
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  A harmonious union of algorithmic computational power and
                  sovereign human discovery.
                </p>
              </div>

              {/* Duality Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-stretch">
                {/* Left Column: The AI Cartographic Engine */}
                <div className="bg-surface-container-low p-unit-xl rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined">
                          psychology
                        </span>
                      </div>
                      <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                        LAYER 01 // COMPUTATIONAL
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        The AI Cartographic Engine
                      </h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                        You provide your intent: your travel window, party
                        composition, rupee budget cap, walking speed, and
                        preference for quiet villages over commercial centers.
                        Our engine immediately synthesizes:
                      </p>
                    </div>
                    {/* Feature Checklist */}
                    <div className="space-y-unit-xs pt-unit-xs font-body-sm text-body-sm text-on-surface">
                      <div className="p-unit-sm bg-surface-container rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          alt_route
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            Topographical Transit Vectors
                          </strong>
                          Calculates true driving times over winding mountain
                          passes with realistic rest stops.
                        </div>
                      </div>
                      <div className="p-unit-sm bg-surface-container rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          equalizer
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            Acclimatization Gradients
                          </strong>
                          Automatically factors elevation staging to ensure safe
                          altitude progression in Ladakh and Spiti.
                        </div>
                      </div>
                      <div className="p-unit-sm bg-surface-container rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          currency_rupee
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            Rigorous Budget Architecture
                          </strong>
                          Maps fuel, union cab tariffs, permits, and food into
                          precise daily expense allocations.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-unit-lg pt-unit-md flex flex-wrap items-center justify-between gap-2 text-outline font-meta-mono text-meta-mono">
                    <span>INPUT: CUSTOM SPECIFICATIONS</span>
                    <span>OUTPUT: MATHEMATICAL ROADMAP</span>
                  </div>
                </div>

                {/* Right Column: The Living Human Atlas */}
                <div className="bg-surface-container-high p-unit-xl rounded-2xl flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="space-y-unit-md">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined">
                          hiking
                        </span>
                      </div>
                      <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                        LAYER 02 // EMPIRICAL
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        The Living Human Atlas
                      </h3>
                      <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                        Algorithms cannot taste the smoky wood smoke of a
                        traditional siddu oven, nor can they feel the
                        hospitality of a deodar homestay. That is where our
                        fellowship of real travelers steps in:
                      </p>
                    </div>
                    {/* Feature Checklist */}
                    <div className="space-y-unit-xs pt-unit-xs font-body-sm text-body-sm text-on-surface">
                      <div className="p-unit-sm bg-surface-container-lowest rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          verified_user
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            100% Unsponsored Truth
                          </strong>
                          Every single review is backed by timestamped receipts
                          or verified GPS waypoints. Zero brand kickbacks.
                        </div>
                      </div>
                      <div className="p-unit-sm bg-surface-container-lowest rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          cottage
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            Hearthside Discoveries
                          </strong>
                          Locals and slow travelers log quiet family kitchens,
                          sacred cedar trails, and unlisted guesthouses.
                        </div>
                      </div>
                      <div className="p-unit-sm bg-surface-container-lowest rounded-lg flex items-start gap-unit-xs">
                        <span className="material-symbols-outlined text-secondary text-[20px]">
                          history_edu
                        </span>
                        <div>
                          <strong className="font-semibold block text-primary">
                            Living Story Dispatches
                          </strong>
                          Narrative journals written with evocative editorial
                          depth, offering cultural context, etiquette, and lore.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-unit-lg pt-unit-md flex flex-wrap items-center justify-between gap-2 text-outline font-meta-mono text-meta-mono">
                    <span>CONTRIBUTIONS: VERIFIED EXPLORERS</span>
                    <span>SPIRIT: UNSUBVENTED CULTURE</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. THE PHILOSOPHY (VISUAL CENTERPIECE) */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-xl">
            <div className="max-w-7xl mx-auto bg-primary text-on-primary rounded-3xl p-unit-xl md:p-unit-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeDasharray="2 2"
                    strokeWidth="0.5"
                  ></circle>
                  <circle cx="50" cy="50" r="30" strokeWidth="0.5"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="15"
                    strokeDasharray="1 1"
                    strokeWidth="0.5"
                  ></circle>
                  <line x1="50" x2="50" y1="0" y2="100" strokeWidth="0.5"></line>
                  <line x1="0" x2="100" y1="50" y2="50" strokeWidth="0.5"></line>
                </svg>
              </div>
              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-unit-lg">
                <div className="inline-flex items-center gap-unit-xs bg-primary-container px-unit-md py-unit-2xs rounded-full">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    all_inclusive
                  </span>
                  <span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-widest">
                    Our Unshakable Axiom
                  </span>
                </div>
                <div className="space-y-unit-xs">
                  <div className="font-display-hero text-headline-lg-mobile md:text-[68px] md:leading-[76px] text-surface-bright tracking-tight">
                    AI helps you{" "}
                    <span className="italic font-headline-lg text-primary-fixed">
                      plan
                    </span>
                    .
                  </div>
                  <div className="flex items-center justify-center gap-unit-md py-unit-2xs">
                    <span className="h-0.5 w-12 bg-secondary"></span>
                    <span className="font-meta-mono text-meta-mono text-primary-fixed uppercase tracking-widest">
                      TRANSCENDING LOGISTICS
                    </span>
                    <span className="h-0.5 w-12 bg-secondary"></span>
                  </div>
                  <div className="font-display-hero text-headline-lg-mobile md:text-[68px] md:leading-[76px] text-secondary tracking-tight">
                    Travelers help you{" "}
                    <span className="italic font-headline-lg text-surface-bright">
                      experience
                    </span>
                    .
                  </div>
                </div>
                <p className="font-body-lead text-body-lead text-on-primary-container max-w-2xl mx-auto leading-relaxed">
                  Because the best travel advice doesn’t originate from a generic
                  search query. Sometimes it comes from an elder boiling
                  salt-butter tea on a deodar timber porch, or a solo wanderer
                  who traversed the high scree pass three days before you.
                </p>
                <div className="pt-unit-md flex items-center justify-center gap-unit-md">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary-fixed font-headline-sm">
                    VE
                  </div>
                  <div className="text-left font-meta-mono text-meta-mono text-on-primary-container">
                    <span className="block text-surface-bright font-semibold">
                      VacationExp Cartographic Council
                    </span>
                    <span className="text-[11px]">
                      Shimla • New Delhi • Zurich
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. HOW VACATIONEXP WORKS (THREE-STEP EXPEDITION CADENCE) */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="max-w-7xl mx-auto space-y-unit-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md">
                <div>
                  <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                    Operational Cadence
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                    How VacationExp Works
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  A seamless flow designed to eliminate anxiety and deliver
                  field-ready confidence before you pack your bag.
                </p>
              </div>

              {/* 3-Step Sequence Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg relative">
                <div className="bg-surface-container-low p-unit-xl rounded-2xl space-y-unit-md relative">
                  <div className="flex items-center justify-between">
                    <span className="font-meta-mono text-meta-mono text-secondary font-bold text-lg">
                      01
                    </span>
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      tune
                    </span>
                  </div>
                  <div className="space-y-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Tell Us Your Vision
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Set destinations, travel calendar, strictly audited budget
                      limits, and travel cadence: whether that’s high-alpine
                      solitude, regional food terroir, or vernacular
                      architectural discovery.
                    </p>
                  </div>
                  <div className="pt-unit-xs">
                    <span className="inline-block font-label-caps text-label-caps text-outline uppercase bg-surface-container px-2 py-1 rounded">
                      Intent Formulation
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-unit-xl rounded-2xl space-y-unit-md relative">
                  <div className="flex items-center justify-between">
                    <span className="font-meta-mono text-meta-mono text-secondary font-bold text-lg">
                      02
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[28px]">
                      hub
                    </span>
                  </div>
                  <div className="space-y-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Let AI Synthesize
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Our core engine compiles multi-day transit safety margins,
                      elevation staging curves, realistic taxi fare baselines,
                      and daylight-adjusted activity blocks in seconds.
                    </p>
                  </div>
                  <div className="pt-unit-xs">
                    <span className="inline-block font-label-caps text-label-caps text-secondary uppercase bg-secondary-fixed/50 px-2 py-1 rounded">
                      Machine Optimization
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container p-unit-xl rounded-2xl space-y-unit-md relative">
                  <div className="flex items-center justify-between">
                    <span className="font-meta-mono text-meta-mono text-secondary font-bold text-lg">
                      03
                    </span>
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      volunteer_activism
                    </span>
                  </div>
                  <div className="space-y-unit-xs">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Layer Ground Truth
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Cross-reference the route with genuine community
                      waypoints: audited meal receipts, quiet sacred spots,
                      direct homestay contacts, and logs from travelers who
                      stood there last week.
                    </p>
                  </div>
                  <div className="pt-unit-xs">
                    <span className="inline-block font-label-caps text-label-caps text-primary uppercase bg-primary-fixed/40 px-2 py-1 rounded">
                      Empirical Validation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. WHAT WE BELIEVE (CORE EXPEDITION PRINCIPLES) */}
          <section className="w-full bg-surface-container-low py-unit-3xl">
            <div className="max-w-7xl mx-auto px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
              <div className="max-w-3xl mb-unit-2xl space-y-unit-xs">
                <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                  Our Guiding Tenets
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                  What We Believe
                </h2>
                <p className="font-body-lead text-body-lead text-on-surface-variant">
                  Four non-negotiable principles that guide every feature we
                  ship and every route our intelligence compiles.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-md">
                <div className="bg-surface-container-lowest p-unit-lg rounded-xl flex flex-col justify-between space-y-unit-md shadow-sm">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-meta-mono text-meta-mono text-secondary font-semibold">
                        PRINCIPLE // 01
                      </span>
                      <span className="material-symbols-outlined text-outline">
                        fingerprint
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Deeply Personal
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      No two humans travel alike. We refuse to deliver
                      cookie-cutter agency itineraries designed for commercial
                      tour buses. Every itinerary is built from zero around your
                      cadence.
                    </p>
                  </div>
                  <div className="font-meta-mono text-meta-mono text-outline">
                    ZERO CANNED TOURS
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-unit-lg rounded-xl flex flex-col justify-between space-y-unit-md shadow-sm">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-meta-mono text-meta-mono text-secondary font-semibold">
                        PRINCIPLE // 02
                      </span>
                      <span className="material-symbols-outlined text-outline">
                        verified
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Authentic &amp; Audited
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      100% unsponsored truth. No hotel affiliate kickbacks, no
                      staged photoshoots, and zero algorithmic influencer
                      compensation. Only real receipts and GPS pins.
                    </p>
                  </div>
                  <div className="font-meta-mono text-meta-mono text-secondary">
                    UNSPONSORED LEDGERS
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-unit-lg rounded-xl flex flex-col justify-between space-y-unit-md shadow-sm">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-meta-mono text-meta-mono text-secondary font-semibold">
                        PRINCIPLE // 03
                      </span>
                      <span className="material-symbols-outlined text-outline">
                        calculate
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Accessible Math
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Slow travel and mountain journeys shouldn’t demand 40
                      hours of spreadsheet formatting. We transform complex
                      regional logistics into intuitive clarity.
                    </p>
                  </div>
                  <div className="font-meta-mono text-meta-mono text-outline">
                    DEMOCRATIZED PRECISION
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-unit-lg rounded-xl flex flex-col justify-between space-y-unit-md shadow-sm">
                  <div className="space-y-unit-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-meta-mono text-meta-mono text-secondary font-semibold">
                        PRINCIPLE // 04
                      </span>
                      <span className="material-symbols-outlined text-outline">
                        nature_people
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Quiet Curiosity
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      The deepest memories occur when travelers step away from
                      noisy selfie viewpoints, slow their pace, respect local
                      culture, and listen to the village elders.
                    </p>
                  </div>
                  <div className="font-meta-mono text-meta-mono text-outline">
                    CULTURAL REVERENCE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. THE COMMUNITY & FELLOWSHIP (HUMAN PROOF) */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-center">
                <div className="lg:col-span-5 relative">
                  <div className="aspect-square w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container relative flex items-center justify-center">
                     <span className="material-symbols-outlined text-[80px] text-outline-variant opacity-20">
                       person_pin
                     </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                      <div className="font-caption-editorial text-caption-editorial italic text-surface-container-lowest">
                        “Tea at 2,400m in Naggar. Finding this quiet stone
                        courtyard saved our entire Himachal week.”
                      </div>
                      <div className="mt-1 font-meta-mono text-meta-mono text-on-primary-container">
                        PRIYA NAIR — FELLOW #VX-219
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex absolute -top-4 -right-4 bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-lg items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      recommend
                    </span>
                    <span className="font-label-caps text-label-caps text-primary uppercase">
                      VERIFIED FELLOW CONTRIBUTOR
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-unit-lg">
                  <div className="space-y-unit-xs">
                    <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                      The Fellowship
                    </span>
                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                      Every traveler has something indispensable to share.
                    </h2>
                    <p className="font-body-lead text-body-lead text-on-surface-variant">
                      VacationExp thrives because our community logs the
                      intimate details that algorithms alone cannot divine.
                    </p>
                  </div>
                  <div className="space-y-unit-sm">
                    <div className="p-unit-md bg-surface-container-low rounded-xl space-y-unit-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary">
                          The ₹120 Siddu Hearth in Goshal
                        </span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          KABIR N. // MANALI NODE
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        “Skip the Mall Road cafes. Walk 20 minutes past Old
                        Manali bridge to the stone hut with blue shutters. Aunty
                        Sunita steams walnut-stuffing siddu fresh over applewood
                        embers.”
                      </p>
                    </div>
                    <div className="p-unit-md bg-surface-container-low rounded-xl space-y-unit-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary">
                          The Shinku La Scree Pass Status
                        </span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          ROHIT KUMHAR // ZANSKAR DISPATCH
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        “Crossed yesterday at 16,600ft. North face has soft snow
                        drift between 2PM and 5PM; start by 6:00 AM sharp from
                        Darcha to avoid slush jams.”
                      </p>
                    </div>
                    <div className="p-unit-md bg-surface-container-low rounded-xl space-y-unit-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md text-primary">
                          Decoding Goa’s Inland Backwater Ferries
                        </span>
                        <span className="font-meta-mono text-meta-mono text-outline">
                          ANANYA D. // GOA COASTAL
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        “Entire 5-day circuit completed for ₹14,800. The public
                        river ferries cost ₹10 and carry you directly to
                        forgotten Portuguese heritage bakeries.”
                      </p>
                    </div>
                  </div>
                  <div className="pt-unit-xs">
                    <button
                      onClick={() => navigate("/community")}
                      className="inline-flex items-center text-primary font-label-md text-label-md hover:text-secondary transition-colors group"
                    >
                      <span>Explore all Community Dispatches</span>
                      <span className="material-symbols-outlined text-[18px] ml-1 group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. VISION */}
          <section className="w-full bg-surface-container-low py-unit-3xl">
            <div className="max-w-4xl mx-auto px-container-margin-sm md:px-container-margin-md text-center space-y-unit-md">
              <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest">
                Our North Star
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                Building a more deliberate way to discover our world.
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant leading-relaxed">
                We believe technology should serve human wonder, not substitute
                for it. Algorithms are extraordinary at processing bus
                timetables, high-altitude gradients, and foreign exchange rates.
                But only humans can impart the memory of standing alone on a
                foggy ridgeline at sunrise.
              </p>
              <div className="pt-unit-sm flex flex-wrap items-center justify-center gap-unit-md font-meta-mono text-meta-mono text-outline">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    eco
                  </span>
                  Leave No Trace Philosophy
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    handshake
                  </span>
                  Direct-to-Homestay Economics
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    lock_open
                  </span>
                  Open Travel Intelligence
                </span>
              </div>
            </div>
          </section>

          {/* 10. FINAL INSPIRATIONAL CTA BANNER */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl md:py-unit-3xl">
            <div className="max-w-7xl mx-auto bg-surface-container rounded-3xl p-unit-xl md:p-unit-3xl relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-r from-primary to-secondary"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-unit-xl">
                <div className="space-y-unit-xs max-w-2xl text-center md:text-left">
                  <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-wider">
                    Your Route Awaits
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                    Your next story starts somewhere.
                  </h2>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    Let VacationExp handle the math so you can lose yourself in
                    the mountain air. Plan your customized itinerary in under
                    two minutes.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch gap-unit-sm w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => navigate("/plan")}
                    className="inline-flex items-center justify-center bg-primary text-on-primary px-unit-xl py-unit-sm rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md"
                  >
                    <span>Plan Your Trip Now</span>
                    <span className="material-symbols-outlined text-[18px] ml-2">
                      arrow_forward
                    </span>
                  </button>
                  <button
                    onClick={() => navigate("/community")}
                    className="inline-flex items-center justify-center bg-surface-container-lowest text-primary px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md hover:bg-surface-dim transition-colors"
                  >
                    <span>Read Stories</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

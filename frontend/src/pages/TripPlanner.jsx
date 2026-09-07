import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function TripPlanner() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form State
  const [destination, setDestination] = useState("Manali");
  const [coords, setCoords] = useState("32.2396° N, 77.1887° E");
  const [altitude, setAltitude] = useState("2,050m ASL");
  const [region, setRegion] = useState("Western Himalayas");
  const [searchQuery, setSearchQuery] = useState("Manali, Western Himalayas");

  // Date State (Mocked calendar visually, but storing real state)
  const today = new Date();
  const fiveDaysLater = new Date(today);
  fiveDaysLater.setDate(today.getDate() + 5);
  const formatDate = (d) => d.toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(formatDate(today));
  const [endDate, setEndDate] = useState(formatDate(fiveDaysLater));

  // Budget State
  const [budgetTier, setBudgetTier] = useState("Comfort");

  // Dynamic Budget Calculation
  const tripDays = Math.max(
    1,
    Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24),
    ),
  );
  const dailyRates = { Explorer: 1800, Comfort: 5000, Premium: 8500 };
  const computedBudget = tripDays * dailyRates[budgetTier];
  const budgetAmount = `₹${computedBudget.toLocaleString("en-IN")}`;
  // Preferences State
  const [preferences, setPreferences] = useState([
    "Adventure",
    "Food",
    "Nature",
  ]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate]);

  const selectDestination = (name, c, alt, reg) => {
    setDestination(name);
    setCoords(c);
    setAltitude(alt);
    setRegion(reg);
    setSearchQuery(`${name}, ${reg}`);
  };

  const selectBudget = (tier) => {
    setBudgetTier(tier);
  };

  const toggleInterest = (interest) => {
    if (preferences.includes(interest)) {
      setPreferences(preferences.filter((p) => p !== interest));
    } else {
      setPreferences([...preferences, interest]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/trips/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            destination,
            startDate,
            endDate,
            budget: budgetTier,
            preferences: preferences,
          }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("currentGeneratedTrip", JSON.stringify(data));
        // Fake a cool loading sequence before redirecting
        setTimeout(() => {
          setLoading(false);
          navigate("/itinerary/new");
        }, 3000);
      } else {
        setError(data.message || "Failed to generate trip");
        setLoading(false);
      }
    } catch (err) {
      setError("Network error or AI timeout. Please try again.");
      setLoading(false);
    }
  };

  const renderStepPill = (num, shortName) => {
    const isActive = currentStep === num;
    return (
      <button
        onClick={() => setCurrentStep(num)}
        className={`step-pill px-unit-sm py-1 rounded-full font-meta-mono text-meta-mono transition-all ${
          isActive
            ? "bg-primary text-on-primary"
            : "text-on-surface-variant hover:text-on-surface"
        }`}
      >
        {`0${num} ${shortName}`}
      </button>
    );
  };

  const breadcrumbs = [
    "Destination Selection",
    "Dates & Daylight Range",
    "Budget & Pace Persona",
    "Travel Style & Inclinations",
    "Expedition Synthesis",
  ];

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen pt-20 overflow-x-hidden">
      <Navbar />

      {/* Interactive Step Planning Architecture */}
      <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-lg">
        {/* Top Editorial Header & Step Progress Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md pb-unit-md">
          <div>
            <div className="flex items-center gap-unit-xs mb-unit-2xs">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary font-semibold">
                Autonomous Expedition Composer
              </span>
            </div>
            <div className="flex items-baseline gap-unit-sm">
              <span className="font-headline-sm text-headline-sm text-primary">
                0{currentStep} / 04
              </span>
              <span className="text-outline-variant font-meta-mono text-meta-mono">
                —
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                {breadcrumbs[currentStep - 1]}
              </span>
            </div>
          </div>

          {/* Segmented Step Indicator Pill */}
          <div className="flex items-center bg-surface-container rounded-full p-1 gap-1 flex-wrap">
            {renderStepPill(1, "Dest")}
            {renderStepPill(2, "Dates")}
            {renderStepPill(3, "Budget")}
            {renderStepPill(4, "Style")}
            {renderStepPill(5, "Blueprint")}
          </div>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start">
          {/* LEFT COLUMN: Dynamic Journey Steps Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-unit-lg">
            {/* STEP 1: DESTINATION */}
            {currentStep === 1 && (
              <section className="step-panel flex flex-col gap-unit-md animate-fade-in-up">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    Where will your next story begin?
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-unit-2xs">
                    Tell us where you want to go. We'll help you discover how to
                    experience it.
                  </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="relative bg-surface-container-low rounded-xl p-unit-xs flex items-center gap-unit-sm shadow-sm">
                  <span className="material-symbols-outlined text-outline-variant pl-unit-xs">
                    search
                  </span>
                  <input
                    className="w-full bg-transparent font-body-md text-body-md text-on-surface focus:outline-none placeholder:text-outline"
                    placeholder="Search valley, mountain pass, coastal town..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setDestination(e.target.value);
                      setRegion("Custom Destination");
                      setAltitude("Varies");
                    }}
                  />
                </div>

                {/* Destination Suggestion Cards */}
                <div className="flex flex-col gap-unit-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Curated Destinations
                    </span>
                    <span className="font-meta-mono text-meta-mono text-secondary">
                      Seasonal High Window
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-sm">
                    {/* Card 1: Manali */}
                    <div
                      onClick={() =>
                        selectDestination(
                          "Manali",
                          "32.2396° N, 77.1887° E",
                          "2,050m ASL",
                          "Western Himalayas",
                        )
                      }
                      className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden group ${destination === "Manali" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                    >
                      {destination === "Manali" && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                      )}
                      <div className="flex justify-between items-start mb-unit-xs">
                        <div>
                          <span
                            className={`font-meta-mono text-meta-mono font-semibold ${destination === "Manali" ? "text-secondary" : "text-on-surface-variant"}`}
                          >
                            HP • NORTH IND
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                            Manali
                          </h3>
                        </div>
                        {destination === "Manali" && (
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-2 py-0.5 rounded">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">
                        Old cedar pine woods, snow-capped Rohtang horizons, and
                        Kath-kuni stone architecture.
                      </p>
                      <div className="flex items-center justify-between font-meta-mono text-meta-mono text-outline pt-unit-xs bg-surface-container-low px-unit-xs py-1 rounded">
                        <span>ALT: 2,050M</span>
                        <span>JUN DRY TREK</span>
                      </div>
                    </div>

                    {/* Card 2: Ladakh */}
                    <div
                      onClick={() =>
                        selectDestination(
                          "Ladakh",
                          "34.1526° N, 77.5771° E",
                          "3,500m ASL",
                          "Trans-Himalayan Plateau",
                        )
                      }
                      className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden group ${destination === "Ladakh" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                    >
                      {destination === "Ladakh" && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                      )}
                      <div className="flex justify-between items-start mb-unit-xs">
                        <div>
                          <span
                            className={`font-meta-mono text-meta-mono font-semibold ${destination === "Ladakh" ? "text-secondary" : "text-on-surface-variant"}`}
                          >
                            UT • NORTH IND
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                            Ladakh
                          </h3>
                        </div>
                        {destination === "Ladakh" ? (
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-2 py-0.5 rounded">
                            Selected
                          </span>
                        ) : (
                          <span className="bg-surface-container font-meta-mono text-meta-mono text-on-surface-variant px-2 py-0.5 rounded">
                            High Pass
                          </span>
                        )}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">
                        Cold desert valleys, whitewashed gompas, starry Pangong
                        nights, and barren ridges.
                      </p>
                      <div className="flex items-center justify-between font-meta-mono text-meta-mono text-outline pt-unit-xs bg-surface-container-low px-unit-xs py-1 rounded">
                        <span>ALT: 3,500M</span>
                        <span>SEASONAL OPENS</span>
                      </div>
                    </div>

                    {/* Card 3: Goa Coastal */}
                    <div
                      onClick={() =>
                        selectDestination(
                          "Goa Back-Coves",
                          "15.2993° N, 74.1240° E",
                          "14m ASL",
                          "Konkan Coast",
                        )
                      }
                      className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden group ${destination === "Goa Back-Coves" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                    >
                      {destination === "Goa Back-Coves" && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                      )}
                      <div className="flex justify-between items-start mb-unit-xs">
                        <div>
                          <span
                            className={`font-meta-mono text-meta-mono font-semibold ${destination === "Goa Back-Coves" ? "text-secondary" : "text-on-surface-variant"}`}
                          >
                            GA • WEST IND
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                            Goa Coves
                          </h3>
                        </div>
                        {destination === "Goa Back-Coves" ? (
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-2 py-0.5 rounded">
                            Selected
                          </span>
                        ) : (
                          <span className="bg-surface-container font-meta-mono text-meta-mono text-on-surface-variant px-2 py-0.5 rounded">
                            Monsoon Mist
                          </span>
                        )}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">
                        Portuguese heritage quarters, secluded southern
                        estuaries, and spice plantation banquets.
                      </p>
                      <div className="flex items-center justify-between font-meta-mono text-meta-mono text-outline pt-unit-xs bg-surface-container-low px-unit-xs py-1 rounded">
                        <span>ALT: 14M</span>
                        <span>CULINARY TRAIL</span>
                      </div>
                    </div>

                    {/* Card 4: Jaipur */}
                    <div
                      onClick={() =>
                        selectDestination(
                          "Jaipur",
                          "26.9124° N, 75.7873° E",
                          "431m ASL",
                          "Aravalli Range",
                        )
                      }
                      className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden group ${destination === "Jaipur" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                    >
                      {destination === "Jaipur" && (
                        <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                      )}
                      <div className="flex justify-between items-start mb-unit-xs">
                        <div>
                          <span
                            className={`font-meta-mono text-meta-mono font-semibold ${destination === "Jaipur" ? "text-secondary" : "text-on-surface-variant"}`}
                          >
                            RJ • WEST IND
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                            Jaipur
                          </h3>
                        </div>
                        {destination === "Jaipur" ? (
                          <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-2 py-0.5 rounded">
                            Selected
                          </span>
                        ) : (
                          <span className="bg-surface-container font-meta-mono text-meta-mono text-on-surface-variant px-2 py-0.5 rounded">
                            Palace & Craft
                          </span>
                        )}
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-sm">
                        Terracotta ramparts, block-printing ateliers, and
                        courtyard astronomy towers.
                      </p>
                      <div className="flex items-center justify-between font-meta-mono text-meta-mono text-outline pt-unit-xs bg-surface-container-low px-unit-xs py-1 rounded">
                        <span>ALT: 431M</span>
                        <span>ARCHITECTURAL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="flex items-center justify-between pt-unit-sm">
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                    Selected:{" "}
                    <strong className="text-primary font-semibold">
                      {destination}
                    </strong>
                  </span>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow transition-all flex items-center gap-unit-xs"
                    onClick={() => setCurrentStep(2)}
                  >
                    <span>Continue to Dates</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 2: TRAVEL DATES */}
            {currentStep === 2 && (
              <section className="step-panel flex flex-col gap-unit-md animate-fade-in-up">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    When does the journey begin?
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-unit-2xs">
                    Choose your travel dates so we can build your itinerary
                    around seasonal daylight and micro-climates.
                  </p>
                </div>

                {/* Real HTML Inputs combined with aesthetic badges */}
                <div className="flex flex-col gap-unit-md">
                  <div className="flex flex-wrap items-center gap-unit-sm bg-surface-container-low p-unit-sm rounded-xl">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-base">
                        calendar_month
                      </span>
                      <span className="font-meta-mono text-meta-mono font-semibold text-primary">
                        SELECT RANGE
                      </span>
                    </div>
                    <span className="text-outline-variant font-meta-mono text-meta-mono">
                      •
                    </span>
                    <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                      Optimal Alpine Window (19°C Peak / 9°C Dawn)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-md bg-surface-container-lowest p-unit-lg rounded-xl shadow-md">
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase mb-2">
                        Arrival Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-surface-container-low border-none rounded-lg px-unit-md py-unit-sm text-primary font-body-md focus:ring-2 focus:ring-secondary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase mb-2">
                        Departure Date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full bg-surface-container-low border-none rounded-lg px-unit-md py-unit-sm text-primary font-body-md focus:ring-2 focus:ring-secondary outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-unit-sm">
                  <button
                    className="text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1"
                    onClick={() => setCurrentStep(1)}
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                    <span>Back</span>
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow transition-all flex items-center gap-unit-xs"
                    onClick={() => setCurrentStep(3)}
                  >
                    <span>Continue to Budget</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 3: BUDGET PERSONALITY */}
            {currentStep === 3 && (
              <section className="step-panel flex flex-col gap-unit-md animate-fade-in-up">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    What does your journey feel like?
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-unit-2xs">
                    Choose a travel pace and comfort baseline. We will optimize
                    accommodations and logistical hops.
                  </p>
                </div>

                {/* 3 Personality Cards */}
                <div className="flex flex-col gap-unit-sm">
                  {/* Tier 1: Explorer */}
                  <div
                    onClick={() => selectBudget("Explorer")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all flex items-start gap-unit-md relative overflow-hidden ${budgetTier === "Explorer" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                  >
                    {budgetTier === "Explorer" && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${budgetTier === "Explorer" ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container text-primary"}`}
                    >
                      <span className="material-symbols-outlined">hiking</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-headline-sm text-headline-sm text-primary">
                          Explorer
                        </span>
                        <span
                          className={`font-meta-mono text-meta-mono font-semibold ${budgetTier === "Explorer" ? "text-secondary" : "text-on-surface"}`}
                        >
                          ₹1,500 – ₹2,500 / day
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Authentic heritage homestays, public mountain buses,
                        quiet dhaba food trails, and shared mountain jeeps.
                      </p>
                    </div>
                  </div>

                  {/* Tier 2: Comfort */}
                  <div
                    onClick={() => selectBudget("Comfort")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all flex items-start gap-unit-md relative overflow-hidden ${budgetTier === "Comfort" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                  >
                    {budgetTier === "Comfort" && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${budgetTier === "Comfort" ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container text-primary"}`}
                    >
                      <span className="material-symbols-outlined">hotel</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-unit-xs">
                          <span className="font-headline-sm text-headline-sm text-primary">
                            Comfort
                          </span>
                          {budgetTier === "Comfort" && (
                            <span className="bg-secondary text-on-secondary font-label-caps text-label-caps px-2 py-0.5 rounded">
                              Curator's Choice
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-meta-mono text-meta-mono font-semibold ${budgetTier === "Comfort" ? "text-secondary" : "text-on-surface"}`}
                        >
                          ₹3,000 – ₹5,000 / day
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Boutique stone cedar chalets, private point-to-point
                        transfer legs, specialty wood-fired alpine cafes, and
                        private guide morning passes.
                      </p>
                    </div>
                  </div>

                  {/* Tier 3: Premium */}
                  <div
                    onClick={() => selectBudget("Premium")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all flex items-start gap-unit-md relative overflow-hidden ${budgetTier === "Premium" ? "shadow-md" : "shadow-sm hover:shadow-md"}`}
                  >
                    {budgetTier === "Premium" && (
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${budgetTier === "Premium" ? "bg-secondary-fixed text-on-secondary-fixed" : "bg-surface-container text-primary"}`}
                    >
                      <span className="material-symbols-outlined">diamond</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-headline-sm text-headline-sm text-primary">
                          Estate & Solitude
                        </span>
                        <span
                          className={`font-meta-mono text-meta-mono font-semibold ${budgetTier === "Premium" ? "text-secondary" : "text-on-surface"}`}
                        >
                          ₹6,000+ / day
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Private luxury orchards, dedicated local naturalist
                        cartographer, bespoke high-ridge stargazing camp with
                        campfire dining.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Total Envelope Specification */}
                <div className="bg-surface-container-low p-unit-md rounded-xl flex items-center justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      Estimated Total Trip Allocation ({tripDays} Days)
                    </span>
                    <div className="font-headline-sm text-headline-sm text-primary font-semibold mt-0.5">
                      {budgetAmount} Total Expedition Envelope
                    </div>
                  </div>
                  <div className="text-right font-meta-mono text-meta-mono text-outline">
                    <span>INCL. LODGING + COMMUTE + MEALS</span>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-unit-sm">
                  <button
                    className="text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1"
                    onClick={() => setCurrentStep(2)}
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                    <span>Back</span>
                  </button>
                  <button
                    className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow transition-all flex items-center gap-unit-xs"
                    onClick={() => setCurrentStep(4)}
                  >
                    <span>Continue to Style</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 4: TRAVEL STYLE & INCLINATIONS */}
            {currentStep === 4 && (
              <section className="step-panel flex flex-col gap-unit-md animate-fade-in-up">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    What kind of traveler are you?
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-unit-2xs">
                    Choose what makes an expedition memorable for you. Select
                    all that resonate.
                  </p>
                </div>

                {/* Multi-select Interest Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-sm">
                  {/* Adventure */}
                  <div
                    onClick={() => toggleInterest("Adventure")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Adventure") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Adventure") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        🏔 Adventure
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Adventure") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Adventure")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Trekking ridges, bouldering, glacier stream crossings, and
                      pass scouts.
                    </p>
                  </div>

                  {/* Food */}
                  <div
                    onClick={() => toggleInterest("Food")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Food") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Food") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        🍜 Food & Cult Classics
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Food") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Food")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Dhaba secrets, fresh apple strudels, wood-fired babkas,
                      and stream-caught mountain trout.
                    </p>
                  </div>

                  {/* Nature */}
                  <div
                    onClick={() => toggleInterest("Nature")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Nature") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Nature") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        🌿 Wild Nature
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Nature") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Nature")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Old cedar sanctuaries, cascading tributary waterfalls,
                      silent moss trails.
                    </p>
                  </div>

                  {/* Culture */}
                  <div
                    onClick={() => toggleInterest("Culture")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Culture") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Culture") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        🏛 Heritage & Guilds
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Culture") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Culture")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kath-Kuni cedar wood architecture, handloom shawls, and
                      ancient village councils.
                    </p>
                  </div>

                  {/* Slow Living */}
                  <div
                    onClick={() => toggleInterest("Slow Living")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Slow Living") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Slow Living") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        ☀ Slow Living
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Slow Living") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Slow Living")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Riverside journal reading, hammock cedar naps, and
                      mountain tea house lingering.
                    </p>
                  </div>

                  {/* Stargazing */}
                  <div
                    onClick={() => toggleInterest("Stargazing")}
                    className={`cursor-pointer p-unit-md rounded-xl bg-surface-container-lowest transition-all relative overflow-hidden ${preferences.includes("Stargazing") ? "shadow-md selected" : "shadow-sm hover:shadow-md"}`}
                  >
                    {preferences.includes("Stargazing") && (
                      <div className="indicator-bar absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-sm text-headline-sm text-primary">
                        🌙 Night Skies
                      </span>
                      <span
                        className={`material-symbols-outlined text-base ${preferences.includes("Stargazing") ? "text-secondary" : "text-outline"}`}
                      >
                        {preferences.includes("Stargazing")
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bortle Class 2 celestial views, acoustic jam evenings, and
                      valley moonrises.
                    </p>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-unit-sm">
                  <button
                    className="text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1"
                    onClick={() => setCurrentStep(3)}
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                    <span>Back</span>
                  </button>
                  <button
                    className="bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-md text-label-md px-unit-lg py-unit-sm rounded-lg shadow transition-all flex items-center gap-unit-xs"
                    onClick={() => setCurrentStep(5)}
                  >
                    <span>Review Journey Blueprint</span>
                    <span className="material-symbols-outlined text-sm">
                      receipt_long
                    </span>
                  </button>
                </div>
              </section>
            )}

            {/* STEP 5: FINAL BLUEPRINT & AI ENGINE DISPATCH */}
            {currentStep === 5 && (
              <section className="step-panel flex flex-col gap-unit-md animate-fade-in-up">
                <div>
                  <div className="flex items-center gap-unit-xs mb-1">
                    <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                      Ready for Synthesis
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    Your journey is ready to take shape.
                  </h1>
                  <p className="font-body-lead text-body-lead text-on-surface-variant mt-unit-2xs">
                    Our intelligence model is ready to parse recent field logs,
                    crowd metrics, and off-beat permits to assemble your
                    day-by-day expedition.
                  </p>
                </div>

                {/* Summary Specification Card */}
                <div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-lg flex flex-col gap-unit-md">
                  <div className="flex items-center justify-between pb-unit-sm">
                    <div>
                      <span className="font-meta-mono text-meta-mono text-secondary uppercase">
                        EXPEDITION DOSSIER
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {destination} & Surrounds
                      </h3>
                    </div>
                    <span className="bg-surface-container text-primary font-meta-mono text-meta-mono px-unit-sm py-1 rounded">
                      {tripDays} DAYS • {Math.max(1, tripDays - 1)} NIGHTS
                    </span>
                  </div>

                  {/* Param Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-unit-sm bg-surface-container-low p-unit-md rounded-xl">
                    <div>
                      <span className="font-label-caps text-label-caps text-outline uppercase block">
                        Window
                      </span>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        {startDate} – {endDate}
                      </span>
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps text-outline uppercase block">
                        Budget Tier
                      </span>
                      <span className="font-body-md text-body-md text-primary font-semibold">
                        {budgetTier} ({budgetAmount})
                      </span>
                    </div>
                    <div>
                      <span className="font-label-caps text-label-caps text-outline uppercase block">
                        Vibe Matrix
                      </span>
                      <span className="font-body-md text-body-md text-secondary font-semibold">
                        {preferences.slice(0, 2).join(" • ")}{" "}
                        {preferences.length > 2 && "..."}
                      </span>
                    </div>
                  </div>

                  {/* Route Preview Accordion */}
                  <div className="flex flex-col gap-unit-xs">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                      Preview of Queued Waypoints
                    </span>
                    <div className="flex items-start gap-unit-sm p-unit-xs bg-surface-container rounded-lg">
                      <span className="font-meta-mono text-meta-mono font-bold text-secondary shrink-0 pt-0.5">
                        D1
                      </span>
                      <div>
                        <h4 className="font-label-md text-label-md text-primary">
                          Arrival in {destination} & Acclimatization
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Check-in at boutique chalet, twilight espresso at
                          local cafes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-unit-sm p-unit-xs bg-surface-container rounded-lg">
                      <span className="font-meta-mono text-meta-mono font-bold text-secondary shrink-0 pt-0.5">
                        D2
                      </span>
                      <div>
                        <h4 className="font-label-md text-label-md text-primary">
                          Local Trails & Hidden Baths
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Early 06:30 AM ridge ascent bypassing daytime hikers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <p className="text-destructive font-medium">{error}</p>
                  )}

                  {/* Generator Interactive Trigger Area */}
                  <div className="mt-unit-xs pt-unit-sm">
                    {!loading ? (
                      <button
                        onClick={handleSubmit}
                        className="w-full bg-secondary hover:bg-secondary-container text-on-secondary font-headline-sm text-headline-sm py-unit-md px-unit-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-unit-sm"
                      >
                        <span className="material-symbols-outlined">
                          auto_awesome
                        </span>
                        <span>Synthesize My Expedition Blueprint</span>
                      </button>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-unit-lg gap-unit-sm">
                        <div className="w-12 h-12 rounded-full border-2 border-secondary border-t-transparent animate-spin"></div>
                        <span className="font-meta-mono text-meta-mono text-secondary uppercase tracking-widest font-semibold animate-pulse">
                          Querying real traveler trail logs...
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Balancing transit times, micro-climate forecasts, and
                          uncrowded hours.
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-unit-xs">
                  <button
                    className="text-on-surface-variant hover:text-primary font-label-md text-label-md flex items-center gap-1"
                    onClick={() => setCurrentStep(4)}
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                    <span>Edit Preferences</span>
                  </button>
                  <span className="font-meta-mono text-meta-mono text-outline">
                    LATENCY: ~10 SEC • HIGH CONFIDENCE
                  </span>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN: Dynamic Canvas & Expedition Ledger (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-unit-md sticky top-24 h-[calc(100vh-8rem)]">
            {/* The Expedition Ledger: Reactive Manifest Inset */}
            <div className="bg-surface-container-lowest p-unit-lg rounded-xl shadow-md flex flex-col justify-between h-full">
              <div className="flex flex-col gap-unit-md">
                <div className="flex items-center justify-between pb-unit-xs">
                  <div className="flex items-center gap-unit-xs">
                    <span className="material-symbols-outlined text-primary text-base">
                      format_list_bulleted
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary">
                      Expedition Ledger
                    </span>
                  </div>
                  <span className="bg-secondary-fixed text-on-secondary-fixed font-meta-mono text-meta-mono px-2 py-0.5 rounded font-semibold">
                    LIVE DRAFT
                  </span>
                </div>

                {/* Dynamic Key-Value Pairs */}
                <div className="flex flex-col gap-unit-xs font-body-sm text-body-sm">
                  <div className="flex items-center justify-between py-1">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase">
                      Region Focus
                    </span>
                    <span className="font-semibold text-primary">
                      {destination} ({region})
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase">
                      Travel Window
                    </span>
                    <span className="font-semibold text-primary">
                      {startDate} – {endDate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase">
                      Budget Allocation
                    </span>
                    <span className="font-semibold text-secondary">
                      {budgetAmount} ({budgetTier})
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="font-meta-mono text-meta-mono text-outline uppercase">
                      Core Style
                    </span>
                    <span className="font-semibold text-primary">
                      {preferences.length > 0
                        ? preferences.join(" • ")
                        : "Open Discovery"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Field Dispatch Note snippet */}
              <div className="bg-surface-container-low p-unit-sm rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-1 text-secondary font-label-caps text-label-caps">
                  <span className="material-symbols-outlined text-xs">
                    local_library
                  </span>
                  <span>Field Dispatch Notes</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  "Old Manali in early June wakes up enveloped in pine cedar
                  scent. Take the upper forest foot-path toward Goshal village
                  to bypass main lane vehicles entirely."
                </p>
                <span className="font-meta-mono text-meta-mono text-outline text-right">
                  — Dispatch by Kabir N., Trail Log #814
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          {/* Telemetry Bar */}
          {/* <div className="w-full bg-surface-container-low px-container-margin-sm lg:px-container-margin-lg py-unit-xs border-b border-surface-variant/70">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-unit-xs">
              <div className="flex items-center gap-unit-sm flex-wrap">
                <span className="inline-flex items-center gap-unit-2xs text-secondary font-label-caps text-label-caps">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  DISPATCH DESK // DIRECT COMMUNIQUE
                </span>
                <span className="text-outline-variant font-meta-mono text-meta-mono hidden sm:inline">
                  •
                </span>
                <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                  DOSSIER #VX-CONTACT-01
                </span>
              </div>
              <div className="flex items-center gap-unit-md font-meta-mono text-meta-mono text-on-surface-variant flex-wrap">
                <span className="flex items-center gap-unit-2xs">
                  <span className="material-symbols-outlined text-[15px] text-primary">
                    pin_drop
                  </span>
                  31.1048° N, 77.1734° E — SHIMLA ATLAS
                </span>
                <span className="text-outline-variant hidden md:inline">•</span>
                <span className="flex items-center gap-unit-2xs">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    schedule
                  </span>
                  AVG RESPONSE: &lt; 4 HOURS
                </span>
                <span className="text-outline-variant hidden md:inline">•</span>
                <span className="inline-flex items-center gap-unit-2xs text-primary font-bold">
                  <span className="material-symbols-outlined text-[15px]">
                    verified
                  </span>
                  VERIFIED HUMAN DESK
                </span>
              </div>
            </div>
          </div> */}

          {/* Hero Split Section */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-3xl">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-center">
              {/* Editorial Column */}
              <div className="lg:col-span-12 flex flex-col items-start gap-unit-lg">
                <div className="inline-flex items-center gap-unit-2xs bg-surface-container px-unit-sm py-unit-2xs rounded-full">
                  <span className="material-symbols-outlined text-secondary text-[16px]">
                    travel_explore
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface tracking-wider">
                    THE EXPEDITION DESK
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
                  Let’s talk about{" "}
                  <span className="italic text-secondary">travel</span>.
                </h1>
                <p className="font-body-lead text-body-lead text-on-surface-variant w-full">
                  Have a question, found something that could be better, or
                  simply want to say hello? We’re building VacationExp alongside
                  real travelers, cartographers, and wanderers — so we’d love to
                  hear from you.
                </p>
                <div className="bg-surface-container-low p-unit-md rounded-xl flex items-start gap-unit-sm w-full shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                    sentiment_satisfied
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">
                      Direct Human Curation
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-unit-2xs">
                      No chatbots, automated loops, or robotic ticket walls.
                      Every dispatch is read by our core human team in Shimla,
                      Zurich, and Delhi.
                    </span>
                  </div>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-3 gap-unit-sm w-full pt-unit-xs">
                  <div className="bg-surface-container p-unit-sm rounded-lg flex flex-col">
                    <span className="font-meta-mono text-meta-mono text-outline">
                      TIMEZONE SYNC
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary mt-unit-2xs">
                      GMT+5:30
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Northern Ridge Hub
                    </span>
                  </div>
                  <div className="bg-surface-container p-unit-sm rounded-lg flex flex-col">
                    <span className="font-meta-mono text-meta-mono text-outline">
                      READ RATE
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary mt-unit-2xs">
                      100%
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Unfiltered Inbox
                    </span>
                  </div>
                  <div className="bg-surface-container p-unit-sm rounded-lg flex flex-col">
                    <span className="font-meta-mono text-meta-mono text-outline">
                      DISPATCHERS
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary mt-unit-2xs">
                      8 Active
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Cartography Leads
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
          </section>

          {/* Editorial Communication Nodes (3 Distinct Cards) */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-2xl bg-surface-container-low border-t border-b border-surface-variant/40">
            <div className="flex flex-col items-start mb-unit-xl">
              <span className="font-label-caps text-label-caps text-secondary">
                DIRECT TRANSMISSION CHANNELS
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-unit-2xs">
                Choose your route of conversation.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-unit-xs">
                We prioritize clarity over complexity. Choose the channel that
                best matches your quest, and your message drops straight into
                the appropriate specialist's dispatch queue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-lg">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        help_center
                      </span>
                    </span>
                    <span className="font-meta-mono text-meta-mono text-outline">
                      NODE // 01
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-unit-2xs">
                    General Questions
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-unit-md">
                    Curious about VacationExp, our cartographic engine, our
                    philosophy on travel journalism, or membership options?
                  </p>
                </div>
                <div className="flex flex-col pt-unit-md bg-surface-container-low/40 rounded-lg p-unit-sm">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    DIRECT CHANNEL
                  </span>
                  <a
                    className="inline-flex items-center justify-between font-label-md text-label-md text-primary hover:text-secondary transition-colors mt-unit-2xs"
                    href="mailto:hello@vacationexp.com"
                  >
                    <span>hello@vacationexp.com</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      arrow_forward
                    </span>
                  </a>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant mt-unit-xs">
                    Inquiries answered within 1 business day
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-[22px]">
                        lightbulb
                      </span>
                    </span>
                    <span className="font-meta-mono text-meta-mono text-outline">
                      NODE // 02
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-unit-2xs">
                    Feedback &amp; Ideas
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-unit-md">
                    Have an idea for a feature, trail metric, itinerary pacing
                    algorithm, or UX detail that would make route discovery
                    richer?
                  </p>
                </div>
                <div className="flex flex-col pt-unit-md bg-surface-container-low/40 rounded-lg p-unit-sm">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    DIRECT CHANNEL
                  </span>
                  <a
                    className="inline-flex items-center justify-between font-label-md text-label-md text-primary hover:text-secondary transition-colors mt-unit-2xs"
                    href="mailto:feedback@vacationexp.com"
                  >
                    <span>feedback@vacationexp.com</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      arrow_forward
                    </span>
                  </a>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant mt-unit-xs">
                    Directly reviewed by product design studio
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-unit-xl rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[22px]">
                        shield_person
                      </span>
                    </span>
                    <span className="font-meta-mono text-meta-mono text-outline">
                      NODE // 03
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-unit-2xs">
                    Traveler Support
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-unit-md">
                    Need prompt assistance with your traveler account, AI
                    itinerary synthesis, saved vaults, or offline GPX map
                    packets?
                  </p>
                </div>
                <div className="flex flex-col pt-unit-md bg-surface-container-low/40 rounded-lg p-unit-sm">
                  <span className="font-meta-mono text-meta-mono text-outline">
                    DIRECT CHANNEL
                  </span>
                  <a
                    className="inline-flex items-center justify-between font-label-md text-label-md text-primary hover:text-secondary transition-colors mt-unit-2xs"
                    href="mailto:support@vacationexp.com"
                  >
                    <span>support@vacationexp.com</span>
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      arrow_forward
                    </span>
                  </a>
                  <span className="font-meta-mono text-meta-mono text-on-surface-variant mt-unit-xs">
                    Priority handling for active expeditions
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Contact Form Section */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl">
              {/* Left Guidance Column */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="flex flex-col items-start gap-unit-md">
                  <span className="font-label-caps text-label-caps text-secondary">
                    DISPATCH TRANSMITTER
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                    Send us a message
                  </h2>
                  <p className="font-body-lead text-body-lead text-on-surface-variant">
                    Traveler feedback directly shapes our algorithmic route
                    tuning, mountain pass safety alerts, and uncompromised
                    homestay audits.
                  </p>

                  {/* Assurance Checklist */}
                  <div className="flex flex-col gap-unit-sm w-full mt-unit-sm">
                    <div className="flex items-center gap-unit-sm p-unit-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        lock
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                        256-bit encrypted transmission
                      </span>
                    </div>
                    <div className="flex items-center gap-unit-sm p-unit-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        do_not_disturb_on
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                        Zero automated marketing spam, ever
                      </span>
                    </div>
                    <div className="flex items-center gap-unit-sm p-unit-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        draw
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                        Human-written response from real cartographers
                      </span>
                    </div>
                  </div>
                </div>

                {/* Geographic & Bureau Locations */}
                <div className="bg-surface-container p-unit-lg rounded-xl mt-unit-xl flex flex-col gap-unit-sm">
                  <div className="flex items-center justify-between border-b border-surface-variant/40 pb-unit-sm">
                    <span className="font-label-caps text-label-caps text-primary">
                      EDITORIAL HEADQUARTERS
                    </span>
                    <span className="font-meta-mono text-meta-mono text-outline">
                      STATION NODES
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-unit-xs pt-unit-xs text-on-surface">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md">
                        Shimla
                      </span>
                      <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                        Himalayas
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md">
                        New Delhi
                      </span>
                      <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                        Digital Lab
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md">
                        Zurich
                      </span>
                      <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                        Alpine Desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Container */}
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-unit-xl sm:p-unit-2xl rounded-2xl shadow-xl border border-surface-variant/50">
                  {!formSubmitted ? (
                    <form
                      className="flex flex-col gap-unit-lg animate-in fade-in"
                      onSubmit={handleSubmit}
                    >
                      {/* Row 1: Name and Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-md">
                        <div className="flex flex-col gap-unit-2xs">
                          <label
                            className="font-label-md text-label-md text-on-surface"
                            htmlFor="contact-name"
                          >
                            Your Name <span className="text-secondary">*</span>
                          </label>
                          <div className="relative">
                            <input
                              className="w-full bg-surface-container-low border border-transparent px-unit-md py-unit-sm rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                              id="contact-name"
                              placeholder="Rohit Kumhar or your name"
                              required
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-unit-2xs">
                          <label
                            className="font-label-md text-label-md text-on-surface"
                            htmlFor="contact-email"
                          >
                            Email Address{" "}
                            <span className="text-secondary">*</span>
                          </label>
                          <div className="relative">
                            <input
                              className="w-full bg-surface-container-low border border-transparent px-unit-md py-unit-sm rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                              id="contact-email"
                              placeholder="you@example.com"
                              required
                              type="email"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Subject Selector */}
                      <div className="flex flex-col gap-unit-2xs">
                        <label
                          className="font-label-md text-label-md text-on-surface"
                          htmlFor="contact-subject"
                        >
                          Inquiry Subject{" "}
                          <span className="text-secondary">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full bg-surface-container-low border border-transparent px-unit-md py-unit-sm rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all cursor-pointer"
                            id="contact-subject"
                            required
                            defaultValue=""
                          >
                            <option disabled value="">
                              What can we help with?
                            </option>
                            <option value="general">
                              General Inquiries &amp; Cartography Membership
                            </option>
                            <option value="dispatch">
                              Field Dispatch Feedback &amp; Trail Updates
                            </option>
                            <option value="support">
                              Itinerary Synthesis &amp; AI Engine Support
                            </option>
                            <option value="partnership">
                              Local Partnership &amp; Editorial Syndication
                            </option>
                          </select>
                          <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">
                            expand_more
                          </span>
                        </div>
                      </div>

                      {/* Row 3: Message Textarea */}
                      <div className="flex flex-col gap-unit-2xs">
                        <div className="flex items-center justify-between">
                          <label
                            className="font-label-md text-label-md text-on-surface"
                            htmlFor="contact-message"
                          >
                            Your Message{" "}
                            <span className="text-secondary">*</span>
                          </label>
                          <span className="font-meta-mono text-meta-mono text-outline">
                            Plaintext Markdown Supported
                          </span>
                        </div>
                        <textarea
                          className="w-full bg-surface-container-low border border-transparent p-unit-md rounded-lg font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/45 focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all resize-y"
                          id="contact-message"
                          placeholder="Tell us what’s on your mind — whether it’s a bug on a trail map, a suggestion for a quiet valley, or a travel inquiry..."
                          required
                          rows={5}
                        ></textarea>
                      </div>

                      {/* Form Footer & Button */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-unit-md pt-unit-xs">
                        <div className="flex items-center gap-unit-xs font-meta-mono text-meta-mono text-outline">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            verified_user
                          </span>
                          <span>
                            All transmissions handled under archival
                            confidentiality.
                          </span>
                        </div>
                        <button
                          className="inline-flex items-center justify-center gap-unit-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-unit-xl py-unit-sm rounded-xl shadow-md transition-all group"
                          type="submit"
                        >
                          <span>Send Message</span>
                          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                            send
                          </span>
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Feedback Toast confirmation */
                    <div className="flex flex-col items-center justify-center py-unit-2xl text-center gap-unit-md animate-in fade-in">
                      <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                        <span className="material-symbols-outlined text-[32px]">
                          done_all
                        </span>
                      </div>
                      <div className="flex flex-col gap-unit-2xs">
                        <span className="font-label-caps text-label-caps text-secondary">
                          TELEMETRY DELIVERED
                        </span>
                        <h3 className="font-headline-md text-headline-md text-primary">
                          Dispatch Logged Successfully
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                          Thank you. Your message has reached our dispatch desk.
                          A human cartographer will review your note and respond
                          to your email within four operational hours.
                        </p>
                      </div>
                      <button
                        className="mt-unit-sm font-label-md text-label-md text-secondary underline underline-offset-4 hover:text-on-secondary-container"
                        onClick={handleReset}
                      >
                        Send another dispatch
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Co-Creation & Feedback Prompt Banner */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-xl">
            <div className="bg-gradient-to-r from-surface-container to-surface-container-high p-unit-xl lg:p-unit-2xl rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-unit-xl shadow-sm border border-surface-variant/30">
              <div className="flex flex-col items-start gap-unit-xs max-w-2xl">
                <span className="font-label-caps text-label-caps text-secondary font-bold">
                  CO-DESIGN WITH US
                </span>
                <h3 className="font-headline-md text-headline-md text-primary">
                  Help us make VacationExp better.
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tell us what would make planning your next trip easier. We
                  update our AI models, weather indexes, and cartographic guides
                  weekly based on traveler insights.
                </p>
              </div>
              <div className="flex items-center gap-unit-sm shrink-0">
                <a
                  className="inline-flex items-center gap-unit-xs bg-surface-container-lowest hover:bg-surface-bright text-on-surface font-label-md text-label-md px-unit-lg py-unit-sm rounded-xl shadow-sm transition-colors border border-surface-variant/40"
                  href="mailto:feedback@vacationexp.com?subject=Co-Design%20Field%20Suggestion"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    rate_review
                  </span>
                  <span>Share Feedback →</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ & Self-Serve Archive */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-3xl bg-surface-container-low border-t border-surface-variant/40 mt-unit-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start max-w-7xl mx-auto">
              {/* Left Heading */}
              <div className="lg:col-span-5 flex flex-col items-start gap-unit-xs">
                <span className="font-label-caps text-label-caps text-secondary">
                  SELF-SERVE ARCHIVE
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Looking for an answer?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-unit-2xs">
                  You might find what you’re looking for in our curated FAQs
                  regarding route synthesis, budget audits, taxi benchmarks, and
                  offline packs.
                </p>
                <button
                  onClick={() => navigate("/about")}
                  className="inline-flex items-center gap-unit-2xs font-label-md text-label-md text-secondary hover:text-on-secondary-container mt-unit-md transition-colors"
                >
                  <span>Visit Full Knowledge Vault</span>
                  <span className="material-symbols-outlined text-[18px]">
                    open_in_new
                  </span>
                </button>
              </div>

              {/* Right Interactive FAQ Pills & Accordions */}
              <div className="lg:col-span-7 flex flex-col gap-unit-sm">
                <details className="bg-surface-container-lowest border border-surface-variant/50 p-unit-lg rounded-xl shadow-sm group cursor-pointer">
                  <summary className="font-headline-sm text-[20px] text-on-surface flex items-center justify-between list-none font-semibold focus:outline-none">
                    <span>How does VacationExp verify local taxi rates?</span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      keyboard_arrow_down
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-unit-sm leading-relaxed pt-unit-xs border-t border-surface-variant/30">
                    Our rate matrix is synthesized from two independent anchors:
                    physical union boards at high-altitude taxi stands and
                    anonymized transaction logs submitted weekly by active
                    travelers. This prevents fare spikes and keeps offline
                    budget predictions strictly honest.
                  </p>
                </details>

                <details className="bg-surface-container-lowest border border-surface-variant/50 p-unit-lg rounded-xl shadow-sm group cursor-pointer">
                  <summary className="font-headline-sm text-[20px] text-on-surface flex items-center justify-between list-none font-semibold focus:outline-none">
                    <span>
                      Can I export itineraries to GPX and offline PDFs?
                    </span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      keyboard_arrow_down
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-unit-sm leading-relaxed pt-unit-xs border-t border-surface-variant/30">
                    Yes. Every itinerary generated on VacationExp provides a
                    one-click export bundle including vector offline maps,
                    topographic elevation slices, GPX waypoints for Garmin/OSM
                    apps, and a high-density 2-page print dispatch.
                  </p>
                </details>

                <details className="bg-surface-container-lowest border border-surface-variant/50 p-unit-lg rounded-xl shadow-sm group cursor-pointer">
                  <summary className="font-headline-sm text-[20px] text-on-surface flex items-center justify-between list-none font-semibold focus:outline-none">
                    <span>How do field dispatches stay 100% unsponsored?</span>
                    <span className="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">
                      keyboard_arrow_down
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-unit-sm leading-relaxed pt-unit-xs border-t border-surface-variant/30">
                    We never accept promotional stays, sponsored itinerary
                    placement, or affiliate hospitality compensation. Our field
                    contributors and AI verification algorithms evaluate
                    locations purely on safety, cultural integrity, and
                    authentic spatial value.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* Minimal Travel-Inspired Closing Banner */}
          <section className="w-full px-container-margin-sm lg:px-container-margin-lg py-unit-3xl">
            <div className="relative overflow-hidden bg-primary text-on-primary rounded-2xl p-unit-2xl lg:p-unit-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-unit-xl max-w-7xl mx-auto">
              {/* Decorative cartographic background motif */}
              <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4">
                <svg
                  className="w-96 h-96"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 200 200"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    strokeDasharray="4 4"
                    strokeWidth="0.5"
                  ></circle>
                  <circle cx="100" cy="100" r="60" strokeWidth="0.5"></circle>
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    strokeDasharray="2 2"
                    strokeWidth="0.5"
                  ></circle>
                  <path d="M100 0 V200 M0 100 H200" strokeWidth="0.5"></path>
                </svg>
              </div>

              <div className="flex flex-col gap-unit-xs max-w-xl relative z-10">
                <span className="font-label-caps text-label-caps text-primary-fixed tracking-widest">
                  EXPEDITION PROTOCOL
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-surface-container-lowest">
                  Until then, keep exploring.
                </h2>
                <p className="font-body-lead text-body-lead text-surface-dim mt-unit-2xs">
                  Your next adventure might be closer than you think. Walk
                  slower, listen closer, and step beyond the obvious.
                </p>
              </div>

              <div className="relative z-10 shrink-0">
                <button
                  onClick={() => navigate("/explore")}
                  className="inline-flex items-center gap-unit-xs bg-secondary hover:bg-secondary-container text-on-secondary font-label-md text-label-md px-unit-xl py-unit-md rounded-xl shadow-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    explore
                  </span>
                  <span>Explore VacationExp →</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

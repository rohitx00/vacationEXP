import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CommunityFeed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Create Dispatch CTA Banner */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-md mt-unit-sm">
            <div className="bg-surface-container-low border border-surface-container-high/50 rounded-2xl p-unit-lg flex flex-col md:flex-row items-center justify-between gap-unit-md shadow-sm">
              <div className="flex flex-col gap-1">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Got a story worth telling?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Share your unmapped havens, hidden trails, and wild encounters
                  with our community of explorers.
                </p>
              </div>
              <button
                onClick={() => navigate("/community/new")}
                className="flex items-center justify-center w-full md:w-auto gap-2 px-unit-lg py-3 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg transition-all shadow-md group whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-lg transition-transform group-hover:rotate-12">
                  edit_document
                </span>
                <span>Write a Dispatch</span>
              </button>
            </div>
          </section>
          {/* Editorial Hero Section */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-default items-center">
              {/* Typography & Manifesto (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-unit-md">
                <div className="flex items-center gap-unit-sm">
                  <span className="px-unit-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-meta-mono text-meta-mono uppercase tracking-widest">
                    Field Archive #84
                  </span>
                  <span className="text-on-surface-variant font-meta-mono text-meta-mono">
                    32°14'N 77°11'E • Western Himalayas
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-on-background tracking-tight">
                  Travel through someone else's{" "}
                  <span className="italic font-normal text-primary">story</span>
                  .
                </h1>
                <p className="font-body-lead text-body-lead text-on-surface-variant max-w-xl">
                  AI charts the route with cold efficiency. Real explorers
                  reveal the morning mists, unspoken trails, and quiet
                  wood-fired hearths that algorithms cannot foresee.
                </p>

                {/* Metric Ribbon */}
                <div className="grid grid-cols-3 gap-unit-md pt-unit-sm">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {posts.length}
                    </span>
                    <span className="font-meta-mono text-meta-mono text-on-surface-variant uppercase tracking-wider">
                      Field Logs
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {new Set(posts.map((p) => p.location)).size}
                    </span>
                    <span className="font-meta-mono text-meta-mono text-on-surface-variant uppercase tracking-wider">
                      Unmapped Havens
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {posts.reduce(
                        (acc, p) =>
                          acc +
                          (p.comments?.length || 0) +
                          (p.likes?.length || 0),
                        0,
                      )}
                    </span>
                    <span className="font-meta-mono text-meta-mono text-on-surface-variant uppercase tracking-wider">
                      Total Interactions
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero Visual Composition (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Featured Journey"
                    src={
                      posts.length > 0
                        ? posts[0].imageUrl
                        : "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1024"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                  {/* Floating Badge / Editorial Stamp */}
                  <div className="absolute top-unit-md right-unit-md bg-surface/90 backdrop-blur-md px-unit-sm py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                    <span className="font-meta-mono text-meta-mono text-on-surface font-semibold">
                      ON TRAIL DISPATCH
                    </span>
                  </div>
                  {/* Bottom Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-unit-lg text-on-primary">
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-fixed">
                      Featured Journey
                    </span>
                    <h3 className="font-headline-sm text-headline-sm mt-1 leading-snug line-clamp-2">
                      {posts.length > 0 ? posts[0].title : "Featured Journey"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-primary/80 mt-1 line-clamp-2">
                      {posts.length > 0
                        ? posts[0].content
                        : "Loading featured story..."}
                    </p>
                    <div className="flex items-center gap-unit-sm mt-unit-sm pt-unit-xs">
                      <span className="font-caption-editorial text-caption-editorial italic text-on-primary/90">
                        Field log by{" "}
                        {posts.length > 0 ? posts[0].name : "Unknown"}
                      </span>
                      <span className="text-on-primary/40">•</span>
                      <span className="font-meta-mono text-meta-mono text-on-primary/75">
                        Updated 4h ago
                      </span>
                    </div>
                  </div>
                </div>
                {/* Overlapping Inset Card */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-surface p-unit-md rounded-xl shadow-xl items-center gap-unit-md max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-lg">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                      Zero Influencer Fluff
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      100% Unsponsored &amp; Cost Audited
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Editorial Section: What is Calling You to the Trail? (Asymmetric Bento Grid) */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl bg-surface-container-low">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md mb-unit-xl">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                  Categorical Expeditions
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                  What is calling you to the trail?
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Select your compass needle. Dispatches organized not by generic
                tourist checklists, but by sensory pursuit.
              </p>
            </div>
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-md">
              {/* 1. Large Hero Bento: Hidden Gems & Sanctuaries (7 cols) */}
              <div className="md:col-span-7 group relative rounded-xl overflow-hidden shadow-md bg-surface min-h-[380px] flex flex-col justify-between p-unit-xl cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Deep green cedar forest valley in Himachal Pradesh with morning sunbeams cutting through the clouds, mist settling over traditional slate roof huts in a quiet remote Himalayan village."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6j621KKgXjTsK9dHA1efC95aZThmUDOO-rlIvMBFwYkZwP962qHgyXCv0phfVk2GbFDHcOZv34yj2qv6eM3iS95sbMMXEy3M05Sz44n41hTa56PloMBjdERt4kZdqXqQbwc21X1d6jNDKASeVlcIuTvWE4U_voXLtP-d8y8_9wFQxecvHFvuoU7W73IwySIE0XAaWgEXYbW1ZY5cKtwwHqmSjrba53VOMoLIo8NDUzM67SMdJg1Dk')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-black/20"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-unit-sm py-1 bg-surface/90 backdrop-blur-sm text-on-surface rounded font-label-caps text-label-caps uppercase tracking-widest">
                    348 Entries • High Priority
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface/20 backdrop-blur-md text-on-primary flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
                <div className="relative z-10 text-on-primary mt-auto">
                  <span className="font-meta-mono text-meta-mono text-primary-fixed uppercase tracking-wider">
                    Sanctuaries Bypassed by Mass Transit
                  </span>
                  <h3 className="font-headline-md text-headline-md mt-1 mb-2">
                    Hidden Hamlets &amp; Unmapped Paths
                  </h3>
                  <p className="font-body-md text-body-md text-on-primary/80 max-w-lg">
                    High apple terraces, unpaved sheep trails, and cliffside
                    monasteries where footsteps echo and time stretches
                    backward.
                  </p>
                  <div className="flex flex-wrap gap-unit-xs mt-unit-md">
                    <span className="px-unit-xs py-1 rounded bg-on-primary/10 backdrop-blur-sm font-meta-mono text-meta-mono text-on-primary">
                      Goshal Valley
                    </span>
                    <span className="px-unit-xs py-1 rounded bg-on-primary/10 backdrop-blur-sm font-meta-mono text-meta-mono text-on-primary">
                      Naggar Hinterland
                    </span>
                    <span className="px-unit-xs py-1 rounded bg-on-primary/10 backdrop-blur-sm font-meta-mono text-meta-mono text-on-primary">
                      Chhoie Falls
                    </span>
                  </div>
                </div>
              </div>
              {/* 2. Authentic Food & Hearth (5 cols) */}
              <div className="md:col-span-5 group relative rounded-xl overflow-hidden shadow-md bg-surface min-h-[380px] flex flex-col justify-between p-unit-xl cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt="Traditional rustic kitchen in a mountain homestay with brass vessels, steaming clay pot of freshly steamed Himachali siddu bread, wood hearth embers glowing warmly, shot with 35mm film aesthetic."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA9NL39h55t3267YqUgZVCytHt8X0HA6KdafoZ_qQ86eAxpIwu25JkE0bfLZ7tFCBorJKLbymSEYPObG35sKMmFKIVSk8OFtM7XR-JefQrHh5HNuT5GPIiSx_q7RNlFTToLGSygsYnhHYnMagOT08QqIq3kjZeyXs2myyB3Evu9qdUZ00UuvDHE4sqQobz4yS4lUzPlpIuoY0WB0UmL-tlrl8rtGnELZDH48038pc6md471LSB5Aq0')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-black/30"></div>
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-unit-sm py-1 bg-surface/90 backdrop-blur-sm text-on-surface rounded font-label-caps text-label-caps uppercase tracking-widest">
                    Terroir &amp; Kitchen
                  </span>
                  <span className="w-8 h-8 rounded-full bg-surface/20 backdrop-blur-md text-on-primary flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </span>
                </div>
                <div className="relative z-10 text-on-primary mt-auto">
                  <span className="font-meta-mono text-meta-mono text-secondary-fixed uppercase tracking-wider">
                    Wood-Fired Hearth Culture
                  </span>
                  <h3 className="font-headline-sm text-headline-sm mt-1 mb-2">
                    Authentic Food &amp; Mountain Stoves
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary/80">
                    Wild walnut pastes, steamed siddu soaked in clarified cow
                    butter, and 40-year sourdough fermented in high deodar
                    cabins.
                  </p>
                </div>
              </div>
              {/* 3. Radical Budget Ledgers (4 cols) */}
              <div className="md:col-span-4 bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-unit-md">
                    <span className="material-symbols-outlined">
                      receipt_long
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                    Audited Truth
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">
                    Radical Budget Ledgers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero speculation. Real balance sheets from travelers who
                    stayed 10 days for ₹14,000 without compromising dignity or
                    beauty.
                  </p>
                </div>
                <div className="pt-unit-md flex items-center justify-between font-meta-mono text-meta-mono text-primary font-bold">
                  <span>86 Detailed Ledgers</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
              {/* 4. High-Altitude & Wild Adventure (4 cols) */}
              <div className="md:col-span-4 bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-unit-md">
                    <span className="material-symbols-outlined">hiking</span>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Unassisted Footwork
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">
                    High-Pass Scree &amp; Glaciers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Technical notes on Shinku La, Rohtang side corridors, and
                    river crossings verified by alpine walkers this season.
                  </p>
                </div>
                <div className="pt-unit-md flex items-center justify-between font-meta-mono text-meta-mono text-primary font-bold">
                  <span>114 Trail Reports</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
              {/* 5. Solo Traveler Sanctuary (4 cols) */}
              <div className="md:col-span-4 bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container mb-unit-md">
                    <span className="material-symbols-outlined">
                      self_improvement
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Solitude &amp; Safety
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-2">
                    Quiet Writing Sanctuaries
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Vetted local homestay families, dependable solar power,
                    silent stream paths, and genuine psychological peace.
                  </p>
                </div>
                <div className="pt-unit-md flex items-center justify-between font-meta-mono text-meta-mono text-primary font-bold">
                  <span>92 Solitude Shelters</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Featured Cover Story Spread ("Dispatch of the Month") */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Column (7 cols) */}
                <div className="lg:col-span-7 relative min-h-[440px] lg:min-h-full">
                  <img
                    className="w-full h-full object-cover"
                    alt="Cover Story"
                    src={
                      posts.length > 1
                        ? posts[1].imageUrl
                        : "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1024"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-container-low/80 hidden lg:block"></div>
                  {/* Tag Ribbon */}
                  <div className="absolute top-unit-md left-unit-md flex flex-wrap gap-unit-xs">
                    <span className="bg-primary text-on-primary px-unit-sm py-1 rounded font-label-caps text-label-caps uppercase tracking-widest">
                      Cover Story • October 2024
                    </span>
                    <span className="bg-surface/90 backdrop-blur-md text-on-surface px-unit-sm py-1 rounded font-meta-mono text-meta-mono">
                      GPS 32.257° N, 77.172° E
                    </span>
                  </div>
                </div>
                {/* Editorial Story Column (5 cols) */}
                <div className="lg:col-span-5 p-unit-xl lg:p-unit-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-unit-sm mb-unit-sm">
                      <span className="text-secondary font-meta-mono text-meta-mono font-bold uppercase tracking-widest">
                        Deep Valley Chronicle
                      </span>
                      <span className="text-on-surface-variant font-meta-mono text-meta-mono">
                        •
                      </span>
                      <span className="text-on-surface-variant font-meta-mono text-meta-mono">
                        14 Min Read
                      </span>
                    </div>
                    <h3 className="font-headline-lg text-headline-lg text-on-surface leading-tight line-clamp-2">
                      {posts.length > 1
                        ? posts[1].title
                        : "Featured Cover Story"}
                    </h3>
                    {/* Contributor Byline */}
                    <div className="flex items-center gap-unit-sm my-unit-md py-unit-xs">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-semibold text-sm uppercase">
                        {posts.length > 1 && posts[1].name
                          ? posts[1].name.substring(0, 2)
                          : "KN"}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                          <span className="font-caption-editorial text-caption-editorial italic text-on-surface font-semibold">
                            {posts.length > 1 ? posts[1].name : "Unknown"}
                          </span>
                          <span
                            className="material-symbols-outlined text-secondary text-sm"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            verified
                          </span>
                        </div>
                        <span className="font-meta-mono text-meta-mono text-on-surface-variant">
                          Resident Cartographer &amp; Woodcrafter
                        </span>
                      </div>
                    </div>
                    {/* Pull Quote Block */}
                    <blockquote className="p-unit-md bg-surface rounded-lg shadow-sm font-caption-editorial text-caption-editorial italic text-on-surface leading-relaxed relative my-unit-sm">
                      <span className="text-primary-fixed-dim text-3xl absolute top-0 left-2 font-display-hero select-none">
                        “
                      </span>
                      <p className="pl-4 line-clamp-3">
                        {posts.length > 1
                          ? posts[1].content
                          : "Loading cover story content..."}
                      </p>
                    </blockquote>
                    {/* Field Meta Specs */}
                    <div className="grid grid-cols-3 gap-unit-xs py-unit-sm my-unit-xs text-on-surface-variant font-meta-mono text-meta-mono">
                      <div className="flex flex-col">
                        <span className="text-on-surface font-bold">
                          2,180m
                        </span>
                        <span>Elevation</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-on-surface font-bold">
                          ₹1,200/d
                        </span>
                        <span>Stay Cost</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-on-surface font-bold">542</span>
                        <span>Vault Saves</span>
                      </div>
                    </div>
                  </div>
                  {/* CTAs */}
                  <div className="flex items-center gap-unit-sm pt-unit-md">
                    <button className="flex-1 px-unit-lg py-3 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-all text-center">
                      Read Full Dispatch →
                    </button>
                    <button
                      className="p-3 bg-surface hover:bg-surface-container text-on-surface rounded-lg transition-all shadow-sm flex items-center justify-center"
                      title="Save to Vault"
                    >
                      <span className="material-symbols-outlined text-lg">
                        bookmark
                      </span>
                    </button>
                    <button
                      className="p-3 bg-surface hover:bg-surface-container text-on-surface rounded-lg transition-all shadow-sm flex items-center justify-center"
                      title="Map Pin"
                    >
                      <span className="material-symbols-outlined text-lg">
                        share
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Community Discovery Feed ("Stories Worth Getting Lost In") */}
          <section
            className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl"
            id="feed"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md mb-unit-xl">
              <div>
                <div className="flex items-center gap-unit-xs text-secondary font-meta-mono text-meta-mono uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-sm">
                    history_edu
                  </span>
                  <span>Community Logbook</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Stories Worth Getting Lost In
                </h2>
              </div>
              <div className="flex items-center gap-unit-xs">
                <button className="px-unit-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md active">
                  Trending
                </button>
                <button className="px-unit-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md">
                  Most Detailed Ledgers
                </button>
                <button className="px-unit-sm py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md">
                  Fresh From Trail
                </button>
              </div>
            </div>
            {/* Masonry Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-default">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div
                    key={post._id}
                    onClick={() => navigate(`/community/${post._id}`)}
                    className="flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="relative h-60 overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={post.title}
                        src={post.imageUrl}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1024";
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-secondary text-on-secondary px-2 py-0.5 rounded font-label-caps text-label-caps uppercase tracking-wider">
                        Field Journal
                      </span>
                      <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface font-meta-mono text-meta-mono px-2 py-0.5 rounded">
                        {post.location}
                      </span>
                    </div>
                    <div className="p-unit-lg flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-unit-xs text-on-surface-variant font-meta-mono text-meta-mono mb-2">
                          <span>{post.location}</span>
                          <span>•</span>
                          <span>5 min read</span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      <div className="pt-unit-md mt-unit-md flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold text-xs flex items-center justify-center">
                            {post.name
                              ? post.name.substring(0, 2).toUpperCase()
                              : "AN"}
                          </div>
                          <span className="font-caption-editorial text-caption-editorial italic text-on-surface">
                            By {post.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-unit-sm text-on-surface-variant text-xs">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              favorite
                            </span>{" "}
                            {post.likes?.length || 0}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              chat_bubble
                            </span>{" "}
                            {post.comments?.length || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-24 text-on-surface-variant font-body-md">
                  <p className="text-xl">No field dispatches yet.</p>
                  <p className="mt-2">Be the first to share your journey!</p>
                </div>
              )}
            </div>
            {/* Feed Pagination / Load More CTA */}
            <div className="flex justify-center mt-unit-2xl">
              <button className="px-unit-2xl py-unit-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all flex items-center gap-unit-xs shadow-sm">
                <span>Load Further Dispatches (82 Remaining)</span>
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </button>
            </div>
          </section>
          {/* Deep-Dive Destination Atlas (Focused Spotlight: Manali Matrix) */}
          <section
            className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl bg-surface-container-low"
            id="manali-focus"
          >
            <div className="max-w-4xl mx-auto text-center mb-unit-xl">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                Destination Intelligence Matrix
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                Every destination has an untamed side.
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mt-2">
                Curated micro-directories compiled directly from 124 verified
                independent community logs.
              </p>
              {/* Destination Toggle Pill Group */}
              <div className="inline-flex p-1 bg-surface-container rounded-xl gap-1 mt-unit-md overflow-x-auto max-w-full">
                <button className="px-unit-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">
                  Manali &amp; Kullu
                </button>
                <button className="px-unit-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
                  Spiti &amp; Kinnaur
                </button>
                <button className="px-unit-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
                  Old Goa Hinterland
                </button>
                <button className="px-unit-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
                  Zanskar &amp; Ladakh
                </button>
                <button className="px-unit-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md whitespace-nowrap">
                  Wayanad Forest
                </button>
              </div>
            </div>
            {/* 4-Quadrant Deep Dive Grid for Selected Destination */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-md">
              {/* Quadrant 1: EAT */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="text-xl">🍜</span>
                    <span className="font-meta-mono text-meta-mono text-secondary uppercase font-bold tracking-widest">
                      Eat &amp; Terroir
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-unit-sm">
                    Authentic Stoves
                  </h4>
                  <ul className="space-y-unit-sm text-body-sm text-on-surface-variant">
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Local Siddu with Ghee
                      </span>
                      <span>
                        Near Manu Temple steps. Stuffed with walnut paste. ₹90.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Wood-fired Trout at Haripur
                      </span>
                      <span>
                        14km downstream. Marinated in wild thyme and salt.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Dylan's Roasted Coffee &amp; Cookies
                      </span>
                      <span>Toasted cinnamon crunch, brewed since 1999.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-unit-md mt-unit-md">
                  <a
                    className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1"
                    href="#"
                  >
                    <span>18 Verified Food Logs</span>
                    <span className="material-symbols-outlined text-xs">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              {/* Quadrant 2: EXPLORE */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="text-xl">🗺️</span>
                    <span className="font-meta-mono text-meta-mono text-primary uppercase font-bold tracking-widest">
                      Explore Footpaths
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-unit-sm">
                    Secret Byways
                  </h4>
                  <ul className="space-y-unit-sm text-body-sm text-on-surface-variant">
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        The High Goshal Ridge
                      </span>
                      <span>
                        Gentle 2hr unpaved ascent above cedar timber line.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Haripur Crystal Rapids
                      </span>
                      <span>
                        Clear glacial pool bypassing Solang commercial rafts.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Vashisht Upper Sulfur Spring
                      </span>
                      <span>
                        Climb past the main pool to the high mountain spout.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-unit-md mt-unit-md">
                  <a
                    className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1"
                    href="#"
                  >
                    <span>34 Trail Notes</span>
                    <span className="material-symbols-outlined text-xs">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              {/* Quadrant 3: SAVE */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="text-xl">💰</span>
                    <span className="font-meta-mono text-meta-mono text-secondary-container uppercase font-bold tracking-widest">
                      Audited Spend
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-unit-sm">
                    Fair-Rate Ledger
                  </h4>
                  <ul className="space-y-unit-sm text-body-sm text-on-surface-variant">
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Taxi Union Direct Rates
                      </span>
                      <span>
                        Manali to Atal Tunnel fixed ₹1,600 (not tourist ₹3,500).
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Heritage Homestays
                      </span>
                      <span>
                        ₹1,400–₹1,800/night incl. two wood-stove home meals.
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        Shared Local Sumo Shuttle
                      </span>
                      <span>
                        ₹50 to Naggar castle steps from private bus stand.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-unit-md mt-unit-md">
                  <a
                    className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1"
                    href="#"
                  >
                    <span>Download Rate Card PDF</span>
                    <span className="material-symbols-outlined text-xs">
                      download
                    </span>
                  </a>
                </div>
              </div>
              {/* Quadrant 4: COMMUNITY STORIES */}
              <div className="bg-primary text-on-primary p-unit-lg rounded-xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-unit-md">
                    <span className="text-xl">📖</span>
                    <span className="font-meta-mono text-meta-mono text-primary-fixed uppercase font-bold tracking-widest">
                      Active Dispatch
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-primary mb-unit-sm">
                    124 Stories
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-primary/80 mb-unit-md">
                    "Manali is two separate worlds. One belongs to blaring horn
                    jams; the other is a quiet deodar haven if you cross the
                    river before dawn."
                  </p>
                  <div className="flex items-center gap-unit-xs mb-unit-sm">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary-fixed text-primary font-bold text-xs flex items-center justify-center">
                        K
                      </div>
                      <div className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center">
                        P
                      </div>
                      <div className="w-6 h-6 rounded-full bg-tertiary-fixed text-primary font-bold text-xs flex items-center justify-center">
                        M
                      </div>
                    </div>
                    <span className="font-meta-mono text-meta-mono text-primary-fixed">
                      9 explorers currently logged
                    </span>
                  </div>
                </div>
                <div className="pt-unit-md mt-unit-md">
                  <a
                    className="text-primary-fixed font-label-md text-label-md hover:underline flex items-center gap-1"
                    href="#feed"
                  >
                    <span>Browse All 124 Logs</span>
                    <span className="material-symbols-outlined text-xs">
                      east
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Community Contributors Showcase ("The Cartographers & Storytellers") */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-md mb-unit-xl">
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
                  Vetted Voices
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                  The Cartographers &amp; Field Storytellers
                </h2>
              </div>
              <a
                className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1"
                href="#"
              >
                <span>View Full Registry (340 Contributors)</span>
                <span className="material-symbols-outlined text-sm">east</span>
              </a>
            </div>
            {/* 4 Contributor Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-default">
              {/* Contributor 1 */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="relative mb-unit-md">
                  <img
                    className="w-20 h-20 rounded-full object-cover shadow-sm"
                    data-alt="Close up portrait of an Indian mountain guide Kabir smiling warmly wearing wool beanie in the Himalayas, documentary 35mm film photography."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjF74lArDnZRtq4k7xitmtbEv_No5VpgYmvfR5d8V1x6WWvpaBDa9a-trnJ_6LoaQ7YFkvuVCMUb_nEnCpY7Kdp1fguqeI4blpsXoctStclrPGHxKeE1t6Kk_teZf6YMfR4zS3vNWvsPmkIBjExjF21wO9sD_8zPgDz2NnycvuLbr2H4e6u_dSisMO8Zn8imhVK_9eT17bPq3TEaGlBp3oRH-APb74UGHNKJBgmSa2A6CmHJLIvoN0"
                  />
                  <span className="material-symbols-outlined absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-0.5 text-xs">
                    verified
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Kabir N.
                </h4>
                <span className="font-meta-mono text-meta-mono text-secondary mt-0.5">
                  Manali Resident • 28 Dispatches
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">
                  High-Pass Alpine, Woodcraft Guilds, and unmapped sheep ridge
                  traverses.
                </p>
                <button className="mt-unit-md w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all">
                  Follow Field Log
                </button>
              </div>
              {/* Contributor 2 */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="relative mb-unit-md">
                  <img
                    className="w-20 h-20 rounded-full object-cover shadow-sm"
                    data-alt="Portrait of South Indian female travel writer Priya Nair in natural morning sunlight, coastal breeze, thoughtful relaxed expression."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANXaRWvPkwcMZFrahLYT_ToRquDMzizPFOqzDu8_EBuP9l5gswtEo7YZFEx-V424pgi2YC-_AaVRmeqBUIeRhDPPqiuqtdiX_pFdSIoRhrn8DLgyJ4FLe73WT-WTsT8xY6YSbUf9bIxPxB7q8Zev4ecS_K2rbLkqzjDxsE7Vr8B94sxMZgN_YASVX_4DaclOHjhwzFRRwa2ylGSZcNA34goyDMohFPU4FTc-4nOifsPEffT4FBNvpY"
                  />
                  <span className="material-symbols-outlined absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-0.5 text-xs">
                    verified
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Priya Nair
                </h4>
                <span className="font-meta-mono text-meta-mono text-secondary mt-0.5">
                  Kochi &amp; Goa • 19 Dispatches
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">
                  Radical budget architecture, island ferries, and backwater
                  slow travel.
                </p>
                <button className="mt-unit-md w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all">
                  Follow Field Log
                </button>
              </div>
              {/* Contributor 3 */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="relative mb-unit-md">
                  <img
                    className="w-20 h-20 rounded-full object-cover shadow-sm"
                    data-alt="Portrait of botanist explorer Dr Marcus Vance with rugged outdoor gear against pine forests, warm cinematic light."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV73UNNzS0jMLgJjuHtf4JYV471PuP5ZNzX8lJiIVBKrDAUV4eFk2cg3OI13qNo0nUhGH0W05fp0BNre5EIYhqAJnkieP4jTrQ_EOAKid0b4BTYFVpnScQfr9-pTzKcVq9n1sAtHu5prNQS60CKRsFaktNC3SFarPTUSlBYmr5K_ZN8ldod7A7f8yJD8zzvBZeXz7XK-T5ryRittxM3p8H18bWM5PXOgKm11QQxGt-ioR-jE9o0ojY"
                  />
                  <span className="material-symbols-outlined absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-0.5 text-xs">
                    verified
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Dr. Marcus Vance
                </h4>
                <span className="font-meta-mono text-meta-mono text-secondary mt-0.5">
                  Botanist • 14 Dispatches
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">
                  Himalayan medicinal flora, scree navigation, and solitude
                  writing shelters.
                </p>
                <button className="mt-unit-md w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all">
                  Follow Field Log
                </button>
              </div>
              {/* Contributor 4 */}
              <div className="bg-surface p-unit-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="relative mb-unit-md">
                  <img
                    className="w-20 h-20 rounded-full object-cover shadow-sm"
                    data-alt="Portrait of food anthropologist Aanya Sengupta in an artisanal spice bazaar with warm ambient illumination, genuine smile."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_bT3BxqhRglLaYdsXVlr6_naaVCrCiPif2Xfvdg25JFtOBrpYTAd6BMoq8sTuZUevuXw58vcdklZ098sK3y_OP93gcyUy0dGSdTCOWtzQAet1NU_tTEIocb9QcVSlutTtubc28n1ukciuqq-wUf3NV3IrNELQL4kfIZ32GuUFd1qflfRTAWO4HN6ZBoYHzXiof7o4enCKrSG-9eWzGqfKveIiMhZrmw7LzemS1szTnPPKpMuXc_dY"
                  />
                  <span className="material-symbols-outlined absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-0.5 text-xs">
                    verified
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  Aanya Sengupta
                </h4>
                <span className="font-meta-mono text-meta-mono text-secondary mt-0.5">
                  Food Anthropologist • 32 Dispatches
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit-sm">
                  Indigenous mountain ferments, hearth ethnography, and historic
                  market lore.
                </p>
                <button className="mt-unit-md w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-all">
                  Follow Field Log
                </button>
              </div>
            </div>
          </section>
          {/* Inspiring Call to Action: Share Your Experience */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-3xl">
            <div className="relative rounded-2xl overflow-hidden bg-primary p-unit-xl md:p-unit-3xl text-on-primary shadow-2xl">
              {/* Background Ambient Vectors / Topo Pattern Subtle Simulation */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      height="120"
                      id="contour"
                      patternunits="userSpaceOnUse"
                      width="120"
                    >
                      <path
                        d="M 0 60 Q 30 30 60 60 T 120 60"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M 0 30 Q 40 10 80 30 T 120 30"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                      ></path>
                      <path
                        d="M 0 90 Q 50 110 90 90 T 120 90"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                      ></path>
                    </pattern>
                  </defs>
                  <rect fill="url(#contour)" height="100%" width="100%"></rect>
                </svg>
              </div>
              {/* Accent Topo Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-unit-xs mb-unit-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                  <span className="font-meta-mono text-meta-mono uppercase tracking-widest text-primary-fixed">
                    Contribute to the Dispatch Archive
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">
                  You've walked paths worth remembering.
                </h2>
                <p className="font-body-lead text-body-lead text-on-primary/80 mt-unit-md mb-unit-xl">
                  Share your field notes, spending ledger, or hidden sanctuary.
                  Help a fellow traveler skip the commercial tourist traps and
                  experience the genuine heartbeat of a place.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-md">
                  <button className="px-unit-xl py-3.5 bg-secondary hover:bg-secondary-container text-on-secondary font-label-md text-label-md rounded-lg shadow-lg transition-all flex items-center justify-center gap-unit-xs group">
                    <span>Publish a Field Dispatch</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      edit_document
                    </span>
                  </button>
                  <div className="flex items-center gap-unit-xs text-on-primary/70 font-meta-mono text-meta-mono">
                    <span className="material-symbols-outlined text-base text-primary-fixed">
                      verified_user
                    </span>
                    <span>Unfiltered &amp; Cost Audited</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-unit-md mt-unit-2xl pt-unit-lg text-on-primary/70 font-meta-mono text-meta-mono">
                  <div>
                    <span className="block text-on-primary font-bold text-sm">
                      Real GPS Pins
                    </span>
                    <span>No vague approximations</span>
                  </div>
                  <div>
                    <span className="block text-on-primary font-bold text-sm">
                      Full Ledger Proof
                    </span>
                    <span>Actual local receipts</span>
                  </div>
                  <div>
                    <span className="block text-on-primary font-bold text-sm">
                      Community Vault
                    </span>
                    <span>Forever ad-free</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Interactive JavaScript Micro-Interactions */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

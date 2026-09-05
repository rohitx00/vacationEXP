import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CreateDispatch() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) navigate("/login");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({ title, location, imageUrl, content }),
      });
      if (res.ok) {
        navigate("/community");
      } else {
        const data = await res.json();
        setError(data.message || "Failed to publish dispatch");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(`Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
          <div className="flex flex-col w-full">
            {/* Workspace Grid */}
            <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-start">
                {/* Main Atelier Canvas (Col 12) */}
                <main className="lg:col-span-12 flex flex-col space-y-unit-2xl">
                  {/* Welcome Greeting */}
                  {error && (
                    <div className="text-error bg-error-container text-on-error-container p-unit-md rounded-xl mt-4">
                      {error}
                    </div>
                  )}
                  <header className="space-y-unit-2xs">
                    <div className="flex items-center gap-2 font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[14px]">
                        edit_note
                      </span>
                      <span>Dispatch Composer • Cartographic Archive</span>
                    </div>
                    <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                      Every journey has a story. Turn yours into a trail.
                    </h1>
                    <p className="font-body-lead text-body-lead text-on-surface-variant max-w-2xl">
                      Share what you discovered, what surprised you, and the
                      unvarnished practical notes another explorer needs before
                      walking in your footsteps.
                    </p>
                  </header>
                  {/* Cinematic Cover Plate Uplink */}
                  <section className="space-y-unit-xs">
                    <div className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md group bg-surface-container">
                      {imageUrl ? (
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-outline-variant">
                          <span className="material-symbols-outlined text-[48px] mb-2 opacity-50">
                            image
                          </span>
                          <span className="font-label-md text-label-md opacity-80 uppercase tracking-widest">
                            No Cover Image
                          </span>
                        </div>
                      )}
                      {imageUrl && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                      )}
                      {/* Top Plate Indicators */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <div className="flex items-center gap-unit-xs pointer-events-auto">
                          {imageUrl && (
                            <button
                              className="bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-error p-1.5 rounded transition-colors"
                              title="Remove Plate"
                              type="button"
                              onClick={() => setImageUrl("")}
                            >
                              <span className="material-symbols-outlined text-[16px] block">
                                delete
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-on-surface-variant px-1 font-meta-mono text-meta-mono mt-2">
                      <span className="flex items-center gap-1 w-full max-w-sm">
                        <span className="material-symbols-outlined text-[14px] text-secondary">
                          pin_drop
                        </span>
                        <input
                          type="text"
                          placeholder="Enter location (e.g. Solang Ridge)..."
                          className="bg-transparent border-b border-dashed border-outline-variant focus:border-primary outline-none text-on-surface-variant w-full placeholder:text-outline-variant"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          required
                        />
                      </span>
                    </div>
                  </section>
                  {/* Headline Input */}
                  <section className="space-y-unit-xs">
                    <label
                      className="font-label-caps text-label-caps text-outline uppercase tracking-wider block"
                      htmlFor="dispatch-title"
                    >
                      Dispatch Master Headline
                    </label>
                    <input
                      className="w-full bg-surface-container-low text-primary font-headline-md text-headline-md p-unit-md rounded-xl outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
                      id="dispatch-title"
                      placeholder="Name your journey dispatch..."
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </section>

                  <section className="space-y-unit-xs mt-4">
                    <label
                      className="font-label-caps text-label-caps text-outline uppercase tracking-wider block"
                      htmlFor="dispatch-image-url"
                    >
                      Cover Image URL
                    </label>
                    <input
                      className="w-full bg-surface-container-low text-primary font-body-md p-unit-sm rounded-lg outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"
                      id="dispatch-image-url"
                      placeholder="Paste an image URL (e.g., https://unsplash.com/...)"
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      required
                    />
                  </section>
                  {/* Editorial Prose Writer Area */}
                  <section className="space-y-unit-md">
                    {/* Distraction-free Editorial Canvas */}
                    <div className="space-y-unit-lg text-body-lead font-body-lead text-on-surface leading-relaxed p-unit-md md:p-unit-lg bg-surface-container-lowest rounded-xl shadow-sm">
                      <textarea
                        required
                        rows={10}
                        placeholder="Start writing your travel story here..."
                        className="w-full bg-transparent outline-none resize-y"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                    </div>

                    {/* Publish Actions */}
                    <div className="flex justify-end items-center gap-unit-md pt-unit-lg">
                      <button
                        onClick={() => navigate("/community")}
                        className="inline-flex items-center gap-1 text-on-surface hover:text-primary px-unit-md py-2 rounded-lg font-label-md text-label-md transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          cancel
                        </span>
                        <span>Cancel</span>
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary px-unit-lg py-2.5 rounded-xl font-label-lg text-label-lg transition-colors shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          publish
                        </span>
                        <span>
                          {loading ? "Publishing..." : "Publish Dispatch"}
                        </span>
                      </button>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </main>
      </form>
      <Footer />
    </div>
  );
}

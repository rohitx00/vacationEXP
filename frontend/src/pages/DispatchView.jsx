import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DispatchView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleLike = async () => {
    if (!userInfo) return navigate("/login");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/${id}/like`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${userInfo.token}` },
        },
      );
      if (res.ok) {
        const data = await res.json();
        setPost((prev) => ({ ...prev, likes: data.likes }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!userInfo) return navigate("/login");
    if (!commentText.trim()) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/posts/${id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({ text: commentText }),
        },
      );
      if (res.ok) {
        const comments = await res.json();
        setPost((prev) => ({ ...prev, comments }));
        setCommentText("");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              Loading Dispatch...
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased">
        <Navbar />
        <div className="w-full pt-20 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-unit-md text-outline text-center">
            <span className="material-symbols-outlined text-[48px]">
              article_shortcut
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary">
              Dispatch not found
            </h2>
            <button
              onClick={() => navigate("/community")}
              className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              Back to Community
            </button>
          </div>
        </div>
      </div>
    );
  }

  const hasLiked = userInfo && post.likes.includes(userInfo._id);
  const publishedDate = new Date(post.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Generate initials for the author avatar
  const initials = post.name
    ? post.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "??";

  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Top Progress & Reading Tracker Bar */}
          <div className="w-full bg-surface-container-low px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg py-unit-xs flex items-center justify-between">
            <div className="flex items-center gap-unit-sm">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-meta-mono text-meta-mono text-on-surface-variant uppercase tracking-wider">
                Field Dispatch • Community Archive
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-unit-md font-meta-mono text-meta-mono text-outline">
              {post.location && <span>{post.location}</span>}
              {post.location && <span>•</span>}
              <span className="text-primary font-bold">{publishedDate}</span>
            </div>
          </div>

          {/* Editorial Hero Section */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg pt-unit-xl pb-unit-2xl">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center justify-between gap-unit-sm mb-unit-md">
              <nav className="flex items-center gap-unit-xs font-meta-mono text-meta-mono uppercase tracking-wider text-outline">
                <button
                  onClick={() => navigate("/community")}
                  className="hover:text-primary transition-colors"
                >
                  Community Dispatches
                </button>
                {post.location && (
                  <>
                    <span>/</span>
                    <span className="text-secondary font-bold">
                      {post.location}
                    </span>
                  </>
                )}
              </nav>
              <div className="bg-tertiary-fixed px-unit-sm py-unit-2xs rounded-full flex items-center gap-unit-xs font-meta-mono text-meta-mono text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[15px] text-secondary">
                  verified
                </span>
                <span>FIELD VERIFIED • {publishedDate.toUpperCase()}</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="max-w-4xl space-y-unit-md mb-unit-xl">
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Action Pills & Metadata Strip */}
            <div className="flex flex-wrap items-center justify-between gap-unit-md pb-unit-lg">
              <div className="flex flex-wrap items-center gap-unit-xs sm:gap-unit-sm">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-unit-xs px-unit-sm py-unit-xs rounded-full font-label-md text-label-md transition-all ${
                    hasLiked
                      ? "bg-secondary-fixed text-on-secondary-fixed"
                      : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[18px] text-secondary"
                    style={{
                      fontVariationSettings: hasLiked ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    favorite
                  </span>
                  <span>{post.likes.length}</span>
                  <span className="text-outline font-meta-mono text-meta-mono">
                    Endorsements
                  </span>
                </button>
                <button className="flex items-center gap-unit-xs bg-surface-container-high hover:bg-surface-container-highest px-unit-sm py-unit-xs rounded-full font-label-md text-label-md text-on-surface transition-all">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    chat_bubble
                  </span>
                  <span>{post.comments.length} Comments</span>
                </button>
              </div>
              <div className="flex items-center gap-unit-md font-meta-mono text-meta-mono text-outline">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    person
                  </span>
                  {post.name}
                </span>
              </div>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative w-full rounded-xl overflow-hidden bg-primary shadow-xl">
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-[520px] md:h-[620px] object-cover"
                />
              ) : (
                <div className="w-full h-[520px] md:h-[620px] flex items-center justify-center bg-surface-container">
                  <span className="material-symbols-outlined text-[80px] text-outline-variant opacity-30">
                    landscape
                  </span>
                </div>
              )}
              {post.imageUrl && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none" />
              )}
              {post.imageUrl && (
                <div className="absolute bottom-0 left-0 right-0 p-unit-md md:p-unit-lg flex items-end justify-between gap-unit-sm text-on-primary">
                  <div className="space-y-unit-2xs max-w-xl">
                    <span className="bg-secondary text-on-secondary font-label-caps text-label-caps px-unit-xs py-0.5 rounded-full inline-block">
                      FIELD DOCUMENT
                    </span>
                  </div>
                  <div className="bg-primary/80 backdrop-blur-md px-unit-md py-unit-xs rounded-lg font-meta-mono text-meta-mono text-surface-tint flex items-center gap-unit-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                    <span>Community Dispatch</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Author & Cartographer Bar */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg mb-unit-2xl">
            <div className="bg-surface-container p-unit-md md:p-unit-lg rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-unit-lg shadow-sm">
              <div className="flex items-center gap-unit-md">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shadow-sm">
                    <span className="font-headline-sm text-on-primary-container text-[22px]">
                      {initials}
                    </span>
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary rounded-full p-0.5">
                    <span className="material-symbols-outlined text-[14px] block">
                      verified
                    </span>
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-unit-xs">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {post.name}
                    </span>
                    <span className="bg-primary-fixed text-on-primary-fixed font-meta-mono text-meta-mono px-unit-xs py-0.5 rounded">
                      Field Correspondent
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Published {publishedDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-unit-sm w-full lg:w-auto justify-start lg:justify-end pt-unit-xs lg:pt-0">
                <button
                  onClick={() => navigate("/community")}
                  className="bg-surface-container-lowest hover:bg-surface-bright text-on-surface px-unit-md py-unit-xs rounded-lg font-label-md text-label-md transition-colors"
                >
                  ← Back to Community
                </button>
                <button
                  onClick={() => navigate("/community/new")}
                  className="bg-primary hover:bg-primary-container text-on-primary px-unit-md py-unit-xs rounded-lg font-label-md text-label-md transition-colors flex items-center gap-unit-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    edit_note
                  </span>
                  Write Dispatch
                </button>
              </div>
            </div>
          </section>

          {/* Narrative Grid (Two Column Editorial) */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg mb-unit-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl">
              {/* Main Long-Form Story (8 Columns) */}
              <article className="lg:col-span-8 space-y-unit-xl">
                <div className="space-y-unit-md">
                  <div className="font-body-lead text-body-lead text-on-surface leading-relaxed whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
              </article>

              {/* Sidebar (4 Columns) */}
              <aside className="lg:col-span-4 space-y-unit-lg">
                {/* Location / Cartographic Block */}
                {post.location && (
                  <div className="bg-surface-container p-unit-lg rounded-xl space-y-unit-md shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                        Cartographic Ledger
                      </span>
                    </div>
                    <div className="space-y-unit-xs">
                      <div className="flex items-center justify-between py-unit-2xs border-b border-outline-variant/30">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Location
                        </span>
                        <span className="font-meta-mono text-meta-mono text-primary font-bold">
                          {post.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-unit-2xs border-b border-outline-variant/30">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Published
                        </span>
                        <span className="font-meta-mono text-meta-mono text-primary font-bold">
                          {publishedDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-unit-2xs">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Author
                        </span>
                        <span className="font-meta-mono text-meta-mono text-primary font-bold">
                          {post.name}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-32 rounded-lg bg-surface-container-high flex flex-col items-center justify-center text-center p-unit-sm">
                      <span className="material-symbols-outlined text-3xl text-primary mb-unit-2xs">
                        pin_drop
                      </span>
                      <span className="font-headline-sm text-[16px] text-primary">
                        {post.location}
                      </span>
                      <span className="font-meta-mono text-meta-mono text-outline text-[11px]">
                        Field Location
                      </span>
                    </div>
                  </div>
                )}

                {/* Engagement Card */}
                <div className="bg-primary text-on-primary p-unit-lg rounded-xl space-y-unit-md shadow-md">
                  <div className="space-y-unit-2xs">
                    <span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider">
                      Dispatch Engagement
                    </span>
                    <h3 className="font-headline-sm text-headline-sm">
                      Field Endorsements
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-unit-sm">
                    <div className="p-unit-sm bg-primary-container rounded-lg text-center">
                      <p className="font-headline-sm text-[24px] text-secondary-fixed font-bold">
                        {post.likes.length}
                      </p>
                      <p className="font-meta-mono text-meta-mono text-on-primary-container uppercase tracking-wider text-[10px]">
                        Endorsements
                      </p>
                    </div>
                    <div className="p-unit-sm bg-primary-container rounded-lg text-center">
                      <p className="font-headline-sm text-[24px] text-on-primary font-bold">
                        {post.comments.length}
                      </p>
                      <p className="font-meta-mono text-meta-mono text-on-primary-container uppercase tracking-wider text-[10px]">
                        Dispatches
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-label-md text-label-md transition-colors ${
                      hasLiked
                        ? "bg-secondary-fixed text-on-secondary-fixed"
                        : "bg-secondary hover:bg-secondary-container text-on-secondary"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-[20px]"
                      style={{
                        fontVariationSettings: hasLiked
                          ? "'FILL' 1"
                          : "'FILL' 0",
                      }}
                    >
                      favorite
                    </span>
                    {hasLiked ? "Endorsed" : "Endorse this Dispatch"}
                  </button>
                </div>
              </aside>
            </div>
          </section>

          {/* Community Conversations */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg mb-unit-3xl">
            <div className="max-w-4xl space-y-unit-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">
                    Field Debrief
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary tracking-tight mt-unit-2xs">
                    Traveler Conversations ({post.comments.length})
                  </h2>
                </div>
                <span className="font-meta-mono text-meta-mono text-outline">
                  Live Moderated
                </span>
              </div>

              {/* Comment Submission Box */}
              <div className="bg-surface-container p-unit-md rounded-xl space-y-unit-sm shadow-sm">
                <div className="flex items-start gap-unit-sm">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary-container text-[20px]">
                      person
                    </span>
                  </div>
                  <div className="flex-1 space-y-unit-xs">
                    <textarea
                      className="w-full p-unit-sm rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 focus:ring-primary font-body-sm text-body-sm"
                      placeholder={
                        userInfo
                          ? "Add a field question, trail update, or local insight..."
                          : "Log in to join the field debrief"
                      }
                      rows={3}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      disabled={!userInfo}
                    />
                    <div className="flex items-center justify-end">
                      <button
                        onClick={handleComment}
                        disabled={!userInfo || !commentText.trim()}
                        className="bg-primary hover:bg-primary-container text-on-primary px-unit-md py-unit-xs rounded-lg font-label-md text-label-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-unit-xs"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          send
                        </span>
                        Submit Field Query →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comment Thread */}
              <div className="space-y-unit-md">
                {post.comments.length === 0 ? (
                  <div className="text-center py-unit-2xl text-outline-variant">
                    <span className="material-symbols-outlined text-[36px] block mb-2 opacity-40">
                      chat_bubble_outline
                    </span>
                    <p className="font-body-sm text-body-sm">
                      No dispatches yet. Be the first to contribute field notes.
                    </p>
                  </div>
                ) : (
                  post.comments.map((c) => {
                    const cInitials = c.name
                      ? c.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)
                      : "??";
                    return (
                      <div
                        key={c._id}
                        className="bg-surface-container-low p-unit-lg rounded-xl space-y-unit-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-unit-sm">
                            <span className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold flex items-center justify-center font-meta-mono text-meta-mono">
                              {cInitials}
                            </span>
                            <div>
                              <span className="font-label-md text-label-md text-on-surface">
                                {c.name}
                              </span>
                              {c.createdAt && (
                                <span className="font-meta-mono text-meta-mono text-outline ml-2">
                                  {new Date(c.createdAt).toLocaleDateString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </section>

          {/* Editorial CTA Section */}
          <section className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg pb-unit-3xl">
            <div className="bg-primary text-on-primary rounded-2xl p-unit-xl md:p-unit-3xl relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-unit-xl">
              <div className="max-w-2xl space-y-unit-sm z-10">
                <div className="flex items-center gap-unit-xs font-meta-mono text-meta-mono text-secondary-fixed uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                  <span>VacationExp Community Contributor Guild</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal tracking-tight">
                  You have walked paths worth remembering.
                </h2>
                <p className="font-body-lead text-body-lead text-inverse-on-surface max-w-xl">
                  Turn your unscripted journey into an audited field dispatch.
                  Help the next mindful explorer experience the world beyond
                  algorithms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-sm z-10 w-full lg:w-auto">
                <button
                  onClick={() => navigate("/community/new")}
                  className="bg-secondary hover:bg-secondary-container text-on-secondary px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md transition-all text-center shadow-md"
                >
                  Publish Your Travel Story →
                </button>
                <button
                  onClick={() => navigate("/community")}
                  className="bg-surface-container-low text-primary hover:bg-surface-bright px-unit-lg py-unit-sm rounded-xl font-label-md text-label-md transition-all text-center"
                >
                  Explore All Dispatches
                </button>
              </div>
              <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-primary-container/40 pointer-events-none blur-2xl"></div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

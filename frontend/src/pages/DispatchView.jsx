import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, MessageCircle } from "lucide-react";

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
      .catch((err) => console.error(err));
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

  if (loading)
    return (
      <div className="min-h-screen p-16 text-center">Loading Dispatch...</div>
    );
  if (!post)
    return (
      <div className="min-h-screen p-16 text-center">Dispatch not found.</div>
    );

  const hasLiked = userInfo && post.likes.includes(userInfo._id);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="w-full h-[60vh] relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white max-w-4xl">
          <div className="flex items-center space-x-2 text-white/80 mb-4 uppercase tracking-widest text-sm">
            <MapPin size={16} />
            <span>{post.location}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-white/90">
            Dispatch by <strong>{post.name}</strong>
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div className="prose prose-lg dark:prose-invert max-w-none font-sans leading-relaxed text-foreground whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Sidebar Actions & Comments */}
        <div className="space-y-8">
          {/* Actions */}
          <div className="bg-card border border-border p-6 rounded-xl flex justify-between items-center shadow-sm">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${hasLiked ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
            >
              <Heart fill={hasLiked ? "currentColor" : "none"} size={24} />
              <span className="font-semibold text-lg">
                {post.likes.length} Likes
              </span>
            </button>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MessageCircle size={24} />
              <span className="font-semibold text-lg">
                {post.comments.length} Comments
              </span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
            <h3 className="font-heading text-xl text-primary mb-6 border-b border-border pb-2">
              Traveler Discussion
            </h3>

            <div className="space-y-6 mb-6">
              {post.comments.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No comments yet. Start the discussion!
                </p>
              ) : (
                post.comments.map((c) => (
                  <div key={c._id} className="space-y-1">
                    <p className="font-semibold text-sm">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                ))
              )}
            </div>

            <form
              onSubmit={handleComment}
              className="mt-4 pt-4 border-t border-border"
            >
              <textarea
                className="w-full border border-border rounded-md p-3 text-sm bg-transparent focus:outline-none focus:border-primary resize-none"
                placeholder={
                  userInfo ? "Add a comment..." : "Log in to comment"
                }
                rows={3}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                disabled={!userInfo}
              />
              <Button
                type="submit"
                disabled={!userInfo || !commentText.trim()}
                className="w-full mt-2"
              >
                Post Comment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePost = () => {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setLoading(true);
    axios
      .post(`${API}/create-post`, formData)
      .then((res) => {
        setLoading(false);
        alert("Post Created Successfully..!");
        navigate("/feed");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error creating Post");
      });
  };

  return (
    <>
      <div
        onClick={() => navigate("/")}
        className="absolute z-20 flex items-center gap-2 cursor-pointer"
        style={{ top: 28, left: 32 }}
      >
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: 34,
            height: 34,
            background: "linear-gradient(135deg, #D2B48C 0%, #8B5E3C 100%)",
            boxShadow: "0 4px 12px -4px rgba(139,94,60,0.55)",
          }}
          aria-hidden="true"
        >
          <span style={{ fontSize: 15, transform: "rotate(-8deg)" }}>📌</span>
        </span>

        <span
          style={{
            fontFamily: "'Fraunces', 'Georgia', serif",
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: "-0.01em",
            color: "#3A2A1D",
          }}
        >
          SnapPost
        </span>
      </div>
      <section className="create-post-section min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-amber-200 p-6 sm:p-8"
        >
          <h2 className="text-3xl font-bold text-center text-stone-700">
            Create Post
          </h2>
          <p className="text-center text-stone-500 mt-2 mb-8">
            Share your thoughts with everyone 🤎
          </p>
          <div className="mb-5">
            <label className="block mb-2 text-stone-700 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full cursor-pointer rounded-xl border border-amber-300 bg-amber-50
          file:mr-4
          file:px-4
          file:py-2
          file:rounded-lg
          file:border-0
          file:bg-amber-900
          file:text-white
          file:cursor-pointer
          hover:file:bg-amber-800"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-stone-700 font-medium ">
              Caption
            </label>

            <input
              type="text"
              name="caption"
              placeholder="What's on your mind..."
              className="w-full rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 outline-none resize-none
          focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            ></input>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-700 hover:bg-amber-800 transition-all duration-300 text-white font-semibold py-3 shadow-lg hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #D2B48C 0%, #8B5E3C 100%)",
              color: "#FFF6EC",
              boxShadow: "0 8px 24px -8px rgba(139,94,60,0.55)",
              outlineColor: "#8B5E3C",
            }}
          >
            {loading ? "Creating Post...Wait few Seconds.." : "Create Post"}
          </button>
        </form>

        {/* Nav buttons, styled to match the amber/stone theme above */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={() => {
              navigate("/");
            }}
            type="button"
            className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: "linear-gradient(135deg, #D2B48C 0%, #8B5E3C 100%)",
              color: "#FFF6EC",
              boxShadow: "0 8px 24px -8px rgba(139,94,60,0.55)",
              outlineColor: "#8B5E3C",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 14px 32px -8px rgba(139,94,60,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 8px 24px -8px rgba(139,94,60,0.55)";
            }}
          >
            <span className="text-[16px] leading-none" aria-hidden="true">
              🏠
            </span>
            Go to Home
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              navigate("/feed");
            }}
            type="button"
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-medium border transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: "rgba(139,94,60,0.05)",
              borderColor: "rgba(139,94,60,0.22)",
              color: "#3A2A1D",
              backdropFilter: "blur(6px)",
              outlineColor: "#8B5E3C",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(139,94,60,0.10)";
              e.currentTarget.style.borderColor = "rgba(139,94,60,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(139,94,60,0.05)";
              e.currentTarget.style.borderColor = "rgba(139,94,60,0.22)";
            }}
          >
            <span className="text-[16px] leading-none" aria-hidden="true">
              📖
            </span>
            Explore Feed
          </button>
        </div>
      </section>
    </>
  );
};

export default CreatePost;

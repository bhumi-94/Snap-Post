import React, { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import axios  from "axios"
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;
const Feed = () => {

  
    const navigate = useNavigate();
    const galleryId = crypto.randomUUID();
    const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this post?"
  );

  if (!confirmDelete) return;

  try {
   await axios.delete(`${API}/delete-post/${id}`);
    // Remove deleted post from state
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));

    alert("Post deleted successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to delete post.");
  }
};
  const [posts, setPosts] = useState([
    // {
    //   _id: "1",
    //   image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    //   caption: "beautifull",
    // },
  ])

  useEffect(()=>{
    axios.get(`${API}/posts`)
    .then((res) => {
        setPosts(res.data.posts)
    })
  } , [])


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
      <section className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-8 py-6 md:py-10 mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-stone-700 mb-6 md:mb-10">
          Explore Posts 🤎
        </h1>

        {posts.length > 0 ? (
          <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-4
                sm:gap-6
                lg:gap-8
            "
          >
            {posts.map((post) => (
              <div
  key={post._id}
  className="relative bg-white/90 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
>
  {/* Delete Button */}
  <button
    onClick={() => handleDelete(post._id)}
    className="absolute top-3 right-3 z-10 bg-white/40 p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
  >
    <MdDelete size={20}  color="#D2B48C"/>
  </button>

  <div className="overflow-hidden">
    <img
      src={post.image}
      alt={post.caption}
      className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div className="p-3 sm:p-4">
    <p className="text-stone-700 text-sm sm:text-base line-clamp-2">
      {post.caption}
    </p>
  </div>
</div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-stone-700 text-center">
              No Posts Available 📷
            </h2>
          </div>
        )}
      </section>

      {/*buttons */}
<div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-10">
  {/* Primary CTA */}
  <button
    onClick={() => navigate("/")}
    type="button"
    className="group relative inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
    <span className="text-[16px]" aria-hidden="true">
      🏠
    </span>
    Go to Home
  </button>

  {/* Secondary CTA */}
  <button
    onClick={() => navigate("/create-post")}
    type="button"
    className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-medium border transition-all duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
    <span className="text-[16px]" aria-hidden="true">
      ✍️
    </span>
    Create Posts
  </button>
</div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glyphIn {
          from { opacity: 0; transform: translate(-50%, 8px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.6; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.35; }
          50%      { transform: translateY(-16px) translateX(6px); opacity: 0.8; }
        }
        @keyframes pinFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(30px, 20px) scale(1.08); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%      { transform: translate(-24px, -18px) scale(1.06); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50%      { transform: translate(-50%, -24px) scale(1.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* <section className="max-w-7xl mx-auto px-4 py-8">

    <h1 className="text-4xl font-bold text-center text-stone-700 mb-10">
        Explore Posts 🤎
    </h1>

    {
        posts.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {
                    posts.map((post) => (

                        <div
                            key={post._id}
                            className="bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >

                            <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full aspect-square object-cover hover:scale-105 transition duration-500"
                            />

                            <div className="p-4">

                                <p className="text-stone-700 text-sm line-clamp-2">
                                    {post.caption}
                                </p>

                            </div>

                        </div>

                    ))
                }

            </div>

        ) : (

            <div className="flex justify-center items-center h-[50vh]">

                <h2 className="text-3xl font-semibold text-stone-700">
                    No Posts Available 📷
                </h2>

            </div>

        )
    }

</section> */}
      {/* <section className='feed-section'>
        <h1>Feeds</h1>

        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id}
                    className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>

                    </div>
                ))
            ) :( <h1>No Post Available </h1>)
        }

    </section>
     */}
    </>
  );
};

export default Feed;

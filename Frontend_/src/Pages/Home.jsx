import React, { use, useMemo } from "react";
import { useNavigate } from "react-router-dom";

/**
 * HomePage — Hero for a blogging / story-sharing app.
 *
 * Design tokens (kept local to this file so it can be dropped into any app
 * and still carry its own identity — but every color/type value below is
 * meant to be the single source of truth other pages in the app should
 * reuse):
 *
 *   bg base:        #FFF6EC → #F3DFC8   (warm cream, soft vertical drift)
 *   accent tan:      #D2B48C
 *   accent espresso: #8B5E3C
 *   accent clay:     #B8804F   (used sparingly — warmth, not a second primary)
 *   text primary:    #3A2A1D   (espresso ink, not pure black)
 *   text secondary:  #8A6F52   (muted tan-brown)
 *   surface/border:  rgba(139,94,60,.14)
 *
 *   display face:   'Fraunces'  — editorial serif, used for headline + pins
 *   body/ui face:   'Inter'     — everything else
 */

const PINS = [
  { top: "14%", left: "9%", w: 78, h: 100, rot: -9, tone: "#D2B48C", delay: "0s" },
  { top: "62%", left: "6%", w: 64, h: 84, rot: 6, tone: "#8B5E3C", delay: "0.6s" },
  { top: "20%", left: "86%", w: 70, h: 92, rot: 8, tone: "#B8804F", delay: "1.1s" },
  { top: "68%", left: "89%", w: 58, h: 76, rot: -7, tone: "#D2B48C", delay: "0.3s" },
  { top: "8%", left: "46%", w: 46, h: 60, rot: 4, tone: "#8B5E3C", delay: "1.6s" },
  { top: "84%", left: "44%", w: 52, h: 68, rot: -5, tone: "#B8804F", delay: "0.9s" },
];

const PARTICLES = [
  { top: "18%", left: "22%", size: 3, delay: "0s", dur: "9s" },
  { top: "72%", left: "18%", size: 2, delay: "1.2s", dur: "11s" },
  { top: "28%", left: "78%", size: 2, delay: "2.1s", dur: "10s" },
  { top: "64%", left: "82%", size: 3, delay: "0.6s", dur: "8s" },
  { top: "10%", left: "58%", size: 2, delay: "3s", dur: "12s" },
  { top: "88%", left: "40%", size: 2, delay: "1.8s", dur: "9.5s" },
  { top: "45%", left: "12%", size: 2, delay: "2.6s", dur: "10.5s" },
  { top: "50%", left: "90%", size: 2, delay: "0.3s", dur: "11.5s" },
];

export default function Home() {
  const pins = useMemo(() => PINS, []);
  const particles = useMemo(() => PARTICLES, []);
  const navigate = useNavigate()

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, #FFFAF3 0%, #FFF6EC 45%, #F3DFC8 100%)",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* ---------------- Logo ---------------- */}
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

      {/* ---------------- Ambient background ---------------- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft warm glows */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 620,
            height: 620,
            top: "-14%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(210,180,140,0.35) 0%, rgba(210,180,140,0) 70%)",
            animation: "drift1 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 560,
            height: 560,
            bottom: "-16%",
            right: "-8%",
            background:
              "radial-gradient(circle, rgba(139,94,60,0.22) 0%, rgba(139,94,60,0) 70%)",
            animation: "drift2 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 420,
            height: 420,
            top: "38%",
            left: "58%",
            background:
              "radial-gradient(circle, rgba(184,128,79,0.16) 0%, rgba(184,128,79,0) 70%)",
            animation: "drift3 26s ease-in-out infinite",
          }}
        />

        {/* Fine grain vignette to keep it premium, not flat */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 45%, rgba(139,94,60,0.10) 100%)",
          }}
        />

        {/* Pinterest-style floating "pin" cards */}
        {pins.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: p.top,
              left: p.left,
              width: p.w,
              height: p.h,
              transform: `rotate(${p.rot}deg)`,
            }}
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(160deg, ${p.tone}55 0%, ${p.tone}22 100%)`,
                border: "1px solid rgba(139,94,60,0.18)",
                boxShadow: "0 16px 32px -16px rgba(139,94,60,0.35)",
                animation: `pinFloat 7s ease-in-out ${p.delay} infinite`,
              }}
            />
          </div>
        ))}

        {/* Floating dust particles */}
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: "rgba(139,94,60,0.45)",
              animation: `floatY ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ---------------- Signature mark: giant quote glyph ---------------- */}
      <div
        aria-hidden="true"
        className="absolute select-none pointer-events-none"
        style={{
          top: "12%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Fraunces', 'Georgia', serif",
          fontSize: "clamp(140px, 22vw, 260px)",
          lineHeight: 1,
          color: "transparent",
          background:
            "linear-gradient(180deg, rgba(139,94,60,0.20), rgba(139,94,60,0.02))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          fontWeight: 600,
          animation: "glyphIn 1.6s ease-out forwards, breathe 6s ease-in-out 1.6s infinite",
          opacity: 0,
        }}
      >
        &ldquo;
      </div>

      {/* ---------------- Hero content ---------------- */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-8 py-24">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.15]"
          style={{
            fontFamily: "'Fraunces', 'Georgia', serif",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            opacity: 0,
            animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.15s forwards",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, #3A2A1D 20%, #8B5E3C 55%, #B8804F 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Every story begins with a single thought.
          </span>
          <br />
          <span style={{ color: "#3A2A1D" }}>Keep every thought in your own space.</span>
        </h1>

        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{
            color: "#8A6F52",
            opacity: 0,
            animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.5s forwards",
          }}
        >
          Express your ideas, capture meaningful moments, 
          and build a personal collection of memories. 
          Create posts effortlessly, 
          preserve the stories that reflect your journey, 
          and revisit your collection anytime.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          style={{
            opacity: 0,
            animation: "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.85s forwards",
          }}
        >
          {/* Primary CTA */}
          <button
          onClick={()=>{navigate("/create-post")}}
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
              ✍️
            </span>
            Create Post
          </button>

          {/* Secondary CTA */}
          <button
          onClick={()=>{navigate("/feed")}}
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
    </div>
  );
}

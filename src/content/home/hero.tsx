import { Link } from "react-router-dom";

const Hero = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Epilogue:wght@300;400;500;600&display=swap');

      .hero-section {
        width: 100%;
        min-height: 100vh;
        background: #f4f1ec;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
        padding: 80px 24px;
      }

      /* Background atmosphere */
      .hero-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 60% 60% at 80% 20%, rgba(99,102,241,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 10% 80%, rgba(14,165,233,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 70% 40% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%);
        pointer-events: none;
      }

      /* Floating shapes */
      .h-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .h-ring-1 {
        width: 500px; height: 500px;
        border-radius: 50%;
        border: 1.5px solid rgba(99,102,241,0.08);
        top: -160px; right: -100px;
        animation: h-spin 60s linear infinite;
      }
      .h-ring-2 {
        width: 300px; height: 300px;
        border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.1);
        bottom: -80px; left: -60px;
        animation: h-spin 45s linear infinite reverse;
      }
      .h-ring-3 {
        width: 180px; height: 180px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.07);
        top: 40%; left: 48%;
        animation: h-spin 35s linear infinite;
      }
      .h-dots-1 {
        width: 200px; height: 200px;
        top: 60px; left: 45%;
        background-image: radial-gradient(circle, rgba(99,102,241,0.13) 1.5px, transparent 1.5px);
        background-size: 20px 20px;
        opacity: 0.7;
      }
      .h-dots-2 {
        width: 140px; height: 140px;
        bottom: 80px; right: 60px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.12) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }

      @keyframes h-spin { to { transform: rotate(360deg); } }

      /* Inner layout */
      .hero-inner {
        position: relative;
        z-index: 10;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }

      /* Left content */
      .hero-content { display: flex; flex-direction: column; }

      .hero-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 14px;
        border-radius: 999px;
        border: 1px solid rgba(99,102,241,0.2);
        background: rgba(99,102,241,0.06);
        font-size: 11.5px;
        font-weight: 600;
        color: #6366f1;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        margin-bottom: 28px;
        width: fit-content;
        animation: h-fade-up 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both;
      }
      .hero-eyebrow-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #6366f1;
        animation: h-pulse 2s ease-in-out infinite;
      }
      @keyframes h-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.7); }
      }

      .hero-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.6rem, 4.5vw, 3.8rem);
        font-weight: 900;
        line-height: 1.07;
        color: #111827;
        margin: 0 0 24px;
        animation: h-fade-up 0.6s 0.2s cubic-bezier(0.16,1,0.3,1) both;
      }
      .hero-title-accent {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-desc {
        font-size: 16px;
        color: #6b7280;
        line-height: 1.8;
        max-width: 460px;
        margin: 0 0 36px;
        font-weight: 400;
        animation: h-fade-up 0.6s 0.3s cubic-bezier(0.16,1,0.3,1) both;
      }

      /* CTA buttons */
      .hero-ctas {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 44px;
        animation: h-fade-up 0.6s 0.4s cubic-bezier(0.16,1,0.3,1) both;
      }

      .btn-primary {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0 28px;
        height: 52px;
        border-radius: 16px;
        background: linear-gradient(135deg, #6366f1 0%, #4f46e5 40%, #0ea5e9 100%);
        color: #fff;
        font-family: 'Epilogue', sans-serif;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        box-shadow: 0 8px 24px rgba(99,102,241,0.35);
        overflow: hidden;
        transition: transform 0.15s, box-shadow 0.2s;
      }
      .btn-primary::before {
        content: '';
        position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%);
      }
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 32px rgba(99,102,241,0.4);
      }

      .btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0 28px;
        height: 52px;
        border-radius: 16px;
        border: 1.5px solid #e5e7eb;
        background: #fff;
        color: #374151;
        font-family: 'Epilogue', sans-serif;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        transition: border-color 0.2s, background 0.2s, transform 0.15s;
      }
      .btn-ghost:hover {
        border-color: #6366f1;
        background: rgba(99,102,241,0.04);
        transform: translateY(-2px);
      }

      /* Feature badges */
      .hero-badges {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        animation: h-fade-up 0.6s 0.5s cubic-bezier(0.16,1,0.3,1) both;
      }
      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        font-size: 12px;
        font-weight: 500;
        color: #6b7280;
        background: #fff;
        border: 1px solid #e5e7eb;
        padding: 7px 14px;
        border-radius: 999px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .hero-badge:hover {
        border-color: rgba(99,102,241,0.3);
        box-shadow: 0 4px 12px rgba(99,102,241,0.08);
      }
      .badge-icon { font-size: 14px; }

      /* Right: image + stat cards */
      .hero-visual {
        position: relative;
        animation: h-fade-up 0.7s 0.35s cubic-bezier(0.16,1,0.3,1) both;
      }

      .hero-img-wrap {
        position: relative;
        border-radius: 28px;
        overflow: hidden;
        box-shadow:
          0 4px 8px rgba(0,0,0,0.06),
          0 20px 60px rgba(99,102,241,0.12),
          0 60px 100px rgba(0,0,0,0.1);
        aspect-ratio: 4/3;
      }
      .hero-img-wrap img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }
      .hero-img-wrap:hover img { transform: scale(1.03); }

      /* Image overlay gradient */
      .hero-img-wrap::after {
        content: '';
        position: absolute; inset: 0;
        background: linear-gradient(
          160deg,
          transparent 40%,
          rgba(99,102,241,0.15) 100%
        );
        pointer-events: none;
      }

      /* Floating stat cards */
      .stat-card {
        position: absolute;
        background: #fff;
        border-radius: 18px;
        padding: 14px 20px;
        box-shadow:
          0 4px 16px rgba(0,0,0,0.08),
          0 1px 3px rgba(0,0,0,0.04);
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 160px;
      }
      .stat-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        display: flex; align-items: center; justify-content: center;
        font-size: 18px;
        flex-shrink: 0;
      }
      .stat-icon-blue { background: rgba(99,102,241,0.1); }
      .stat-icon-cyan { background: rgba(14,165,233,0.1); }
      .stat-text-val {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 800;
        color: #111827;
        line-height: 1;
      }
      .stat-text-label {
        font-size: 11px;
        color: #9ca3af;
        font-weight: 500;
        margin-top: 3px;
        white-space: nowrap;
      }

      .stat-card-1 {
        bottom: -20px;
        left: -28px;
        animation: h-float 4s ease-in-out infinite;
      }
      .stat-card-2 {
        top: -20px;
        right: -20px;
        animation: h-float 4s ease-in-out infinite 1.5s;
      }

      @keyframes h-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }

      @keyframes h-fade-up {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      /* Accent shimmer bar at very top */
      .hero-top-bar {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%;
        animation: h-shimmer 3s ease infinite;
      }
      @keyframes h-shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      @media (max-width: 768px) {
        .hero-inner {
          grid-template-columns: 1fr;
          gap: 48px;
          text-align: center;
        }
        .hero-eyebrow { margin-left: auto; margin-right: auto; }
        .hero-desc { margin-left: auto; margin-right: auto; }
        .hero-ctas { justify-content: center; }
        .hero-badges { justify-content: center; }
        .stat-card-1 { left: 10px; bottom: -16px; }
        .stat-card-2 { right: 10px; top: -16px; }
      }
    `}</style>

    <section className="hero-section">
      <div className="hero-top-bar" />

      {/* Background shapes */}
      <div className="h-shape h-ring-1" />
      <div className="h-shape h-ring-2" />
      <div className="h-shape h-ring-3" />
      <div className="h-shape h-dots-1" />
      <div className="h-shape h-dots-2" />

      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Logistics Management Platform
          </div>

          <h1 className="hero-title">
            Smart Dispatching.<br />
            <span className="hero-title-accent">Stronger Deliveries.</span>
          </h1>

          <p className="hero-desc">
            A complete logistics and dispatch management system to manage trucks,
            drivers, loads, tracking, POD, payments and more — all in one place.
          </p>

          <div className="hero-ctas">
            <Link to="/register" className="btn-primary">
              Get Started →
            </Link>
            <Link to="/about" className="btn-ghost">
              Learn More
            </Link>
          </div>

          <div className="hero-badges">
            {[
              { icon: "📍", label: "Real-time Tracking" },
              { icon: "⚡", label: "Smart Dispatch" },
              { icon: "🔒", label: "Secure & Reliable" },
              { icon: "🕐", label: "24/7 Support" },
            ].map((b) => (
              <div key={b.label} className="hero-badge">
                <span className="badge-icon">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop"
              alt="Truck on highway"
            />
          </div>

          {/* Floating stat cards */}
          <div className="stat-card stat-card-1">
            <div className="stat-icon stat-icon-blue">🚛</div>
            <div>
              <div className="stat-text-val">2,400+</div>
              <div className="stat-text-label">Active Trucks</div>
            </div>
          </div>

          <div className="stat-card stat-card-2">
            <div className="stat-icon stat-icon-cyan">📦</div>
            <div>
              <div className="stat-text-val">98.6%</div>
              <div className="stat-text-label">On-time Deliveries</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Hero;
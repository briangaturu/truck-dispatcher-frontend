import { Link } from "react-router-dom";

const CTA = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Epilogue:wght@300;400;500;600&display=swap');

      .cta-section {
        width: 100%;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
        background: #0f0c29;
        background: linear-gradient(160deg, #1e1b4b 0%, #1e3a5f 50%, #0c2340 100%);
      }

      /* Atmosphere */
      .cta-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 60% 60% at 15% 30%, rgba(99,102,241,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 85% 70%, rgba(14,165,233,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(79,70,229,0.1) 0%, transparent 70%);
        pointer-events: none;
      }

      /* Shapes */
      .cta-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .cta-ring-1 {
        width: 500px; height: 500px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.05);
        top: -180px; right: -120px;
        animation: cta-spin 60s linear infinite;
      }
      .cta-ring-2 {
        width: 320px; height: 320px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.15);
        bottom: -100px; left: -80px;
        animation: cta-spin 45s linear infinite reverse;
      }
      .cta-ring-3 {
        width: 180px; height: 180px;
        border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.12);
        top: 30%; left: 8%;
        animation: cta-spin 35s linear infinite;
      }
      .cta-dots-1 {
        width: 180px; height: 180px;
        top: 40px; left: 60px;
        background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px);
        background-size: 20px 20px;
      }
      .cta-dots-2 {
        width: 140px; height: 140px;
        bottom: 40px; right: 60px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.15) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
      }
      @keyframes cta-spin { to { transform: rotate(360deg); } }

      /* Shimmer top bar */
      .cta-top-bar {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%;
        animation: cta-shimmer 3s ease infinite;
      }
      @keyframes cta-shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* Inner */
      .cta-inner {
        position: relative;
        z-index: 10;
        max-width: 780px;
        margin: 0 auto;
        text-align: center;
      }

      .cta-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 5px 14px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.12);
        background: rgba(255,255,255,0.06);
        font-size: 11px;
        font-weight: 600;
        color: rgba(165,180,252,0.9);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 24px;
      }
      .cta-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #a5b4fc;
        animation: cta-pulse 2s ease-in-out infinite;
      }
      @keyframes cta-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }

      .cta-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 4vw, 3.2rem);
        font-weight: 900;
        color: #fff;
        line-height: 1.1;
        margin: 0 0 20px;
      }
      .cta-title-accent {
        background: linear-gradient(135deg, #a5b4fc, #38bdf8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .cta-desc {
        font-size: 15.5px;
        color: rgba(255,255,255,0.55);
        line-height: 1.8;
        max-width: 520px;
        margin: 0 auto 48px;
        font-weight: 400;
      }

      /* Stats */
      .cta-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        margin-bottom: 48px;
      }
      .cta-stat {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 20px;
        padding: 22px 16px;
        backdrop-filter: blur(12px);
        transition: background 0.2s, border-color 0.2s, transform 0.2s;
      }
      .cta-stat:hover {
        background: rgba(255,255,255,0.08);
        border-color: rgba(99,102,241,0.3);
        transform: translateY(-4px);
      }
      .cta-stat-val {
        font-family: 'Playfair Display', serif;
        font-size: 26px;
        font-weight: 800;
        color: #fff;
        line-height: 1;
        margin-bottom: 6px;
      }
      .cta-stat-label {
        font-size: 11.5px;
        color: rgba(255,255,255,0.4);
        font-weight: 500;
        letter-spacing: 0.03em;
      }

      /* Divider */
      .cta-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        margin-bottom: 40px;
      }

      /* Buttons */
      .cta-btns {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
      }

      .cta-btn-primary {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0 32px;
        height: 54px;
        border-radius: 16px;
        background: #fff;
        color: #4f46e5;
        font-family: 'Epilogue', sans-serif;
        font-size: 15px;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 8px 28px rgba(0,0,0,0.25);
        overflow: hidden;
        transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
      }
      .cta-btn-primary::before {
        content: '';
        position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, transparent 60%);
      }
      .cta-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 36px rgba(0,0,0,0.3);
        background: #f5f3ff;
      }

      .cta-btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 0 32px;
        height: 54px;
        border-radius: 16px;
        border: 1.5px solid rgba(255,255,255,0.15);
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.85);
        font-family: 'Epilogue', sans-serif;
        font-size: 15px;
        font-weight: 600;
        text-decoration: none;
        backdrop-filter: blur(8px);
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
      }
      .cta-btn-ghost:hover {
        background: rgba(255,255,255,0.1);
        border-color: rgba(255,255,255,0.25);
        transform: translateY(-2px);
      }

      /* Trust note */
      .cta-trust {
        margin-top: 28px;
        font-size: 12px;
        color: rgba(255,255,255,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .cta-trust-sep { opacity: 0.4; }

      @media (max-width: 640px) {
        .cta-stats { grid-template-columns: repeat(2, 1fr); }
        .cta-section { padding: 72px 20px; }
        .cta-btns { flex-direction: column; }
        .cta-btn-primary, .cta-btn-ghost { width: 100%; justify-content: center; }
      }
    `}</style>

    <section className="cta-section">
      <div className="cta-top-bar" />
      <div className="cta-shape cta-ring-1" />
      <div className="cta-shape cta-ring-2" />
      <div className="cta-shape cta-ring-3" />
      <div className="cta-shape cta-dots-1" />
      <div className="cta-shape cta-dots-2" />

      <div className="cta-inner">
        <div className="cta-eyebrow">
          <span className="cta-eyebrow-dot" />
          Get Started Today
        </div>

        <h2 className="cta-title">
          Ready to Transform<br />
          <span className="cta-title-accent">Your Logistics?</span>
        </h2>

        <p className="cta-desc">
          Join hundreds of transport companies already using Truck Dispatcher
          to manage loads, drivers, trucks, payments, and real-time shipment tracking.
        </p>

        <div className="cta-stats">
          {[
            { value: "128+", label: "Total Loads" },
            { value: "74+", label: "Active Drivers" },
            { value: "48+", label: "Trucks Managed" },
            { value: "98%", label: "On-time Delivery" },
          ].map((s) => (
            <div key={s.label} className="cta-stat">
              <div className="cta-stat-val">{s.value}</div>
              <div className="cta-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="cta-divider" />

        <div className="cta-btns">
          <Link to="/register" className="cta-btn-primary">
            Start Free Trial →
          </Link>
          <Link to="/contact" className="cta-btn-ghost">
            Contact Sales
          </Link>
        </div>

        <div className="cta-trust">
          <span>🔒 No credit card required</span>
          <span className="cta-trust-sep">·</span>
          <span>Free 14-day trial</span>
          <span className="cta-trust-sep">·</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  </>
);

export default CTA;
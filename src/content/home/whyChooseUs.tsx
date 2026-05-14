const stats = [
  { value: "128+", label: "Total Loads", icon: "📦" },
  { value: "74+", label: "Active Drivers", icon: "👤" },
  { value: "48+", label: "Trucks Managed", icon: "🚛" },
  { value: "98%", label: "On-time Delivery", icon: "⚡" },
];

const reasons = [
  "All-in-one logistics solution built for scale",
  "Real-time visibility and live shipment tracking",
  "Trusted by logistics professionals across Kenya",
  "Intuitive interface — powerful under the hood",
];

const WhyChooseUs = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

      .wcu-section {
        width: 100%;
        background: #f4f1ec;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      .wcu-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 55% 50% at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 45% 50% at 100% 50%, rgba(14,165,233,0.05) 0%, transparent 60%);
        pointer-events: none;
      }

      .wcu-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .wcu-ring {
        width: 340px; height: 340px;
        border-radius: 50%;
        border: 1.5px solid rgba(99,102,241,0.08);
        bottom: -100px; left: -80px;
        animation: wcu-spin 55s linear infinite;
      }
      .wcu-ring-2 {
        width: 200px; height: 200px;
        border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.08);
        top: -60px; right: 120px;
        animation: wcu-spin 40s linear infinite reverse;
      }
      .wcu-dots {
        width: 160px; height: 160px;
        top: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
        opacity: 0.55;
      }
      @keyframes wcu-spin { to { transform: rotate(360deg); } }

      .wcu-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 72px;
        align-items: center;
      }

      /* LEFT visual */
      .wcu-visual { position: relative; }

      .wcu-img-wrap {
        border-radius: 28px;
        overflow: hidden;
        box-shadow:
          0 4px 8px rgba(0,0,0,0.06),
          0 20px 60px rgba(99,102,241,0.1),
          0 60px 100px rgba(0,0,0,0.08);
        aspect-ratio: 4/3;
      }
      .wcu-img-wrap img {
        width: 100%; height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }
      .wcu-img-wrap:hover img { transform: scale(1.04); }
      .wcu-img-wrap::after {
        content: '';
        position: absolute; inset: 0;
        background: linear-gradient(160deg, transparent 45%, rgba(99,102,241,0.12) 100%);
        pointer-events: none;
      }

      /* Floating badge on image */
      .wcu-img-badge {
        position: absolute;
        bottom: -18px;
        right: -18px;
        background: #fff;
        border-radius: 20px;
        padding: 16px 22px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 190px;
        animation: wcu-float 4s ease-in-out infinite;
      }
      @keyframes wcu-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-7px); }
      }
      .wcu-badge-icon {
        width: 42px; height: 42px;
        border-radius: 13px;
        background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(14,165,233,0.08));
        border: 1px solid rgba(99,102,241,0.12);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        flex-shrink: 0;
      }
      .wcu-badge-val {
        font-family: 'Playfair Display', serif;
        font-size: 20px;
        font-weight: 800;
        color: #111827;
        line-height: 1;
      }
      .wcu-badge-label {
        font-size: 11px;
        color: #9ca3af;
        font-weight: 500;
        margin-top: 3px;
      }

      /* Shimmer accent on top of image */
      .wcu-img-accent {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        border-radius: 28px 28px 0 0;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%;
        animation: wcu-shimmer 3s ease infinite;
      }
      @keyframes wcu-shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      /* RIGHT content */
      .wcu-content {}

      .wcu-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 5px 14px;
        border-radius: 999px;
        border: 1px solid rgba(99,102,241,0.2);
        background: rgba(99,102,241,0.06);
        font-size: 11px;
        font-weight: 600;
        color: #6366f1;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      .wcu-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #6366f1;
        animation: wcu-pulse 2s ease-in-out infinite;
      }
      @keyframes wcu-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }

      .wcu-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        font-weight: 800;
        color: #111827;
        line-height: 1.15;
        margin: 0 0 32px;
      }
      .wcu-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Stat grid */
      .wcu-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 36px;
      }
      .wcu-stat {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 20px;
        padding: 20px 18px;
        display: flex;
        align-items: center;
        gap: 14px;
        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      }
      .wcu-stat:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.15);
      }
      .wcu-stat-icon {
        width: 44px; height: 44px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.07));
        border: 1px solid rgba(99,102,241,0.1);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        flex-shrink: 0;
      }
      .wcu-stat-val {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 800;
        color: #111827;
        line-height: 1;
      }
      .wcu-stat-label {
        font-size: 11.5px;
        color: #9ca3af;
        font-weight: 500;
        margin-top: 4px;
      }

      /* Reasons list */
      .wcu-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, #e5e7eb 30%, #e5e7eb 70%, transparent);
        margin-bottom: 28px;
      }

      .wcu-reasons {
        display: flex;
        flex-direction: column;
        gap: 14px;
        list-style: none;
        margin: 0; padding: 0;
      }
      .wcu-reason {
        display: flex;
        align-items: center;
        gap: 14px;
        font-size: 14px;
        color: #374151;
        font-weight: 400;
      }
      .wcu-check {
        width: 26px; height: 26px;
        border-radius: 8px;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
        color: #fff;
        font-weight: 700;
        flex-shrink: 0;
        box-shadow: 0 4px 10px rgba(99,102,241,0.3);
      }

      @media (max-width: 860px) {
        .wcu-inner { grid-template-columns: 1fr; gap: 48px; }
        .wcu-visual { display: none; }
      }
      @media (max-width: 480px) {
        .wcu-section { padding: 72px 20px; }
        .wcu-stats { grid-template-columns: 1fr 1fr; gap: 10px; }
      }
    `}</style>

    <section className="wcu-section">
      <div className="wcu-shape wcu-ring" />
      <div className="wcu-shape wcu-ring-2" />
      <div className="wcu-shape wcu-dots" />

      <div className="wcu-inner">

        {/* LEFT */}
        <div className="wcu-visual">
          <div className="wcu-img-wrap" style={{ position: 'relative' }}>
            <div className="wcu-img-accent" />
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&auto=format&fit=crop"
              alt="Mountains and truck"
            />
          </div>

          <div className="wcu-img-badge">
            <div className="wcu-badge-icon">🏆</div>
            <div>
              <div className="wcu-badge-val">#1 Rated</div>
              <div className="wcu-badge-label">Logistics Platform</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="wcu-content">
          <div className="wcu-eyebrow">
            <span className="wcu-eyebrow-dot" />
            Why Choose Us
          </div>

          <h2 className="wcu-title">
            Built for Logistics.<br />
            <span>Designed to Deliver.</span>
          </h2>

          <div className="wcu-stats">
            {stats.map((s) => (
              <div key={s.label} className="wcu-stat">
                <div className="wcu-stat-icon">{s.icon}</div>
                <div>
                  <div className="wcu-stat-val">{s.value}</div>
                  <div className="wcu-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="wcu-divider" />

          <ul className="wcu-reasons">
            {reasons.map((r) => (
              <li key={r} className="wcu-reason">
                <span className="wcu-check">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default WhyChooseUs;
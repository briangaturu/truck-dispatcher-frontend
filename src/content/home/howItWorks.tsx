const features = [
  { icon: "📦", title: "Load Management", desc: "Create, assign and manage loads efficiently across your entire fleet.", accent: "#6366f1" },
  { icon: "👤", title: "Driver Management", desc: "Manage drivers, documents, licenses and performance all in one place.", accent: "#0ea5e9" },
  { icon: "🚛", title: "Truck Management", desc: "Track trucks, schedule maintenance and monitor availability in real-time.", accent: "#6366f1" },
  { icon: "📍", title: "Real-time Tracking", desc: "Track every shipment live on an interactive map with full visibility.", accent: "#0ea5e9" },
  { icon: "📄", title: "POD & Documents", desc: "Capture proof of delivery digitally and manage all your paperwork.", accent: "#6366f1" },
  { icon: "💳", title: "Payments & Invoices", desc: "Generate invoices, reconcile payments and keep your finances in order.", accent: "#0ea5e9" },
];

const HowItWorks = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

      .hiw-section {
        width: 100%;
        background: #ffffff;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      /* Subtle background atmosphere */
      .hiw-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 55% 40% at 5% 50%, rgba(99,102,241,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 95% 50%, rgba(14,165,233,0.04) 0%, transparent 60%);
        pointer-events: none;
      }

      .hiw-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .hiw-dots-tl {
        width: 160px; height: 160px;
        top: 40px; left: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
        opacity: 0.6;
      }
      .hiw-dots-br {
        width: 140px; height: 140px;
        bottom: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.1) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }
      .hiw-ring {
        width: 280px; height: 280px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.07);
        top: -100px; right: -80px;
        animation: hiw-spin 55s linear infinite;
      }
      @keyframes hiw-spin { to { transform: rotate(360deg); } }

      .hiw-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
      }

      /* Header */
      .hiw-header {
        text-align: center;
        margin-bottom: 64px;
      }

      .hiw-eyebrow {
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
      .hiw-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #6366f1;
      }

      .hiw-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 3.5vw, 2.8rem);
        font-weight: 800;
        color: #111827;
        margin: 0 0 14px;
        line-height: 1.15;
      }
      .hiw-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hiw-subtitle {
        font-size: 15.5px;
        color: #6b7280;
        line-height: 1.7;
        max-width: 440px;
        margin: 0 auto;
        font-weight: 400;
      }

      /* Grid */
      .hiw-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      /* Card */
      .hiw-card {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 24px;
        padding: 32px 28px;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, border-color 0.25s;
        cursor: default;
      }
      .hiw-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        opacity: 0;
        transition: opacity 0.25s;
      }
      .hiw-card:hover {
        transform: translateY(-6px);
        box-shadow:
          0 4px 12px rgba(0,0,0,0.05),
          0 20px 48px rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.15);
      }
      .hiw-card:hover::before { opacity: 1; }

      /* Card number (subtle background label) */
      .hiw-card-num {
        position: absolute;
        top: 20px; right: 22px;
        font-family: 'Playfair Display', serif;
        font-size: 48px;
        font-weight: 900;
        color: rgba(99,102,241,0.05);
        line-height: 1;
        transition: color 0.25s;
        user-select: none;
      }
      .hiw-card:hover .hiw-card-num {
        color: rgba(99,102,241,0.08);
      }

      .hiw-card-icon-wrap {
        width: 52px; height: 52px;
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.08));
        border: 1px solid rgba(99,102,241,0.12);
        display: flex; align-items: center; justify-content: center;
        font-size: 22px;
        margin-bottom: 20px;
        transition: transform 0.25s, box-shadow 0.25s;
      }
      .hiw-card:hover .hiw-card-icon-wrap {
        transform: scale(1.08);
        box-shadow: 0 6px 20px rgba(99,102,241,0.2);
      }

      .hiw-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 17px;
        font-weight: 800;
        color: #111827;
        margin: 0 0 10px;
        line-height: 1.2;
      }

      .hiw-card-desc {
        font-size: 13.5px;
        color: #6b7280;
        line-height: 1.75;
        font-weight: 400;
        margin: 0;
      }

      /* Divider between title and desc */
      .hiw-card-line {
        width: 32px;
        height: 2px;
        border-radius: 2px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        margin-bottom: 12px;
        transition: width 0.3s;
      }
      .hiw-card:hover .hiw-card-line { width: 52px; }

      @media (max-width: 900px) {
        .hiw-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 560px) {
        .hiw-section { padding: 72px 20px; }
        .hiw-grid { grid-template-columns: 1fr; gap: 16px; }
        .hiw-header { margin-bottom: 44px; }
      }
    `}</style>

    <section className="hiw-section">
      <div className="hiw-shape hiw-dots-tl" />
      <div className="hiw-shape hiw-dots-br" />
      <div className="hiw-shape hiw-ring" />

      <div className="hiw-inner">
        <div className="hiw-header">
          <div className="hiw-eyebrow">
            <span className="hiw-eyebrow-dot" />
            Platform Features
          </div>
          <h2 className="hiw-title">
            Everything You Need,<br />
            <span>In One Place</span>
          </h2>
          <p className="hiw-subtitle">
            One platform to manage your entire logistics operation — from dispatch to delivery.
          </p>
        </div>

        <div className="hiw-grid">
          {features.map((f, i) => (
            <div key={f.title} className="hiw-card">
              <div className="hiw-card-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="hiw-card-icon-wrap">{f.icon}</div>
              <h3 className="hiw-card-title">{f.title}</h3>
              <div className="hiw-card-line" />
              <p className="hiw-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HowItWorks;
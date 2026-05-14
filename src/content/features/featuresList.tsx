export const FeaturesList = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

      .fl-section {
        width: 100%;
        background: #ffffff;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      .fl-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 55% 40% at 5% 50%, rgba(99,102,241,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 95% 50%, rgba(14,165,233,0.04) 0%, transparent 60%);
        pointer-events: none;
      }

      .fl-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .fl-dots-tl {
        width: 160px; height: 160px;
        top: 40px; left: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
        opacity: 0.6;
      }
      .fl-dots-br {
        width: 140px; height: 140px;
        bottom: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.1) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }
      .fl-ring {
        width: 280px; height: 280px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.07);
        top: -100px; right: -80px;
        animation: fl-spin 55s linear infinite;
      }
      @keyframes fl-spin { to { transform: rotate(360deg); } }

      .fl-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
      }

      .fl-header {
        text-align: center;
        margin-bottom: 64px;
      }

      .fl-eyebrow {
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
      .fl-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #6366f1;
      }

      .fl-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 3.5vw, 2.8rem);
        font-weight: 800;
        color: #111827;
        margin: 0 0 14px;
        line-height: 1.15;
      }
      .fl-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .fl-subtitle {
        font-size: 15.5px;
        color: #6b7280;
        line-height: 1.7;
        max-width: 440px;
        margin: 0 auto;
        font-weight: 400;
      }

      .fl-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }

      .fl-card {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 24px;
        padding: 32px 28px;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, border-color 0.25s;
      }
      .fl-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        opacity: 0;
        transition: opacity 0.25s;
      }
      .fl-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05), 0 20px 48px rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.15);
      }
      .fl-card:hover::before {
        opacity: 1;
      }

      .fl-card-icon {
        width: 50px;
        height: 50px;
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.07));
        border: 1px solid rgba(99,102,241,0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        margin-bottom: 16px;
        transition: transform 0.25s, box-shadow 0.25s;
      }
      .fl-card:hover .fl-card-icon {
        transform: scale(1.08);
        box-shadow: 0 6px 20px rgba(99,102,241,0.2);
      }

      .fl-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 800;
        color: #111827;
        margin: 0 0 10px;
      }
      .fl-card-desc {
        font-size: 14px;
        color: #6b7280;
        line-height: 1.75;
        margin: 0;
      }

      @media (max-width: 1024px) {
        .fl-grid { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 768px) {
        .fl-grid { grid-template-columns: 1fr; }
        .fl-section { padding: 72px 20px; }
      }
    `}</style>

    <section className="fl-section">
      <div className="fl-shape fl-dots-tl" />
      <div className="fl-shape fl-dots-br" />
      <div className="fl-shape fl-ring" />

      <div className="fl-inner">
        <div className="fl-header">
          <div className="fl-eyebrow"><span className="fl-eyebrow-dot" />Complete Toolkit</div>
          <h2 className="fl-title">
            Everything You Need <span>to Succeed</span>
          </h2>
          <p className="fl-subtitle">Comprehensive features designed to optimize every aspect of your dispatch operations.</p>
        </div>

        <div className="fl-grid">
          {[
            { icon: "📦", title: "Load Management", desc: "Create, assign and manage loads efficiently across your entire fleet with real-time updates." },
            { icon: "👤", title: "Driver Management", desc: "Manage drivers, documents, licenses and performance all in one centralized hub." },
            { icon: "🚛", title: "Truck Management", desc: "Track trucks, schedule maintenance and monitor availability with precision." },
            { icon: "📍", title: "Real-time Tracking", desc: "Track every shipment live on an interactive map with complete visibility." },
            { icon: "📄", title: "POD & Documents", desc: "Capture proof of delivery digitally and manage all your paperwork seamlessly." },
            { icon: "💳", title: "Payments & Invoices", desc: "Generate invoices, reconcile payments and maintain financial clarity." },
          ].map((item) => (
            <div key={item.title} className="fl-card">
              <div className="fl-card-icon">{item.icon}</div>
              <h3 className="fl-card-title">{item.title}</h3>
              <p className="fl-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesList;

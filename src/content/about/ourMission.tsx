export const OurMission = () => (
  <>
    <style>{`
      .om-section {
        width: 100%;
        background: #ffffff;
        padding: 100px 24px;
        position: relative; overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }
      .om-section::before {
        content: ''; position: absolute; inset: 0;
        background:
          radial-gradient(ellipse 50% 50% at 10% 20%, rgba(99,102,241,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 45% 45% at 90% 80%, rgba(14,165,233,0.04) 0%, transparent 60%);
        pointer-events: none;
      }
      .om-shape { position: absolute; pointer-events: none; z-index: 0; }
      .om-dots-tl {
        width: 160px; height: 160px; top: 40px; left: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.1) 1.5px, transparent 1.5px);
        background-size: 18px 18px; opacity: 0.6;
      }
      .om-dots-br {
        width: 130px; height: 130px; bottom: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.1) 1.5px, transparent 1.5px);
        background-size: 16px 16px; opacity: 0.5;
      }
      .om-ring {
        width: 260px; height: 260px; border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.06);
        top: -80px; right: -60px;
        animation: om-spin 55s linear infinite;
      }
      @keyframes om-spin { to { transform: rotate(360deg); } }
 
      .om-inner { position: relative; z-index: 10; max-width: 900px; margin: 0 auto; }
 
      .om-header { text-align: center; margin-bottom: 60px; }
      .om-eyebrow {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 5px 14px; border-radius: 999px;
        border: 1px solid rgba(99,102,241,0.2); background: rgba(99,102,241,0.06);
        font-size: 11px; font-weight: 600; color: #6366f1;
        letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 20px;
      }
      .om-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #6366f1; }
      .om-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.9rem, 3vw, 2.6rem); font-weight: 800; color: #111827;
        line-height: 1.12; margin: 0 0 14px;
      }
      .om-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
      .om-subtitle { font-size: 15px; color: #6b7280; line-height: 1.7; max-width: 440px; margin: 0 auto; }
 
      .om-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
 
      .om-card {
        background: #fff; border: 1.5px solid #f0f0f0; border-radius: 24px;
        padding: 40px 36px; position: relative; overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, border-color 0.25s;
      }
      .om-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        opacity: 0; transition: opacity 0.25s;
      }
      .om-card:hover { transform: translateY(-6px); box-shadow: 0 4px 12px rgba(0,0,0,0.05), 0 20px 48px rgba(99,102,241,0.1); border-color: rgba(99,102,241,0.15); }
      .om-card:hover::before { opacity: 1; }
 
      .om-card-bg-num {
        position: absolute; top: 16px; right: 20px;
        font-family: 'Playfair Display', serif;
        font-size: 80px; font-weight: 900; line-height: 1;
        color: rgba(99,102,241,0.04); user-select: none;
        transition: color 0.25s;
      }
      .om-card:hover .om-card-bg-num { color: rgba(99,102,241,0.07); }
 
      .om-card-icon {
        width: 56px; height: 56px; border-radius: 18px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.07));
        border: 1px solid rgba(99,102,241,0.12);
        display: flex; align-items: center; justify-content: center;
        font-size: 26px; margin-bottom: 24px;
        transition: transform 0.25s, box-shadow 0.25s;
      }
      .om-card:hover .om-card-icon { transform: scale(1.08); box-shadow: 0 6px 20px rgba(99,102,241,0.2); }
 
      .om-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 20px; font-weight: 800; color: #111827; margin: 0 0 10px;
      }
      .om-card-line {
        width: 32px; height: 2px; border-radius: 2px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        margin-bottom: 14px; transition: width 0.3s;
      }
      .om-card:hover .om-card-line { width: 52px; }
      .om-card-desc { font-size: 14px; color: #6b7280; line-height: 1.75; margin: 0; }
 
      @media (max-width: 640px) {
        .om-grid { grid-template-columns: 1fr; }
        .om-section { padding: 72px 20px; }
      }
    `}</style>
 
    <section className="om-section">
      <div className="om-shape om-dots-tl" />
      <div className="om-shape om-dots-br" />
      <div className="om-shape om-ring" />
 
      <div className="om-inner">
        <div className="om-header">
          <div className="om-eyebrow"><span className="om-eyebrow-dot" />Our Purpose</div>
          <h2 className="om-title">What Drives Us<br /><span>Every Single Day</span></h2>
          <p className="om-subtitle">The values and vision that shape everything we build.</p>
        </div>
 
        <div className="om-grid">
          {[
            {
              icon: "🎯", num: "01", title: "Our Mission",
              desc: "To empower logistics companies with smart technology that simplifies dispatching and maximises efficiency across every mile of the journey.",
            },
            {
              icon: "👁️", num: "02", title: "Our Vision",
              desc: "To become the most trusted dispatch management platform in the world, connecting shippers, drivers, and dispatchers seamlessly.",
            },
          ].map((card) => (
            <div key={card.title} className="om-card">
              <div className="om-card-bg-num">{card.num}</div>
              <div className="om-card-icon">{card.icon}</div>
              <h3 className="om-card-title">{card.title}</h3>
              <div className="om-card-line" />
              <p className="om-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default OurMission;
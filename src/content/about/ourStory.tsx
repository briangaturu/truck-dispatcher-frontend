export const OurStory = () => (
  <>
    <style>{`
      .os-section {
        width: 100%;
        background: #f4f1ec;
        padding: 100px 24px;
        position: relative; overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }
      .os-section::before {
        content: ''; position: absolute; inset: 0;
        background:
          radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 65%);
        pointer-events: none;
      }
      .os-shape { position: absolute; pointer-events: none; z-index: 0; }
      .os-ring-1 {
        width: 420px; height: 420px; border-radius: 50%;
        border: 1.5px solid rgba(99,102,241,0.07);
        top: -140px; left: -100px;
        animation: os-spin 60s linear infinite;
      }
      .os-ring-2 {
        width: 240px; height: 240px; border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.08);
        bottom: -70px; right: -50px;
        animation: os-spin 45s linear infinite reverse;
      }
      .os-dots {
        width: 150px; height: 150px; top: 50px; right: 80px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.1) 1.5px, transparent 1.5px);
        background-size: 18px 18px; opacity: 0.5;
      }
      @keyframes os-spin { to { transform: rotate(360deg); } }
 
      .os-inner {
        position: relative; z-index: 10;
        max-width: 780px; margin: 0 auto;
      }
 
      /* Timeline-style card */
      .os-card {
        background: #fff; border: 1.5px solid #f0f0f0; border-radius: 28px;
        padding: 56px 60px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.04), 0 20px 60px rgba(99,102,241,0.08);
        position: relative; overflow: hidden;
        text-align: center;
      }
      .os-card-accent {
        position: absolute; top: 0; left: 0; right: 0; height: 4px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%;
        animation: os-shimmer 3s ease infinite;
      }
      @keyframes os-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
 
      .os-quote-mark {
        font-family: 'Playfair Display', serif;
        font-size: 96px; line-height: 0.6;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 24px; display: block; opacity: 0.4;
      }
 
      .os-eyebrow {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 5px 14px; border-radius: 999px;
        border: 1px solid rgba(99,102,241,0.2); background: rgba(99,102,241,0.06);
        font-size: 11px; font-weight: 600; color: #6366f1;
        letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 24px;
      }
      .os-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #6366f1; }
 
      .os-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.9rem, 3vw, 2.6rem); font-weight: 800; color: #111827;
        line-height: 1.12; margin: 0 0 24px;
      }
      .os-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
 
      .os-divider {
        width: 48px; height: 3px; border-radius: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        margin: 0 auto 28px;
      }
 
      .os-text {
        font-size: 15.5px; color: #6b7280; line-height: 1.85;
        max-width: 580px; margin: 0 auto 36px; font-weight: 400;
      }
 
      /* Founder stats row */
      .os-stats {
        display: flex; align-items: center; justify-content: center;
        gap: 0; border-top: 1px solid #f3f4f6; margin-top: 8px; padding-top: 36px;
      }
      .os-stat { flex: 1; text-align: center; }
      .os-stat-sep { width: 1px; height: 40px; background: #f0f0f0; flex-shrink: 0; }
      .os-stat-val {
        font-family: 'Playfair Display', serif;
        font-size: 24px; font-weight: 800; color: #111827;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
      .os-stat-label { font-size: 11.5px; color: #9ca3af; font-weight: 500; margin-top: 4px; }
 
      @media (max-width: 580px) {
        .os-card { padding: 40px 28px; }
        .os-section { padding: 72px 20px; }
        .os-stats { flex-wrap: wrap; gap: 24px; }
        .os-stat-sep { display: none; }
      }
    `}</style>
 
    <section className="os-section">
      <div className="os-shape os-ring-1" />
      <div className="os-shape os-ring-2" />
      <div className="os-shape os-dots" />
 
      <div className="os-inner">
        <div className="os-card">
          <div className="os-card-accent" />
 
          <span className="os-quote-mark">"</span>
 
          <div className="os-eyebrow"><span className="os-eyebrow-dot" />Our Story</div>
 
          <h2 className="os-title">Born From<br /><span>Real Frustration</span></h2>
 
          <div className="os-divider" />
 
          <p className="os-text">
            Founded by logistics veterans who were tired of juggling spreadsheets,
            phone calls, and disconnected software — Truck Dispatcher was born out of
            a simple need: one place to manage everything. From the first load to
            the final invoice, we've built the tools you actually need, with the
            people who understand the road.
          </p>
 
          <div className="os-stats">
            {[
              { val: "2019", label: "Founded" },
              { val: "500+", label: "Companies" },
              { val: "10K+", label: "Loads Managed" },
              { val: "Kenya", label: "Headquartered" },
            ].map((s, i, arr) => (
              <>
                <div key={s.val} className="os-stat">
                  <div className="os-stat-val">{s.val}</div>
                  <div className="os-stat-label">{s.label}</div>
                </div>
                {i < arr.length - 1 && <div key={`sep-${i}`} className="os-stat-sep" />}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
 
export default OurStory;
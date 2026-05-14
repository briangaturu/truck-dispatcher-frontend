import { Link } from "react-router-dom";
 
/* ─── SHARED STYLES (injected once via a wrapper or individually) ─── */
const sharedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Epilogue:wght@300;400;500;600&display=swap');
`;

export const AboutUs = () => (
  <>
    <style>{`
      ${sharedStyles}
 
      .au-section {
        width: 100%;
        background: #f4f1ec;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }
      .au-section::before {
        content: '';
        position: absolute; inset: 0;
        background:
          radial-gradient(ellipse 55% 55% at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 45% 50% at 100% 40%, rgba(14,165,233,0.05) 0%, transparent 60%);
        pointer-events: none;
      }
      .au-shape { position: absolute; pointer-events: none; z-index: 0; }
      .au-ring-1 {
        width: 380px; height: 380px; border-radius: 50%;
        border: 1.5px solid rgba(99,102,241,0.07);
        top: -120px; right: -80px;
        animation: au-spin 55s linear infinite;
      }
      .au-ring-2 {
        width: 220px; height: 220px; border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.08);
        bottom: -60px; left: -50px;
        animation: au-spin 40s linear infinite reverse;
      }
      .au-dots {
        width: 160px; height: 160px;
        bottom: 60px; right: 60px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px; opacity: 0.55;
      }
      @keyframes au-spin { to { transform: rotate(360deg); } }
 
      .au-inner {
        position: relative; z-index: 10;
        max-width: 1140px; margin: 0 auto;
        display: grid; grid-template-columns: 1fr 1fr;
        gap: 72px; align-items: center;
      }
 
      /* Content side */
      .au-eyebrow {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 5px 14px; border-radius: 999px;
        border: 1px solid rgba(99,102,241,0.2);
        background: rgba(99,102,241,0.06);
        font-size: 11px; font-weight: 600; color: #6366f1;
        letter-spacing: 0.08em; text-transform: uppercase;
        margin-bottom: 20px;
      }
      .au-eyebrow-dot {
        width: 5px; height: 5px; border-radius: 50%; background: #6366f1;
        animation: au-pulse 2s ease-in-out infinite;
      }
      @keyframes au-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
 
      .au-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.9rem, 3vw, 2.6rem);
        font-weight: 900; color: #111827; line-height: 1.12;
        margin: 0 0 20px;
      }
      .au-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text;
      }
 
      .au-desc {
        font-size: 15px; color: #6b7280; line-height: 1.8;
        margin: 0 0 32px; font-weight: 400; max-width: 460px;
      }
 
      .au-checks { display: flex; flex-direction: column; gap: 14px; list-style: none; margin: 0 0 36px; padding: 0; }
      .au-check-item { display: flex; align-items: center; gap: 14px; font-size: 14px; color: #374151; }
      .au-check-icon {
        width: 26px; height: 26px; border-radius: 8px;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px; color: #fff; font-weight: 700; flex-shrink: 0;
        box-shadow: 0 4px 10px rgba(99,102,241,0.3);
      }
 
      .au-cta {
        display: inline-flex; align-items: center; gap: 8px;
        padding: 0 28px; height: 50px; border-radius: 14px;
        background: linear-gradient(135deg, #6366f1 0%, #4f46e5 45%, #0ea5e9 100%);
        color: #fff; font-family: 'Epilogue', sans-serif;
        font-size: 14px; font-weight: 600; text-decoration: none;
        box-shadow: 0 6px 20px rgba(99,102,241,0.35);
        position: relative; overflow: hidden;
        transition: transform 0.15s, box-shadow 0.2s;
      }
      .au-cta::before {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%);
      }
      .au-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(99,102,241,0.4); }
 
      /* Visual side */
      .au-visual { position: relative; }
      .au-img-wrap {
        border-radius: 28px; overflow: hidden;
        box-shadow: 0 4px 8px rgba(0,0,0,0.06), 0 20px 60px rgba(99,102,241,0.1), 0 60px 100px rgba(0,0,0,0.08);
        aspect-ratio: 4/3; position: relative;
      }
      .au-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
      .au-img-wrap:hover img { transform: scale(1.04); }
      .au-img-wrap::after {
        content: ''; position: absolute; inset: 0;
        background: linear-gradient(160deg, transparent 45%, rgba(99,102,241,0.12) 100%);
        pointer-events: none;
      }
      .au-img-bar {
        position: absolute; top: 0; left: 0; right: 0; height: 4px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%; border-radius: 28px 28px 0 0;
        animation: au-shimmer 3s ease infinite;
      }
      @keyframes au-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
 
      .au-float-card {
        position: absolute; bottom: -20px; left: -24px;
        background: #fff; border-radius: 18px; padding: 14px 20px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        display: flex; align-items: center; gap: 12px; min-width: 170px;
        animation: au-float 4s ease-in-out infinite;
      }
      @keyframes au-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
      .au-float-icon {
        width: 40px; height: 40px; border-radius: 12px; font-size: 18px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.08));
        border: 1px solid rgba(99,102,241,0.1);
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      }
      .au-float-val { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 800; color: #111827; line-height: 1; }
      .au-float-label { font-size: 11px; color: #9ca3af; font-weight: 500; margin-top: 3px; }
 
      @media (max-width: 860px) {
        .au-inner { grid-template-columns: 1fr; gap: 48px; }
        .au-visual { display: none; }
        .au-section { padding: 72px 20px; }
      }
    `}</style>
 
    <section className="au-section">
      <div className="au-shape au-ring-1" />
      <div className="au-shape au-ring-2" />
      <div className="au-shape au-dots" />
 
      <div className="au-inner">
        {/* Content */}
        <div>
          <div className="au-eyebrow"><span className="au-eyebrow-dot" />Who We Are</div>
          <h2 className="au-title">Built for Modern<br /><span>Logistics Companies</span></h2>
          <p className="au-desc">
            Truck Dispatcher is built for modern logistics companies to streamline
            operations, improve communication, and deliver results — every time.
          </p>
          <ul className="au-checks">
            {[
              "All-in-one logistics solution",
              "Real-time visibility and tracking",
              "Trusted by logistics professionals",
              "Easy to use and powerfully capable",
            ].map((item) => (
              <li key={item} className="au-check-item">
                <span className="au-check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/register" className="au-cta">Get Started →</Link>
        </div>
 
        {/* Visual */}
        <div className="au-visual">
          <div className="au-img-wrap">
            <div className="au-img-bar" />
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop"
              alt="Truck on mountain road"
            />
          </div>
          <div className="au-float-card">
            <div className="au-float-icon">🌍</div>
            <div>
              <div className="au-float-val">Kenya #1</div>
              <div className="au-float-label">Dispatch Platform</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
 
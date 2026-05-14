const PricingHero = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Epilogue:wght@300;400;500;600&display=swap');

      .ph-section {
        width: 100%;
        min-height: 80vh;
        background: #f4f1ec;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
        padding: 80px 24px;
      }

      .ph-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 60% 60% at 80% 20%, rgba(99,102,241,0.09) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 10% 80%, rgba(14,165,233,0.07) 0%, transparent 60%);
        pointer-events: none;
      }

      .ph-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .ph-ring-1 {
        width: 500px; height: 500px;
        border-radius: 50%;
        border: 1.5px solid rgba(99,102,241,0.08);
        top: -160px; right: -100px;
        animation: ph-spin 60s linear infinite;
      }
      .ph-ring-2 {
        width: 300px; height: 300px;
        border-radius: 50%;
        border: 1px solid rgba(14,165,233,0.1);
        bottom: -80px; left: -60px;
        animation: ph-spin 45s linear infinite reverse;
      }
      .ph-dots-1 {
        width: 200px; height: 200px;
        top: 60px; left: 45%;
        background-image: radial-gradient(circle, rgba(99,102,241,0.13) 1.5px, transparent 1.5px);
        background-size: 20px 20px;
        opacity: 0.7;
      }
      .ph-dots-2 {
        width: 140px; height: 140px;
        bottom: 80px; right: 60px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.12) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }

      @keyframes ph-spin { to { transform: rotate(360deg); } }

      .ph-inner {
        position: relative;
        z-index: 10;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
      }

      .ph-eyebrow {
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
      }
      .ph-eyebrow-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #6366f1;
      }

      .ph-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.2rem, 4vw, 3.2rem);
        font-weight: 900;
        line-height: 1.1;
        color: #111827;
        margin: 0 0 24px;
      }
      .ph-title-accent {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .ph-desc {
        font-size: 16px;
        color: #6b7280;
        line-height: 1.8;
        max-width: 520px;
        margin: 0 auto;
        font-weight: 400;
      }

      @media (max-width: 640px) {
        .ph-section { padding: 60px 20px; }
        .ph-title { font-size: 1.8rem; }
      }
    `}</style>

    <section className="ph-section">
      <div className="ph-shape ph-ring-1" />
      <div className="ph-shape ph-ring-2" />
      <div className="ph-shape ph-dots-1" />
      <div className="ph-shape ph-dots-2" />

      <div className="ph-inner">
        <div className="ph-eyebrow"><span className="ph-eyebrow-dot" />Simple & Transparent</div>
        <h1 className="ph-title">
          Plans That <span className="ph-title-accent">Scale</span> with You
        </h1>
        <p className="ph-desc">
          Choose the perfect plan for your business. No hidden fees, cancel anytime.
        </p>
      </div>
    </section>
  </>
);

export default PricingHero;

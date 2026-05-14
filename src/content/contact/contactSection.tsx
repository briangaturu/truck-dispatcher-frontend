export const ContactSection = () => (
  <>
    <style>{`
      .cs-section {
        width: 100%;
        background: #ffffff;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      .cs-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 55% 40% at 5% 50%, rgba(99,102,241,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 95% 50%, rgba(14,165,233,0.04) 0%, transparent 60%);
        pointer-events: none;
      }

      .cs-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .cs-dots-tl {
        width: 160px; height: 160px;
        top: 40px; left: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
        opacity: 0.6;
      }
      .cs-dots-br {
        width: 140px; height: 140px;
        bottom: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.1) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }
      .cs-ring {
        width: 280px; height: 280px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.07);
        top: -100px; right: -80px;
        animation: cs-spin 55s linear infinite;
      }
      @keyframes cs-spin { to { transform: rotate(360deg); } }

      .cs-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
      }

      .cs-header {
        text-align: center;
        margin-bottom: 64px;
      }

      .cs-eyebrow {
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
      .cs-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #6366f1;
      }

      .cs-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 3.5vw, 2.8rem);
        font-weight: 800;
        color: #111827;
        margin: 0 0 14px;
        line-height: 1.15;
      }
      .cs-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .cs-subtitle {
        font-size: 15.5px;
        color: #6b7280;
        line-height: 1.7;
        max-width: 440px;
        margin: 0 auto;
        font-weight: 400;
      }

      .cs-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }

      .cs-card {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 24px;
        padding: 32px 28px;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, border-color 0.25s;
      }
      .cs-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        opacity: 0;
        transition: opacity 0.25s;
      }
      .cs-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05), 0 20px 48px rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.15);
      }
      .cs-card:hover::before {
        opacity: 1;
      }

      .cs-card-icon {
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
      .cs-card:hover .cs-card-icon {
        transform: scale(1.08);
        box-shadow: 0 6px 20px rgba(99,102,241,0.2);
      }

      .cs-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 800;
        color: #111827;
        margin: 0 0 10px;
      }
      .cs-card-desc {
        font-size: 14px;
        color: #6b7280;
        line-height: 1.75;
        margin: 0;
      }

      @media (max-width: 768px) {
        .cs-grid { grid-template-columns: 1fr; }
        .cs-section { padding: 72px 20px; }
      }
    `}</style>

    <section className="cs-section">
      <div className="cs-shape cs-dots-tl" />
      <div className="cs-shape cs-dots-br" />
      <div className="cs-shape cs-ring" />

      <div className="cs-inner">
        <div className="cs-header">
          <div className="cs-eyebrow"><span className="cs-eyebrow-dot" />Contact Information</div>
          <h2 className="cs-title">
            Reach Us <span>Today</span>
          </h2>
          <p className="cs-subtitle">Multiple ways to connect with our support team.</p>
        </div>

        <div className="cs-grid">
          {[
            { icon: "📞", title: "Phone", desc: "+1 (555) 123-4567" },
            { icon: "✉️", title: "Email", desc: "info@truckdispatcher.com" },
            { icon: "📍", title: "Address", desc: "123 Logistics Way, Chicago, IL 60601, USA" },
            { icon: "🕐", title: "Business Hours", desc: "Mon–Fri: 9:00 AM – 6:00 PM" },
          ].map((item) => (
            <div key={item.title} className="cs-card">
              <div className="cs-card-icon">{item.icon}</div>
              <h3 className="cs-card-title">{item.title}</h3>
              <p className="cs-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ContactSection;

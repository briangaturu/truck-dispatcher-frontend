import { Link } from "react-router-dom";

export const PricingPlans = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

      .pp-section {
        width: 100%;
        background: #ffffff;
        padding: 100px 24px;
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      .pp-section::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 55% 40% at 5% 50%, rgba(99,102,241,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 95% 50%, rgba(14,165,233,0.04) 0%, transparent 60%);
        pointer-events: none;
      }

      .pp-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .pp-dots-tl {
        width: 160px; height: 160px;
        top: 40px; left: 40px;
        background-image: radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
        opacity: 0.6;
      }
      .pp-dots-br {
        width: 140px; height: 140px;
        bottom: 40px; right: 40px;
        background-image: radial-gradient(circle, rgba(14,165,233,0.1) 1.5px, transparent 1.5px);
        background-size: 16px 16px;
        opacity: 0.5;
      }
      .pp-ring {
        width: 280px; height: 280px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.07);
        top: -100px; right: -80px;
        animation: pp-spin 55s linear infinite;
      }
      @keyframes pp-spin { to { transform: rotate(360deg); } }

      .pp-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
      }

      .pp-header {
        text-align: center;
        margin-bottom: 64px;
      }

      .pp-eyebrow {
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
      .pp-eyebrow-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #6366f1;
      }

      .pp-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 3.5vw, 2.8rem);
        font-weight: 800;
        color: #111827;
        margin: 0 0 14px;
        line-height: 1.15;
      }
      .pp-title span {
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .pp-subtitle {
        font-size: 15.5px;
        color: #6b7280;
        line-height: 1.7;
        max-width: 440px;
        margin: 0 auto;
        font-weight: 400;
      }

      .pp-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }

      .pp-card {
        background: #fff;
        border: 1.5px solid #f0f0f0;
        border-radius: 24px;
        padding: 40px 32px;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s, border-color 0.25s;
      }
      .pp-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9);
        opacity: 0;
        transition: opacity 0.25s;
      }
      .pp-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05), 0 20px 48px rgba(99,102,241,0.1);
        border-color: rgba(99,102,241,0.15);
      }
      .pp-card:hover::before {
        opacity: 1;
      }
      .pp-card.featured {
        border-color: #6366f1;
        box-shadow: 0 0 0 2px rgba(99,102,241,0.1);
        transform: scale(1.05);
      }
      .pp-card.featured::before {
        opacity: 1;
      }

      .pp-badge {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 8px;
        background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.07));
        border: 1px solid rgba(99,102,241,0.2);
        font-size: 11px;
        font-weight: 700;
        color: #6366f1;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 16px;
      }

      .pp-card-name {
        font-family: 'Playfair Display', serif;
        font-size: 20px;
        font-weight: 800;
        color: #111827;
        margin: 0 0 8px;
      }

      .pp-card-desc {
        font-size: 13px;
        color: #6b7280;
        margin: 0 0 24px;
        line-height: 1.6;
      }

      .pp-price {
        display: flex;
        align-items: baseline;
        gap: 4px;
        margin-bottom: 24px;
      }
      .pp-price-amount {
        font-family: 'Playfair Display', serif;
        font-size: 36px;
        font-weight: 800;
        color: #111827;
      }
      .pp-price-period {
        font-size: 13px;
        color: #6b7280;
        font-weight: 500;
      }

      .pp-features {
        margin-bottom: 28px;
      }
      .pp-features-label {
        font-size: 11px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 12px;
        display: block;
      }
      .pp-feature {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 0;
        font-size: 13px;
        color: #374151;
        border-bottom: 1px solid #f3f4f6;
      }
      .pp-feature:last-child {
        border-bottom: none;
      }
      .pp-feature-check {
        width: 16px;
        height: 16px;
        border-radius: 3px;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 10px;
        font-weight: bold;
      }

      .pp-cta {
        display: block;
        width: 100%;
        padding: 12px 20px;
        border-radius: 12px;
        background: linear-gradient(135deg, #6366f1 0%, #4f46e5 40%, #0ea5e9 100%);
        color: #fff;
        font-family: 'Epilogue', sans-serif;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        border: none;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.2s;
        box-shadow: 0 4px 12px rgba(99,102,241,0.3);
      }
      .pp-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(99,102,241,0.4);
      }
      .pp-card:not(.featured) .pp-cta {
        background: #f3f4f6;
        color: #374151;
        box-shadow: none;
      }
      .pp-card:not(.featured) .pp-cta:hover {
        background: #e5e7eb;
      }

      @media (max-width: 1024px) {
        .pp-grid { grid-template-columns: repeat(2, 1fr); }
        .pp-card.featured { scale: 1; }
      }

      @media (max-width: 768px) {
        .pp-grid { grid-template-columns: 1fr; }
        .pp-section { padding: 72px 20px; }
        .pp-card.featured { scale: 1; }
      }
    `}</style>

    <section className="pp-section">
      <div className="pp-shape pp-dots-tl" />
      <div className="pp-shape pp-dots-br" />
      <div className="pp-shape pp-ring" />

      <div className="pp-inner">
        <div className="pp-header">
          <div className="pp-eyebrow"><span className="pp-eyebrow-dot" />Flexible Options</div>
          <h2 className="pp-title">
            Choose Your <span>Perfect Plan</span>
          </h2>
          <p className="pp-subtitle">Transparent pricing with all the features you need to run your dispatch operations.</p>
        </div>

        <div className="pp-grid">
          {[
            {
              badge: "Popular",
              name: "Professional",
              desc: "For growing dispatch teams",
              price: "199",
              featured: true,
              features: [
                "Up to 50 drivers",
                "Real-time tracking",
                "Load management",
                "Payment processing",
                "Basic analytics",
                "Email support",
              ],
            },
            {
              badge: "Entry Level",
              name: "Starter",
              desc: "For new dispatch businesses",
              price: "79",
              featured: false,
              features: [
                "Up to 10 drivers",
                "Basic tracking",
                "Load management",
                "Manual payments",
                "Limited support",
              ],
            },
            {
              badge: "Enterprise",
              name: "Enterprise",
              desc: "For large fleets",
              price: "Custom",
              featured: false,
              features: [
                "Unlimited drivers",
                "Advanced analytics",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
              ],
            },
          ].map((plan) => (
            <div key={plan.name} className={`pp-card ${plan.featured ? "featured" : ""}`}>
              <div className="pp-badge">{plan.badge}</div>
              <h3 className="pp-card-name">{plan.name}</h3>
              <p className="pp-card-desc">{plan.desc}</p>
              <div className="pp-price">
                <span className="pp-price-amount">${plan.price}</span>
                {plan.price !== "Custom" && <span className="pp-price-period">/month</span>}
              </div>
              <div className="pp-features">
                <span className="pp-features-label">Features included:</span>
                {plan.features.map((feature, i) => (
                  <div key={i} className="pp-feature">
                    <div className="pp-feature-check">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="pp-cta">
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PricingPlans;

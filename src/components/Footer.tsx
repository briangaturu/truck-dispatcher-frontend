import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

      .footer-root {
        width: 100%;
        background: #0f0c29;
        background: linear-gradient(170deg, #1e1b4b 0%, #111827 60%, #0c1a2e 100%);
        position: relative;
        overflow: hidden;
        font-family: 'Epilogue', sans-serif;
      }

      /* Atmosphere */
      .footer-root::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse 50% 70% at 5% 30%, rgba(99,102,241,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 40% 60% at 95% 70%, rgba(14,165,233,0.08) 0%, transparent 60%);
        pointer-events: none;
      }

      /* Shapes */
      .footer-shape {
        position: absolute;
        pointer-events: none;
        z-index: 0;
      }
      .footer-ring-1 {
        width: 300px; height: 300px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.04);
        top: -80px; right: -60px;
        animation: footer-spin 60s linear infinite;
      }
      .footer-ring-2 {
        width: 180px; height: 180px;
        border-radius: 50%;
        border: 1px solid rgba(99,102,241,0.1);
        bottom: 40px; left: -40px;
        animation: footer-spin 45s linear infinite reverse;
      }
      .footer-dots {
        width: 140px; height: 140px;
        top: 30px; left: 50%;
        background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1.5px, transparent 1.5px);
        background-size: 18px 18px;
      }
      @keyframes footer-spin { to { transform: rotate(360deg); } }

      /* Shimmer top bar */
      .footer-top-bar {
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
        background-size: 200% 100%;
        animation: footer-shimmer 3s ease infinite;
      }
      @keyframes footer-shimmer {
        0%   { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }

      .footer-inner {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
        padding: 60px 24px 0;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 48px;
        padding-bottom: 56px;
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }

      /* Brand col */
      .footer-brand { }

      .footer-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
        margin-bottom: 20px;
      }
      .footer-logo-icon {
        width: 44px; height: 44px;
        border-radius: 14px;
        background: linear-gradient(135deg, #6366f1, #0ea5e9);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 6px 18px rgba(99,102,241,0.35);
        flex-shrink: 0;
      }
      .footer-logo-name {
        font-family: 'Playfair Display', serif;
        font-size: 16px;
        font-weight: 800;
        color: #fff;
        line-height: 1;
      }
      .footer-logo-tagline {
        font-size: 10.5px;
        color: rgba(255,255,255,0.35);
        margin-top: 4px;
        letter-spacing: 0.03em;
      }

      .footer-brand-desc {
        font-size: 13.5px;
        color: rgba(255,255,255,0.35);
        line-height: 1.8;
        margin: 0 0 24px;
        max-width: 280px;
      }

      /* Social icons */
      .footer-socials {
        display: flex;
        gap: 10px;
      }
      .footer-social {
        width: 36px; height: 36px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(255,255,255,0.04);
        display: flex; align-items: center; justify-content: center;
        font-size: 15px;
        text-decoration: none;
        transition: background 0.2s, border-color 0.2s, transform 0.15s;
        cursor: pointer;
      }
      .footer-social:hover {
        background: rgba(99,102,241,0.15);
        border-color: rgba(99,102,241,0.3);
        transform: translateY(-2px);
      }

      /* Link columns */
      .footer-col { }

      .footer-col-heading {
        font-family: 'Epilogue', sans-serif;
        font-size: 10.5px;
        font-weight: 700;
        color: rgba(255,255,255,0.5);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin: 0 0 18px;
      }

      .footer-col-links {
        display: flex;
        flex-direction: column;
        gap: 12px;
        list-style: none;
        margin: 0; padding: 0;
      }

      .footer-col-link {
        font-size: 13.5px;
        color: rgba(255,255,255,0.4);
        text-decoration: none;
        font-weight: 400;
        transition: color 0.2s, padding-left 0.2s;
        display: inline-block;
      }
      .footer-col-link:hover {
        color: rgba(255,255,255,0.9);
        padding-left: 4px;
      }

      /* Bottom bar */
      .footer-bottom {
        position: relative;
        z-index: 10;
        max-width: 1140px;
        margin: 0 auto;
        padding: 20px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }

      .footer-copyright {
        font-size: 12px;
        color: rgba(255,255,255,0.25);
      }
      .footer-copyright span {
        color: rgba(165,180,252,0.6);
        font-weight: 500;
      }

      .footer-bottom-links {
        display: flex;
        gap: 20px;
      }
      .footer-bottom-link {
        font-size: 12px;
        color: rgba(255,255,255,0.25);
        text-decoration: none;
        transition: color 0.2s;
      }
      .footer-bottom-link:hover { color: rgba(255,255,255,0.6); }

      @media (max-width: 860px) {
        .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        .footer-brand { grid-column: span 2; }
      }
      @media (max-width: 480px) {
        .footer-grid { grid-template-columns: 1fr; }
        .footer-brand { grid-column: span 1; }
        .footer-inner { padding: 48px 20px 0; }
        .footer-bottom { flex-direction: column; text-align: center; }
        .footer-bottom-links { justify-content: center; }
      }
    `}</style>

    <footer className="footer-root">
      <div className="footer-top-bar" />
      <div className="footer-shape footer-ring-1" />
      <div className="footer-shape footer-ring-2" />
      <div className="footer-shape footer-dots" />

      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">🚛</div>
              <div>
                <div className="footer-logo-name">Truck Dispatcher</div>
                <div className="footer-logo-tagline">Smart Logistics. Stronger Deliveries.</div>
              </div>
            </Link>
            <p className="footer-brand-desc">
              A complete dispatch and logistics management platform trusted by
              transport companies across Kenya and beyond.
            </p>
            <div className="footer-socials">
              {["𝕏", "in", "f", "📧"].map((s, i) => (
                <a key={i} href="#" className="footer-social">{s}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-col-links">
              <li><Link to="/about" className="footer-col-link">About Us</Link></li>
              <li><Link to="/features" className="footer-col-link">Features</Link></li>
              <li><Link to="/pricing" className="footer-col-link">Pricing</Link></li>
              <li><Link to="/contact" className="footer-col-link">Contact</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Platform</h4>
            <ul className="footer-col-links">
              <li><Link to="/login" className="footer-col-link">Sign In</Link></li>
              <li><Link to="/register" className="footer-col-link">Register</Link></li>
              <li><Link to="/register" className="footer-col-link">Free Trial</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Contact</h4>
            <ul className="footer-col-links">
              <li>
                <a href="tel:+254712345678" className="footer-col-link">+254 712 345 678</a>
              </li>
              <li>
                <a href="mailto:info@truckdispatcher.com" className="footer-col-link">
                  info@truckdispatcher.com
                </a>
              </li>
              <li>
                <span className="footer-col-link" style={{ cursor: 'default' }}>Nairobi, Kenya 🇰🇪</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} <span>Truck Dispatcher</span>. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <a href="#" className="footer-bottom-link">Privacy Policy</a>
          <a href="#" className="footer-bottom-link">Terms of Service</a>
          <a href="#" className="footer-bottom-link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
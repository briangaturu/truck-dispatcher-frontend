import { Link } from "react-router-dom";

const CTA = () => (
  <section className="cta-section">
    <div className="cta-section__inner">
      <h2>Ready to Transform Your Logistics?</h2>
      <p>Join hundreds of logistics companies already using Truck Dispatcher.</p>
      <div className="cta-section__actions">
        <Link to="/register" className="td-btn td-btn--white td-btn--lg">
          Start Free Trial
        </Link>
        <Link to="/contact" className="td-btn td-btn--outline-white td-btn--lg">
          Contact Sales
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
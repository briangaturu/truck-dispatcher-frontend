import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="hero__text">
      <h1 className="hero__headline">
        Smart Dispatching.<br />
        <span className="hero__headline--accent">Stronger Deliveries.</span>
      </h1>
      <p className="hero__sub">
        A complete logistics and dispatch management system to manage trucks,
        drivers, loads, tracking, POD, payments and more.
      </p>
      <div className="hero__actions">
        <Link to="/register" className="td-btn td-btn--primary td-btn--lg">
          Get Started
        </Link>
        <Link to="/about" className="td-btn td-btn--ghost td-btn--lg">
          Learn More
        </Link>
      </div>
      <div className="hero__badges">
        {[
          { icon: "📍", label: "Real-time Tracking" },
          { icon: "⚡", label: "Smart Dispatch" },
          { icon: "🔒", label: "Secure & Reliable" },
          { icon: "🕐", label: "24/7 Support" },
        ].map((b) => (
          <div key={b.label} className="hero__badge">
            <span>{b.icon}</span> {b.label}
          </div>
        ))}
      </div>
    </div>
    <div className="hero__image">
      <div className="hero__image-card">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop"
          alt="Truck on highway"
        />
      </div>
    </div>
  </section>
);

export default Hero;
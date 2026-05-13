import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="td-footer">
    <div className="td-footer__inner">
      <div className="td-footer__brand">
        <Link to="/" className="td-footer__logo">
          🚛 Truck Dispatcher
        </Link>
        <p className="td-footer__tagline">
          Smart Logistics. Stronger Deliveries. Powering the last mile and beyond.
        </p>
      </div>

      <div className="td-footer__cols">
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Platform</h4>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+15551234567">+1 (555) 123-4567</a>
          <a href="mailto:info@truckdispatcher.com">info@truckdispatcher.com</a>
        </div>
      </div>
    </div>
    <div className="td-footer__bottom">
      <p>© {new Date().getFullYear()} Truck Dispatcher. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const dashboardPath =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "driver"
      ? "/driver"
      : "/shipper";

  return (
    <nav className="td-navbar">
      <div className="td-navbar__inner">
        {/* Logo */}
        <Link to="/" className="td-navbar__logo">
          <span className="td-navbar__logo-icon">🚛</span>
          <div>
            <span className="td-navbar__logo-name">Truck Dispatcher</span>
            <span className="td-navbar__logo-tag">Smart Logistics. Stronger Deliveries.</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="td-navbar__links">
          {["Home", "About", "Features", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }: { isActive: boolean }) =>
                  `td-navbar__link${isActive ? " td-navbar__link--active" : ""}`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="td-navbar__cta">
          {isAuthenticated ? (
            <>
              <Link to={dashboardPath} className="td-btn td-btn--outline">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="td-btn td-btn--primary">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="td-btn td-btn--outline">
                Login
              </Link>
              <Link to="/register" className="td-btn td-btn--primary">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="td-navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="td-navbar__mobile">
          {["Home", "About", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="td-navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button
              onClick={() => { handleLogout(); setMenuOpen(false); }}
              className="td-btn td-btn--primary"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="td-btn td-btn--outline" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="td-btn td-btn--primary" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
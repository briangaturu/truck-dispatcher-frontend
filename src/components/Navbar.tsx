import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

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

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Epilogue:wght@300;400;500;600&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          font-family: 'Epilogue', sans-serif;
        }

        /* Shimmer accent line at very top */
        .nav-accent {
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1);
          background-size: 200% 100%;
          animation: nav-shimmer 3s ease infinite;
        }
        @keyframes nav-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .nav-bar {
          background: rgba(244, 241, 236, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(99,102,241,0.08);
          box-shadow: 0 1px 20px rgba(0,0,0,0.04);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-logo-icon {
          width: 40px; height: 40px;
          border-radius: 13px;
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
          flex-shrink: 0;
        }
        .nav-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 800;
          color: #111827;
          line-height: 1;
        }
        .nav-logo-tagline {
          font-size: 10px;
          color: #9ca3af;
          font-weight: 400;
          margin-top: 3px;
          letter-spacing: 0.03em;
        }

        /* Desktop nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-link {
          position: relative;
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          color: #6b7280;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover {
          color: #111827;
          background: rgba(99,102,241,0.06);
        }
        .nav-link-active {
          color: #6366f1;
          font-weight: 600;
        }
        .nav-link-active:hover { color: #6366f1; }
        .nav-link-indicator {
          position: absolute;
          bottom: 4px; left: 50%;
          transform: translateX(-50%);
          height: 2px; width: 18px;
          border-radius: 2px;
          background: linear-gradient(90deg, #6366f1, #0ea5e9);
        }

        /* Action buttons */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-btn-ghost {
          padding: 7px 18px;
          border-radius: 12px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #374151;
          font-family: 'Epilogue', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
        }
        .nav-btn-ghost:hover {
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.04);
          transform: translateY(-1px);
        }
        .nav-btn-primary {
          position: relative;
          padding: 7px 20px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #4f46e5 50%, #0ea5e9);
          color: #fff;
          font-family: 'Epilogue', sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99,102,241,0.35);
          overflow: hidden;
          transition: transform 0.15s, box-shadow 0.2s;
        }
        .nav-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
        }
        .nav-btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(99,102,241,0.4);
        }

        /* Mobile hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          height: 2px; width: 22px;
          border-radius: 2px;
          background: #374151;
          transition: transform 0.25s, opacity 0.25s, width 0.25s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile menu */
        .nav-mobile {
          background: rgba(244, 241, 236, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(99,102,241,0.08);
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: nav-slide-down 0.25s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes nav-slide-down {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-link {
          display: block;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          color: #6b7280;
          transition: background 0.2s, color 0.2s;
        }
        .nav-mobile-link:hover { background: rgba(99,102,241,0.06); color: #111827; }
        .nav-mobile-link-active {
          background: rgba(99,102,241,0.08);
          color: #6366f1;
          font-weight: 600;
        }

        .nav-mobile-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
          margin: 10px 0;
        }

        .nav-mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .nav-mobile-btn-ghost {
          display: block;
          text-align: center;
          padding: 12px;
          border-radius: 14px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #374151;
          font-family: 'Epilogue', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .nav-mobile-btn-ghost:hover { border-color: rgba(99,102,241,0.3); }
        .nav-mobile-btn-primary {
          display: block;
          text-align: center;
          padding: 12px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #4f46e5 50%, #0ea5e9);
          color: #fff;
          font-family: 'Epilogue', sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(99,102,241,0.3);
        }

        @media (max-width: 1024px) {
          .nav-links, .nav-actions { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (min-width: 1025px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-accent" />
        <div className="nav-bar">
          <div className="nav-inner">
            {/* Logo */}
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">🚛</div>
              <div>
                <div className="nav-logo-name">Truck Dispatcher</div>
                <div className="nav-logo-tagline">Smart Logistics. Stronger Deliveries.</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="nav-links">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "nav-link-active" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && <span className="nav-link-indicator" />}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop actions */}
            <div className="nav-actions">
              {isAuthenticated ? (
                <>
                  <Link to={dashboardPath} className="nav-btn-ghost">Dashboard</Link>
                  <button onClick={handleLogout} className="nav-btn-primary">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-btn-ghost">Sign In</Link>
                  <Link to="/register" className="nav-btn-primary">Get Started →</Link>
                </>
              )}
            </div>

            {/* Hamburger */}
            <button
              className={`nav-hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="nav-mobile">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-mobile-link ${isActive ? "nav-mobile-link-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="nav-mobile-divider" />
              <div className="nav-mobile-actions">
                {isAuthenticated ? (
                  <>
                    <Link to={dashboardPath} onClick={() => setMenuOpen(false)} className="nav-mobile-btn-ghost">
                      Dashboard
                    </Link>
                    <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="nav-mobile-btn-primary">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMenuOpen(false)} className="nav-mobile-btn-ghost">
                      Sign In
                    </Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)} className="nav-mobile-btn-primary">
                      Get Started →
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
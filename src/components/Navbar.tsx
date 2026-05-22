import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { logout } from "../features/auth/authSlice";

interface NavbarProps {
  hideAuthButtons?: boolean;
}

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ hideAuthButtons = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const dashboardPath =
    user?.role === "ADMIN" ? "/admin"
    : user?.role === "DRIVER" ? "/driver"
    : user?.role === "FIELD_STAFF" ? "/field-staff"
    : user?.role === "DISPATCHER" ? "/dispatcher"
    : "/shipper";

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Accent line */}
      <div className="h-0.75 bg-linear-to-r from-indigo-500 via-sky-400 to-indigo-500 bg-size-[200%_100%] animate-pulse" />

      <div className="bg-[#f4f1ec]/90 backdrop-blur-lg border-b border-indigo-100 shadow-sm">
        <div className="max-w-6xl mx-auto h-17 flex items-center justify-between px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline shrink-0">
            <div className="w-10 h-10 rounded-[13px] bg-linear-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-lg shadow-lg shadow-indigo-200 shrink-0">
              🚛
            </div>
            <div>
              <p className="text-[15px] font-extrabold text-gray-900 leading-none font-serif">
                Truck Dispatcher
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5 tracking-wide">
                Smart Logistics. Stronger Deliveries.
              </p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-xl text-[13.5px] font-medium no-underline transition-colors duration-200
                    ${isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-500 hover:text-gray-900 hover:bg-indigo-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-linear-to-r from-indigo-500 to-sky-400" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            {isAuthenticated ? (
              <>
                <Link
                  to={dashboardPath}
                  className="px-4 py-1.5 rounded-xl border-[1.5px] border-gray-200 bg-white text-gray-700 text-[13px] font-semibold no-underline hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200 hover:-translate-y-px"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-1.5 rounded-xl border-none bg-linear-to-br from-indigo-500 via-indigo-600 to-sky-400 text-white text-[13px] font-semibold shadow-lg shadow-indigo-200 hover:-translate-y-px hover:shadow-xl transition-all duration-200 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : !hideAuthButtons ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-1.5 rounded-xl border-[1.5px] border-gray-200 bg-white text-gray-700 text-[13px] font-semibold no-underline hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200 hover:-translate-y-px"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-1.5 rounded-xl border-none bg-linear-to-br from-indigo-500 via-indigo-600 to-sky-400 text-white text-[13px] font-semibold no-underline shadow-lg shadow-indigo-200 hover:-translate-y-px hover:shadow-xl transition-all duration-200"
                >
                  Get Started →
                </Link>
              </>
            ) : null}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.25 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5.5 rounded-sm bg-gray-700 transition-all duration-250 ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5.5 rounded-sm bg-gray-700 transition-all duration-250 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block h-0.5 w-5.5 rounded-sm bg-gray-700 transition-all duration-250 ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#f4f1ec]/98 backdrop-blur-xl border-t border-indigo-50 px-6 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 rounded-xl text-sm font-medium no-underline transition-colors duration-200
                  ${isActive
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-gray-500 hover:bg-indigo-50 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent my-2.5" />

            <div className="flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to={dashboardPath}
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 rounded-xl border-[1.5px] border-gray-200 bg-white text-gray-700 text-sm font-semibold no-underline hover:border-indigo-200 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                    className="py-3 rounded-xl border-none bg-linear-to-br from-indigo-500 via-indigo-600 to-sky-400 text-white text-sm font-semibold shadow-lg shadow-indigo-200 cursor-pointer"
                  >
                    Logout
                  </button>
                </>
              ) : !hideAuthButtons ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 rounded-xl border-[1.5px] border-gray-200 bg-white text-gray-700 text-sm font-semibold no-underline hover:border-indigo-200 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 rounded-xl border-none bg-linear-to-br from-indigo-500 via-indigo-600 to-sky-400 text-white text-sm font-semibold no-underline shadow-lg shadow-indigo-200"
                  >
                    Get Started →
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
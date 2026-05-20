import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Dashboard", icon: "⊞", path: "/shipper" },
  { label: "Post Load", icon: "➕", path: "/shipper/post-load" },
  { label: "My Loads", icon: "📦", path: "/shipper/my-loads" },
  { label: "Track Shipment", icon: "📍", path: "/shipper/track" },
  { label: "Profile", icon: "👤", path: "/shipper/profile" },
];

const ShipperSidebar = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="w-56 dashboard-sidebar max-md:hidden">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🚛</div>
        <div className="sidebar-logo-text">
          <p className="sidebar-logo-title">Truck Dispatcher</p>
          <p className="sidebar-logo-subtitle">Smart Logistics</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/shipper"}
            className={({ isActive }) =>
              `sidebar-nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-nav-icon">{item.icon}</span>
            <span className="sidebar-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User footer */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            {user?.firstname?.[0]?.toUpperCase() || "S"}
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">{user?.firstname || "Shipper"}</p>
            <p className="sidebar-user-role">Shipper</p>
          </div>
        </div>
        <button
          className="sidebar-logout-btn"
          onClick={() => { dispatch(logout()); navigate("/"); }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default ShipperSidebar;

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Dashboard", icon: "⊞", path: "/admin" },
  { label: "Loads", icon: "📦", path: "/admin/loads" },
  { label: "Trucks", icon: "🚛", path: "/admin/trucks" },
  { label: "Drivers", icon: "👤", path: "/admin/drivers" },
  { label: "Dispatch", icon: "📡", path: "/admin/dispatch" },
  { label: "Tracking", icon: "📍", path: "/admin/tracking" },
  { label: "POD & Docs", icon: "📄", path: "/admin/pods" },
  { label: "Payments", icon: "💳", path: "/admin/payments" },
  { label: "Reports", icon: "📊", path: "/admin/reports" },
  { label: "Users", icon: "👥", path: "/admin/users" },
  { label: "Settings", icon: "⚙️", path: "/admin/settings" },
];

const AdminSidenav = () => {
  const { user } = useSelector((state: RootState) => state.auth);
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
            end={item.path === "/admin"}
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
            {user?.firstname?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">{user?.firstname || "Admin"}</p>
            <p className="sidebar-user-role">Administrator</p>
          </div>
        </div>
        <button
          className="sidebar-logout-btn"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidenav;

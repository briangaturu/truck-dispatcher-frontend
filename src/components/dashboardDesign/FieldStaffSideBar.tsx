import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Overview", icon: "📊", path: "/field-staff" },
  { label: "Assigned Loads", icon: "📦", path: "/field-staff/assigned-loads" },
  { label: "Confirm Pickup", icon: "✅", path: "/field-staff/confirm-pickup" },
  { label: "Upload POD", icon: "📤", path: "/field-staff/upload-pod" },
  { label: "Profile", icon: "👤", path: "/field-staff/profile" },
];

const FieldStaffSideBar = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="w-56 !bg-[#f1f5f9] dashboard-sidebar max-md:hidden">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🚛</div>
        <div className="sidebar-logo-text">
          <p className="sidebar-logo-title">Truck Dispatcher</p>
          <p className="sidebar-logo-subtitle">Field Staff Portal</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/field-staff"}
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
            {user?.firstname?.[0]?.toUpperCase() || "F"}
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">{user?.firstname || "Field Staff"}</p>
            <p className="sidebar-user-role">Field Staff</p>
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

export default FieldStaffSideBar;
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const FieldStaffSideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((s: RootState) => s.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="dashboard-sidebar w-56">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🚛</div>
        <div className="sidebar-logo-text">
          <h2 className="sidebar-logo-title">Truck Dispatch</h2>
          <p className="sidebar-logo-subtitle">Field Staff Portal</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/field-staff" end className="sidebar-nav-link">
          <span className="sidebar-nav-icon">📊</span>
          <span className="sidebar-nav-label">Overview</span>
        </NavLink>
        <NavLink to="/field-staff/assigned-loads" className="sidebar-nav-link">
          <span className="sidebar-nav-icon">📦</span>
          <span className="sidebar-nav-label">Assigned Loads</span>
        </NavLink>
        <NavLink to="/field-staff/confirm-pickup" className="sidebar-nav-link">
          <span className="sidebar-nav-icon">✅</span>
          <span className="sidebar-nav-label">Confirm Pickup</span>
        </NavLink>
        <NavLink to="/field-staff/upload-pod" className="sidebar-nav-link">
          <span className="sidebar-nav-icon">📤</span>
          <span className="sidebar-nav-label">Upload POD</span>
        </NavLink>
        <NavLink to="/field-staff/profile" className="sidebar-nav-link">
          <span className="sidebar-nav-icon">👤</span>
          <span className="sidebar-nav-label">Profile</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            {user?.name ? user.name[0].toUpperCase() : "F"}
          </div>
          <div className="sidebar-user-info">
            <p className="sidebar-user-name">{user?.name || "Field Staff"}</p>
            <p className="sidebar-user-role">Field Staff</p>
          </div>
        </div>
        <button onClick={handleLogout} className="sidebar-logout-btn">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default FieldStaffSideBar;

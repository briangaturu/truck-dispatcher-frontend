import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Dashboard", icon: "🏠", path: "/driver" },
  { label: "Active Load", icon: "📦", path: "/driver/active-load" },
  { label: "Load History", icon: "📋", path: "/driver/history" },
  { label: "Update Status", icon: "🔄", path: "/driver/status" },
  { label: "Upload POD", icon: "📤", path: "/driver/pod" },
  { label: "Profile", icon: "👤", path: "/driver/profile" },
];

const DriverSidebar = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="sidenav sidenav--driver">
      <div className="sidenav__logo">
        <span>🚛</span>
        <div>
          <span className="sidenav__logo-name">Truck Dispatcher</span>
        </div>
      </div>
      <nav className="sidenav__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/driver"}
            className={({ isActive }: { isActive: boolean }) =>
              `sidenav__link${isActive ? " sidenav__link--active" : ""}`
            }
          >
            <span className="sidenav__icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidenav__footer">
        <div className="sidenav__user">
          <div className="sidenav__avatar">{user?.name?.[0] || "D"}</div>
          <div>
            <div className="sidenav__user-name">{user?.name || "Driver"}</div>
            <div className="sidenav__user-role">Driver</div>
          </div>
        </div>
        <button
          className="sidenav__logout"
          onClick={() => { dispatch(logout()); navigate("/"); }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DriverSidebar;
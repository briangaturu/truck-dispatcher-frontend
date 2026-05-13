import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Dashboard", icon: "🏠", path: "/admin" },
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
    <aside className="sidenav">
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
            end={item.path === "/admin"}
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
          <div className="sidenav__avatar">{user?.name?.[0] || "A"}</div>
          <div>
            <div className="sidenav__user-name">{user?.name || "Admin"}</div>
            <div className="sidenav__user-role">Administrator</div>
          </div>
        </div>
        <button
          className="sidenav__logout"
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
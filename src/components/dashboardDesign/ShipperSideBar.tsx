import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const navItems = [
  { label: "Dashboard", icon: "🏠", path: "/shipper" },
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
    <aside className="sidenav sidenav--shipper">
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
            end={item.path === "/shipper"}
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
          <div className="sidenav__avatar">{user?.name?.[0] || "S"}</div>
          <div>
            <div className="sidenav__user-name">{user?.name || "Shipper"}</div>
            <div className="sidenav__user-role">Shipper</div>
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

export default ShipperSidebar;
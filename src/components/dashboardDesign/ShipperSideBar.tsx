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
    <aside className="w-56 bg-sidenav flex flex-col sticky top-0 h-screen overflow-y-auto shrink-0 max-md:hidden">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-4 border-b border-white/10">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm shrink-0">
          🚛
        </div>
        <div className="leading-tight">
          <div className="text-[12px] font-bold text-white leading-none">Truck Dispatcher</div>
          <div className="text-[10px] text-sidenav-text leading-none mt-0.5">Smart Logistics</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col px-2 pt-3 flex-1 gap-0.5">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/shipper"}
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center gap-2.5 py-2 px-3 rounded-lg text-[13px] font-medium transition-all duration-150 no-underline ${
                isActive
                  ? "bg-primary text-white"
                  : "text-sidenav-text hover:bg-sidenav-hover hover:text-white"
              }`
            }
          >
            <span className="text-sm shrink-0 w-4 text-center">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User footer */}
      <div className="p-3 border-t border-white/10">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
            {user?.name?.[0]?.toUpperCase() || "S"}
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-white truncate">{user?.name || "Shipper"}</div>
            <div className="text-[10px] text-sidenav-text">Shipper</div>
          </div>
        </div>
        <button
          className="w-full py-1.5 px-3 bg-white/5 border border-white/10 rounded-lg text-sidenav-text text-[11px] font-medium cursor-pointer transition-all duration-150 hover:bg-danger hover:text-white hover:border-danger"
          onClick={() => { dispatch(logout()); navigate("/"); }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default ShipperSidebar;

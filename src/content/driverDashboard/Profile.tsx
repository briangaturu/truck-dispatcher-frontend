import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const DriverProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-10 max-w-[480px] text-center shadow-card">
      <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-extrabold flex items-center justify-center mx-auto mb-5">
        {user?.name ? user.name[0] : "D"}
      </div>
      <div>
        <h2 className="font-display text-xl font-bold mb-2">{user?.name || "Driver Name"}</h2>
        <span className="td-badge td-badge--neutral">Driver</span>
        <p className="text-slate-500 text-sm mt-1.5">{user?.email || "driver@example.com"}</p>
        <p className="text-slate-500 text-sm mt-1.5">{user?.phone || "+254 711 345 678"}</p>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button className="td-btn td-btn--outline">Edit Profile</button>
      </div>
    </div>
  );
};

export default DriverProfile;
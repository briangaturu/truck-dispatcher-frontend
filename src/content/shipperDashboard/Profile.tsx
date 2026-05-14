import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const ShipperProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-10 max-w-[480px] text-center shadow-card">
      <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-extrabold flex items-center justify-center mx-auto mb-5">
        {user?.name ? user.name[0] : "S"}
      </div>
      <div>
        <h2 className="font-display text-xl font-bold mb-2">{user?.name || "Shipper Company"}</h2>
        <span className="td-badge td-badge--neutral">Shipper</span>
        <p className="text-slate-500 text-sm mt-1.5">{user?.email || "shipper@example.com"}</p>
        <p className="text-slate-500 text-sm mt-1.5">{user?.phone || "+254 722 111 222"}</p>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button className="td-btn td-btn--outline">Edit Profile</button>
      </div>
    </div>
  );
};

export default ShipperProfile;
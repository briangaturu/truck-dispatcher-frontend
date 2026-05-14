import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const AdminProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-[440px] text-center shadow-card">
      <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-extrabold flex items-center justify-center mx-auto mb-4">
        {user?.name ? user.name[0].toUpperCase() : "A"}
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-1.5">{user?.name || "Administrator"}</h2>
        <p className="my-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary capitalize">{user?.role || "admin"}</span>
        </p>
        <p className="text-slate-500 text-sm mt-1">{user?.email || "admin@truckdispatcher.com"}</p>
        <p className="text-slate-500 text-sm mt-1">{user?.phone || "+254 700 000 001"}</p>
      </div>
      <div className="flex gap-2.5 justify-center mt-5">
        <button className="td-btn td-btn--outline td-btn--sm">Edit Profile</button>
        <button className="td-btn td-btn--outline td-btn--sm">Change Password</button>
      </div>
    </div>
  );
};

export default AdminProfile;
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const FieldStaffProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-10 max-w-[480px] text-center shadow-card">
      <div className="w-20 h-20 rounded-full bg-primary text-white text-3xl font-extrabold flex items-center justify-center mx-auto mb-5">
        {user?.name ? user.name[0] : "F"}
      </div>
      <div>
        <h2 className="font-display text-xl font-bold mb-2">{user?.name || "Field Staff"}</h2>
        <span className="inline-flex items-center gap-1 py-1 px-2.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">Field Staff</span>
        <p className="text-slate-500 text-sm mt-1.5">{user?.email || "fieldstaff@example.com"}</p>
        <p className="text-slate-500 text-sm mt-1.5">{user?.phone || "+254 722 111 222"}</p>
      </div>
      <div className="flex gap-3 justify-center mt-6">
        <button className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-semibold text-sm bg-transparent text-primary border-2 border-primary transition-all duration-150 hover:bg-primary hover:text-white">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default FieldStaffProfile;

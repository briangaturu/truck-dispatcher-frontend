import { Routes, Route } from "react-router-dom";
import FieldStaffLayout from "../components/dashboardDesign/FieldStaffLayout";
import AssignedLoads from "../content/fieldStaffDashboard/AssignedLoads";
import ConfirmPickup from "../content/fieldStaffDashboard/ConfirmPickup";
import UploadPOD from "../content/fieldStaffDashboard/UploadPOD";
import FieldStaffProfile from "../content/fieldStaffDashboard/Profile";
import FieldStaffCard from "../components/dashboardDesign/FieldStaffCards";

const FieldStaffOverview = () => (
  <>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Field Operations</h3>
        <p className="text-xs text-slate-400 mt-1">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <FieldStaffCard title="Assigned Loads" value="5" icon="📦" bg="#eff6ff" delta="Active today" up={true} />
      <FieldStaffCard title="Pickups Confirmed" value="3" icon="✅" bg="#f0fdf4" delta="+1 today" up={true} />
      <FieldStaffCard title="PODs Uploaded" value="2" icon="📤" bg="#faf5ff" delta="Pending: 1" up={true} />
      <FieldStaffCard title="Completion Rate" value="95%" icon="⭐" bg="#fffbeb" delta="Excellent" up={true} />
    </div>
    <AssignedLoads />
  </>
);

const FieldStaffDashboard = () => (
  <Routes>
    <Route element={<FieldStaffLayout />}>
      <Route index element={<FieldStaffOverview />} />
      <Route path="assigned-loads" element={<AssignedLoads />} />
      <Route path="confirm-pickup" element={<ConfirmPickup />} />
      <Route path="upload-pod" element={<UploadPOD />} />
      <Route path="profile" element={<FieldStaffProfile />} />
    </Route>
  </Routes>
);

export default FieldStaffDashboard;

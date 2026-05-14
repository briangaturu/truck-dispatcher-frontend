import { Routes, Route } from "react-router-dom";
import DriverLayout from "../components/dashboardDesign/DriverLayout";
import ActiveLoad from "../content/driverDashboard/ActiveLoad";
import LoadHistory from "../content/driverDashboard/LoadHistory";
import StatusUpdater from "../content/driverDashboard/StatusUpdater";
import PODUpload from "../content/driverDashboard/PodUpload";
import DriverProfile from "../content/driverDashboard/Profile";
import DriverCard from "../components/dashboardDesign/DriverCards";

const DriverOverview = () => (
  <div className="p-6 flex flex-col gap-5 max-md:p-4">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Driver Dashboard</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <DriverCard title="Active Load" value="1" icon="📦" color="#2563eb" bg="#eff6ff" delta="Currently in transit" up={true} />
      <DriverCard title="Loads This Month" value="8" icon="✅" color="#16a34a" bg="#f0fdf4" delta="+2 from last month" up={true} />
      <DriverCard title="Deliveries Today" value="1" icon="🚛" color="#9333ea" bg="#faf5ff" delta="On schedule" up={true} />
      <DriverCard title="Rating" value="4.9 ★" icon="⭐" color="#d97706" bg="#fffbeb" delta="Excellent" up={true} />
    </div>
    <ActiveLoad />
  </div>
);

const DriverDashboard = () => (
  <Routes>
    <Route element={<DriverLayout />}>
      <Route index element={<DriverOverview />} />
      <Route path="active-load" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><ActiveLoad /></div>} />
      <Route path="history" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><LoadHistory /></div>} />
      <Route path="status" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><StatusUpdater /></div>} />
      <Route path="pod" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><PODUpload /></div>} />
      <Route path="profile" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><DriverProfile /></div>} />
    </Route>
  </Routes>
);

export default DriverDashboard;
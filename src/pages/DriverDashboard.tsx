import { Routes, Route } from "react-router-dom";
import DriverLayout from "../components/dashboardDesign/DriverLayout";
import ActiveLoad from "../content/driverDashboard/ActiveLoad";
import LoadHistory from "../content/driverDashboard/LoadHistory";
import StatusUpdater from "../content/driverDashboard/StatusUpdater";
import PODUpload from "../content/driverDashboard/PodUpload";
import DriverProfile from "../content/driverDashboard/Profile";
import DriverCard from "../components/dashboardDesign/DriverCards";

const DriverOverview = () => (
  <>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Your Performance</h3>
        <p className="text-xs text-slate-400 mt-1">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <DriverCard title="Active Load" value="1" icon="📦" bg="#eff6ff" delta="Currently in transit" up={true} />
      <DriverCard title="Loads This Month" value="8" icon="✅" bg="#f0fdf4" delta="+2 from last month" up={true} />
      <DriverCard title="Deliveries Today" value="1" icon="🚛" bg="#faf5ff" delta="On schedule" up={true} />
      <DriverCard title="Rating" value="4.9 ★" icon="⭐" bg="#fffbeb" delta="Excellent" up={true} />
    </div>
    <ActiveLoad />
  </>
);

const DriverDashboard = () => (
  <Routes>
    <Route element={<DriverLayout />}>
      <Route index element={<DriverOverview />} />
      <Route path="active-load" element={<ActiveLoad />} />
      <Route path="history" element={<LoadHistory />} />
      <Route path="status" element={<StatusUpdater />} />
      <Route path="pod" element={<PODUpload />} />
      <Route path="profile" element={<DriverProfile />} />
    </Route>
  </Routes>
);

export default DriverDashboard;
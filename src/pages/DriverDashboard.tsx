import { Routes, Route } from "react-router-dom";
import DriverLayout from "../components/dashboardDesign/DriverLayout";
import ActiveLoad from "../content/driverDashboard/ActiveLoad";
import LoadHistory from "../content/driverDashboard/LoadHistory";
import StatusUpdater from "../content/driverDashboard/StatusUpdater";
import PODUpload from "../content/driverDashboard/PodUpload";
import DriverProfile from "../content/driverDashboard/Profile";
import DriverCard from "../components/dashboardDesign/DriverCards";

const DriverOverview = () => (
  <div className="dashboard-content">
    <div className="dashboard-topbar">
      <h2>Driver Dashboard</h2>
    </div>
    <div className="admin-stat-cards">
      <DriverCard title="Active Load" value="1" icon="📦" color="#2563eb" />
      <DriverCard title="Loads This Month" value="8" icon="✅" color="#16a34a" />
      <DriverCard title="Deliveries Today" value="1" icon="🚛" color="#9333ea" />
      <DriverCard title="Rating" value="4.9 ★" icon="⭐" color="#d97706" />
    </div>
    <ActiveLoad />
  </div>
);

const DriverDashboard = () => (
  <Routes>
    <Route element={<DriverLayout />}>
      <Route index element={<DriverOverview />} />
      <Route path="active-load" element={<div className="dashboard-content"><ActiveLoad /></div>} />
      <Route path="history" element={<div className="dashboard-content"><LoadHistory /></div>} />
      <Route path="status" element={<div className="dashboard-content"><StatusUpdater /></div>} />
      <Route path="pod" element={<div className="dashboard-content"><PODUpload /></div>} />
      <Route path="profile" element={<div className="dashboard-content"><DriverProfile /></div>} />
    </Route>
  </Routes>
);

export default DriverDashboard;
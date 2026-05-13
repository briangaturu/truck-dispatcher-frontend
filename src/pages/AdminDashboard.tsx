import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/dashboardDesign/AdminLayout";
import AdminHero from "../content/adminDashboard/Hero";
import AllLoads from "../content/adminDashboard/AllLoads";
import AllTrucks from "../content/adminDashboard/AllTrucks";
import AllDrivers from "../content/adminDashboard/AllDrivers";
import AllUsers from "../content/adminDashboard/AllUsers";
import AllPayments from "../content/adminDashboard/AllPayments";
import AllPODs from "../content/adminDashboard/AllPods";
import DispatchPanel from "../content/adminDashboard/DispatchPanel";
import AdminProfile from "../content/adminDashboard/profile";
import Analytics from "../content/adminDashboard/Analytics";
import RevenueChart from "../content/adminDashboard/RevenueChart";
import LatestLoadsTable from "../content/adminDashboard/LatestLoads";

// Admin overview (default /admin route)
const AdminOverview = () => (
  <div className="dashboard-content">
    <div className="dashboard-topbar">
      <h2>Dashboard</h2>
      <span className="dashboard-date">{new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}</span>
    </div>
    <AdminHero />
    <div className="dashboard-two-col">
      <RevenueChart />
      <Analytics />
    </div>
    <LatestLoadsTable />
  </div>
);

const AdminDashboard = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<AdminOverview />} />
      <Route path="loads" element={<div className="dashboard-content"><AllLoads /></div>} />
      <Route path="trucks" element={<div className="dashboard-content"><AllTrucks /></div>} />
      <Route path="drivers" element={<div className="dashboard-content"><AllDrivers /></div>} />
      <Route path="users" element={<div className="dashboard-content"><AllUsers /></div>} />
      <Route path="payments" element={<div className="dashboard-content"><AllPayments /></div>} />
      <Route path="pods" element={<div className="dashboard-content"><AllPODs /></div>} />
      <Route path="dispatch" element={<div className="dashboard-content"><DispatchPanel /></div>} />
      <Route path="profile" element={<div className="dashboard-content"><AdminProfile /></div>} />
    </Route>
  </Routes>
);

export default AdminDashboard;
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
  <>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Quick Overview</h3>
        <p className="text-xs text-slate-400 mt-1">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition text-sm" title="Refresh">↻</button>
        <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition text-sm" title="Settings">⚙</button>
      </div>
    </div>
    <AdminHero />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RevenueChart />
      <Analytics />
    </div>
    <LatestLoadsTable />
  </>
);

const AdminDashboard = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<AdminOverview />} />
      <Route path="loads" element={<AllLoads />} />
      <Route path="trucks" element={<AllTrucks />} />
      <Route path="drivers" element={<AllDrivers />} />
      <Route path="users" element={<AllUsers />} />
      <Route path="payments" element={<AllPayments />} />
      <Route path="pods" element={<AllPODs />} />
      <Route path="dispatch" element={<DispatchPanel />} />
      <Route path="profile" element={<AdminProfile />} />
    </Route>
  </Routes>
);

export default AdminDashboard;
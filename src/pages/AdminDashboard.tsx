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
  <div className="p-6 flex flex-col gap-5 max-md:p-4">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Dashboard</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition text-sm" title="Refresh">↻</button>
        <button className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition text-sm" title="Settings">⚙</button>
      </div>
    </div>
    <AdminHero />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
      <Route path="loads" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllLoads /></div>} />
      <Route path="trucks" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllTrucks /></div>} />
      <Route path="drivers" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllDrivers /></div>} />
      <Route path="users" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllUsers /></div>} />
      <Route path="payments" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllPayments /></div>} />
      <Route path="pods" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AllPODs /></div>} />
      <Route path="dispatch" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><DispatchPanel /></div>} />
      <Route path="profile" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><AdminProfile /></div>} />
    </Route>
  </Routes>
);

export default AdminDashboard;
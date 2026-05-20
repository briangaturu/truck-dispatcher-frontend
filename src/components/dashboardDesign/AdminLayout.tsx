import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import AdminSidenav from "./AdminSideNav";

const AdminLayout = () => (
  <>
    <Navbar />
    <div className="flex min-h-screen bg-[#f1f5f9]">
      <AdminSidenav />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <div className="dashboard-header">
          <div className="dashboard-header-content max-w-7xl mx-auto">
            <h1>Administration Panel</h1>
            <p>Manage your fleet, loads, drivers, and operations</p>
          </div>
        </div>
        <div className="dashboard-container max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </>
);

export default AdminLayout;
import { Outlet } from "react-router-dom";
import AdminSidenav from "./AdminSideNav";

const AdminLayout = () => (
  <div className="flex min-h-screen bg-[#f1f5f9]">
    <AdminSidenav />
    <main className="flex-1 overflow-y-auto min-h-screen">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
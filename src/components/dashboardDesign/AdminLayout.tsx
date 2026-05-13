import { Outlet } from "react-router-dom";
import AdminSidenav from "./AdminSideNav";

const AdminLayout = () => (
  <div className="dashboard-layout">
    <AdminSidenav />
    <main className="dashboard-main">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
import { Outlet } from "react-router-dom";
import DriverSidebar from "./DriverSideBar";

const DriverLayout = () => (
  <div className="dashboard-layout">
    <DriverSidebar />
    <main className="dashboard-main">
      <Outlet />
    </main>
  </div>
);

export default DriverLayout;
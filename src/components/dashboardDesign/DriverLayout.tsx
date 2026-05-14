import { Outlet } from "react-router-dom";
import DriverSidebar from "./DriverSideBar";

const DriverLayout = () => (
  <div className="flex min-h-screen bg-[#f1f5f9]">
    <DriverSidebar />
    <main className="flex-1 overflow-y-auto min-h-screen">
      <Outlet />
    </main>
  </div>
);

export default DriverLayout;
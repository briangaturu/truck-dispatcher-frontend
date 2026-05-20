import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import DriverSidebar from "./DriverSideBar";

const DriverLayout = () => (
  <>
    <Navbar />
    <div className="flex min-h-screen">
      <DriverSidebar />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <div className="dashboard-header">
          <div className="dashboard-header-content max-w-7xl mx-auto">
            <h1>Driver Dashboard</h1>
            <p>Track your loads, deliveries, and performance metrics</p>
          </div>
        </div>
        <div className="dashboard-container max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </>
);

export default DriverLayout;
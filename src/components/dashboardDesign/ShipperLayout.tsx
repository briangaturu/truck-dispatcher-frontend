import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import ShipperSidebar from "./ShipperSideBar";

const ShipperLayout = () => (
  <>
    <Navbar />
    <div className="flex min-h-screen bg-[#f1f5f9]">
      <ShipperSidebar />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <div className="dashboard-header">
          <div className="dashboard-header-content max-w-7xl mx-auto">
            <h1>Shipper Dashboard</h1>
            <p>Post loads, track shipments, and manage your logistics</p>
          </div>
        </div>
        <div className="dashboard-container max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </>
);

export default ShipperLayout;
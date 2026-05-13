import { Outlet } from "react-router-dom";
import ShipperSidebar from "./ShipperSideBar";

const ShipperLayout = () => (
  <div className="dashboard-layout">
    <ShipperSidebar />
    <main className="dashboard-main">
      <Outlet />
    </main>
  </div>
);

export default ShipperLayout;
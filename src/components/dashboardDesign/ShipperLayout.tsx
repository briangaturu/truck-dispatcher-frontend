import { Outlet } from "react-router-dom";
import ShipperSidebar from "./ShipperSideBar";

const ShipperLayout = () => (
  <div className="flex min-h-screen bg-[#f1f5f9]">
    <ShipperSidebar />
    <main className="flex-1 overflow-y-auto min-h-screen">
      <Outlet />
    </main>
  </div>
);

export default ShipperLayout;
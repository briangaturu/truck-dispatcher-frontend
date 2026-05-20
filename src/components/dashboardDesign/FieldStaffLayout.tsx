import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import FieldStaffSideBar from "./FieldStaffSideBar";

const FieldStaffLayout = () => (
  <>
    <Navbar />
    <div className="flex min-h-screen">
      <FieldStaffSideBar />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <div className="dashboard-header">
          <div className="dashboard-header-content max-w-7xl mx-auto">
            <h1>Field Staff Dashboard</h1>
            <p>Manage assigned loads and field operations</p>
          </div>
        </div>
        <div className="dashboard-container max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  </>
);

export default FieldStaffLayout;
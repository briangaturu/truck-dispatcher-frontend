import { Outlet } from "react-router-dom";
import FieldStaffSideBar from "./FieldStaffSideBar";

const FieldStaffLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <FieldStaffSideBar />
      <div className="flex-1 flex flex-col ml-56">
        <div className="dashboard-header">
          <div className="dashboard-header-content">
            <h1>Field Staff Dashboard</h1>
            <p>Manage assigned loads and field operations</p>
          </div>
        </div>
        <div className="dashboard-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FieldStaffLayout;

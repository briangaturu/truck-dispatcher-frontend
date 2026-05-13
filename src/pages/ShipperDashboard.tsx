import { Routes, Route } from "react-router-dom";
import ShipperLayout from "../components/dashboardDesign/ShipperLayout";
import PostLoadForm from "../content/shipperDashboard/PostLoadForm";
import MyLoads from "../content/shipperDashboard/MyLoads";
import TrackShipment from "../content/shipperDashboard/TrackShipment";
import ShipperProfile from "../content/shipperDashboard/Profile";
import ShipperCard from "../components/dashboardDesign/ShipperCards";

const ShipperOverview = () => (
  <div className="dashboard-content">
    <div className="dashboard-topbar">
      <h2>Shipper Dashboard</h2>
    </div>
    <div className="admin-stat-cards">
      <ShipperCard title="My Loads" value="12" icon="📦" color="#2563eb" />
      <ShipperCard title="In Transit" value="3" icon="🚛" color="#16a34a" />
      <ShipperCard title="Delivered" value="8" icon="✅" color="#9333ea" />
      <ShipperCard title="Pending" value="1" icon="⏳" color="#ea580c" />
    </div>
    <MyLoads />
  </div>
);

const ShipperDashboard = () => (
  <Routes>
    <Route element={<ShipperLayout />}>
      <Route index element={<ShipperOverview />} />
      <Route path="post-load" element={<div className="dashboard-content"><PostLoadForm /></div>} />
      <Route path="my-loads" element={<div className="dashboard-content"><MyLoads /></div>} />
      <Route path="track" element={<div className="dashboard-content"><TrackShipment /></div>} />
      <Route path="profile" element={<div className="dashboard-content"><ShipperProfile /></div>} />
    </Route>
  </Routes>
);

export default ShipperDashboard;
import { Routes, Route } from "react-router-dom";
import ShipperLayout from "../components/dashboardDesign/ShipperLayout";
import PostLoadForm from "../content/shipperDashboard/PostLoadForm";
import MyLoads from "../content/shipperDashboard/MyLoads";
import TrackShipment from "../content/shipperDashboard/TrackShipment";
import ShipperProfile from "../content/shipperDashboard/Profile";
import ShipperCard from "../components/dashboardDesign/ShipperCards";

const ShipperOverview = () => (
  <div className="p-6 flex flex-col gap-5 max-md:p-4">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-slate-900">Shipper Dashboard</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ShipperCard title="My Loads" value="12" icon="📦" color="#2563eb" bg="#eff6ff" delta="+2 this week" up={true} />
      <ShipperCard title="In Transit" value="3" icon="🚛" color="#16a34a" bg="#f0fdf4" delta="Active now" up={true} />
      <ShipperCard title="Delivered" value="8" icon="✅" color="#9333ea" bg="#faf5ff" delta="+3 this month" up={true} />
      <ShipperCard title="Pending" value="1" icon="⏳" color="#f59e0b" bg="#fffbeb" delta="Awaiting dispatch" up={false} />
    </div>
    <MyLoads />
  </div>
);

const ShipperDashboard = () => (
  <Routes>
    <Route element={<ShipperLayout />}>
      <Route index element={<ShipperOverview />} />
      <Route path="post-load" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><PostLoadForm /></div>} />
      <Route path="my-loads" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><MyLoads /></div>} />
      <Route path="track" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><TrackShipment /></div>} />
      <Route path="profile" element={<div className="p-6 flex flex-col gap-5 max-md:p-4"><ShipperProfile /></div>} />
    </Route>
  </Routes>
);

export default ShipperDashboard;
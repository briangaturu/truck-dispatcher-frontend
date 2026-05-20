import { Routes, Route } from "react-router-dom";
import ShipperLayout from "../components/dashboardDesign/ShipperLayout";
import PostLoadForm from "../content/shipperDashboard/PostLoadForm";
import MyLoads from "../content/shipperDashboard/MyLoads";
import TrackShipment from "../content/shipperDashboard/TrackShipment";
import ShipperProfile from "../content/shipperDashboard/Profile";
import ShipperCard from "../components/dashboardDesign/ShipperCards";

const ShipperOverview = () => (
  <>
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Your Shipments</h3>
        <p className="text-xs text-slate-400 mt-1">
          {new Date().toLocaleDateString("en-KE", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ShipperCard title="My Loads" value="12" icon="📦" bg="#eff6ff" delta="+2 this week" up={true} />
      <ShipperCard title="In Transit" value="3" icon="🚛" bg="#f0fdf4" delta="Active now" up={true} />
      <ShipperCard title="Delivered" value="8" icon="✅" bg="#faf5ff" delta="+3 this month" up={true} />
      <ShipperCard title="Pending" value="1" icon="⏳" bg="#fffbeb" delta="Awaiting dispatch" up={false} />
    </div>
    <MyLoads />
  </>
);

const ShipperDashboard = () => (
  <Routes>
    <Route element={<ShipperLayout />}>
      <Route index element={<ShipperOverview />} />
      <Route path="post-load" element={<PostLoadForm />} />
      <Route path="my-loads" element={<MyLoads />} />
      <Route path="track" element={<TrackShipment />} />
      <Route path="profile" element={<ShipperProfile />} />
    </Route>
  </Routes>
);

export default ShipperDashboard;
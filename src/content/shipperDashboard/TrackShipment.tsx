import { useState } from "react";
import { useGetTrackingByLoadQuery } from "../../features/api/trackingApi";

const mockEvents = [
  { id: "t1", loadId: "LD-2026-0001", status: "Load Created", location: "Nairobi", timestamp: "May 18, 2026 09:00 AM" },
  { id: "t2", loadId: "LD-2026-0001", status: "Dispatched", location: "Nairobi Depot", timestamp: "May 18, 2026 09:18 AM" },
  { id: "t3", loadId: "LD-2026-0001", status: "In Transit", location: "Voi, Kenya", timestamp: "May 18, 2026 10:00 AM" },
];

const TrackShipment = () => {
  const [loadId, setLoadId] = useState("LD-2026-0001");
  const [search, setSearch] = useState("LD-2026-0001");
  const { data: events = [], isFetching } = useGetTrackingByLoadQuery(search);
  const display = events.length > 0 ? events : mockEvents;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
      <h3 className="font-display text-lg font-bold mb-5">Track Shipment</h3>
      <div className="flex gap-2.5 mb-6">
        <input
          value={loadId}
          onChange={(e) => setLoadId(e.target.value)}
          placeholder="Enter Load ID..."
          className="flex-1 py-2.5 px-3.5 border border-slate-200 rounded-[10px] text-sm outline-none focus:border-primary"
        />
        <button className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-semibold text-sm bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark disabled:opacity-60 disabled:cursor-not-allowed" onClick={() => setSearch(loadId)}>Track</button>
      </div>
      {isFetching ? <div className="py-10 text-center text-slate-500 text-sm">Fetching tracking info...</div> : (
        <div className="flex flex-col gap-0 pl-4">
          {display.map((e, i) => (
            <div key={e.id} className="flex gap-4 pb-6 relative">
              {/* Vertical line */}
              {i < display.length - 1 && (
                <div className="absolute left-[-8px] top-5 bottom-0 w-0.5 bg-slate-200" />
              )}
              {/* Dot */}
              <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shrink-0 mt-1 relative z-10 ${
                i === display.length - 1 ? "bg-primary" : "bg-slate-200"
              }`} />
              {/* Content */}
              <div className="flex flex-col gap-0.5">
                <strong className="text-sm font-semibold">{e.status}</strong>
                <span className="text-sm text-slate-500">{e.location}</span>
                <small className="text-xs text-slate-400">{e.timestamp}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackShipment;
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
    <div className="td-table-card">
      <h3>Track Shipment</h3>
      <div className="track-search">
        <input value={loadId} onChange={(e) => setLoadId(e.target.value)} placeholder="Enter Load ID..." />
        <button className="td-btn td-btn--primary" onClick={() => setSearch(loadId)}>Track</button>
      </div>
      {isFetching ? <div className="td-loading">Fetching tracking info...</div> : (
        <div className="timeline">
          {display.map((e, i) => (
            <div key={e.id} className={`timeline__item${i === display.length - 1 ? " timeline__item--active" : ""}`}>
              <div className="timeline__dot" />
              <div className="timeline__content">
                <strong>{e.status}</strong>
                <span>{e.location}</span>
                <small>{e.timestamp}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackShipment;
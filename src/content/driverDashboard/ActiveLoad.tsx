// ActiveLoad.tsx
import { useGetLoadsQuery } from "../../features/api/loadsApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const ActiveLoad = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const { data: loads = [] } = useGetLoadsQuery();
  const active = loads.find(
    (l) => l.driverId === user?.id && l.status === "in_transit"
  );

  const mock = {
    id: "LD-2026-0001",
    origin: "Nairobi",
    destination: "Mombasa",
    cargo: "Electronics",
    weight: 12500,
    status: "in_transit",
    truckId: "KCD 123A",
  };

  const load = active || mock;

  return (
    <div className="td-table-card">
      <h3>Active Load</h3>
      <div className="load-detail-grid">
        <div className="load-detail-item"><strong>Load ID</strong><span className="td-link">{load.id}</span></div>
        <div className="load-detail-item"><strong>Origin</strong><span>{load.origin}</span></div>
        <div className="load-detail-item"><strong>Destination</strong><span>{load.destination}</span></div>
        <div className="load-detail-item"><strong>Cargo</strong><span>{load.cargo}</span></div>
        <div className="load-detail-item"><strong>Weight</strong><span>{load.weight.toLocaleString()} kg</span></div>
        <div className="load-detail-item"><strong>Truck</strong><span>{load.truckId}</span></div>
        <div className="load-detail-item"><strong>Status</strong>
          <span className="td-badge" style={{ background: "#2563eb18", color: "#2563eb" }}>In Transit</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveLoad;
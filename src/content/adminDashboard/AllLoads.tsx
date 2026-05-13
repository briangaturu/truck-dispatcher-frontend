import { useGetLoadsQuery } from "../../features/api/loadsApi";
import type { Load, LoadStatus } from "../../utils/types";

const statusColor: Record<LoadStatus, string> = {
  in_transit: "#2563eb",
  delivered: "#16a34a",
  pending: "#ea580c",
  cancelled: "#dc2626",
  dispatched: "#9333ea",
};

const AllLoads = () => {
  const { data: loads = [], isLoading } = useGetLoadsQuery();

  // Mock data for UI
  const mockLoads: Load[] = [
    { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "t1", shipperId: "s1", status: "in_transit", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-18", updatedAt: "2026-05-18" },
    { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driverId: "d2", truckId: "t2", shipperId: "s2", status: "delivered", cargo: "Food", weight: 8000, quantity: 15, createdAt: "2026-05-17", updatedAt: "2026-05-18" },
    { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driverId: "d3", truckId: "t3", shipperId: "s3", status: "pending", cargo: "Machinery", weight: 22000, quantity: 5, createdAt: "2026-05-16", updatedAt: "2026-05-17" },
    { id: "LD-2026-0004", origin: "Nakuru", destination: "Eldoret", driverId: "d1", truckId: "t4", shipperId: "s1", status: "in_transit", cargo: "Textiles", weight: 6000, quantity: 40, createdAt: "2026-05-15", updatedAt: "2026-05-17" },
    { id: "LD-2026-0005", origin: "Nairobi", destination: "Nakuru", driverId: "d4", truckId: "t1", shipperId: "s4", status: "cancelled", cargo: "Chemicals", weight: 9000, quantity: 10, createdAt: "2026-05-14", updatedAt: "2026-05-16" },
  ];

  const displayLoads = loads.length > 0 ? loads : mockLoads;

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>All Loads</h3>
        <button className="td-btn td-btn--primary td-btn--sm">+ New Load</button>
      </div>
      {isLoading ? (
        <div className="td-loading">Loading loads...</div>
      ) : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Load ID</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Driver</th>
                <th>Truck</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {displayLoads.map((l) => (
                <tr key={l.id}>
                  <td><span className="td-link">{l.id}</span></td>
                  <td>{l.origin}</td>
                  <td>{l.destination}</td>
                  <td>{l.driverId || "—"}</td>
                  <td>{l.truckId || "—"}</td>
                  <td>
                    <span
                      className="td-badge"
                      style={{
                        background: `${statusColor[l.status]}18`,
                        color: statusColor[l.status],
                      }}
                    >
                      {l.status.replace("_", " ")}
                    </span>
                  </td>
                  <td>{l.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllLoads;
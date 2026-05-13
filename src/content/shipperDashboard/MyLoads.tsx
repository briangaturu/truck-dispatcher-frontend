import { useGetLoadsQuery } from "../../features/api/loadsApi";
import type { Load } from "../../utils/types";

const mockMyLoads: Load[] = [
  { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driverId: undefined, truckId: undefined, shipperId: "current_user", status: "pending", cargo: "Machinery", weight: 22000, quantity: 5, createdAt: "2026-05-16", updatedAt: "2026-05-17" },
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "t1", shipperId: "current_user", status: "in_transit", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-10", updatedAt: "2026-05-18" },
];

const statusColor: Record<string, string> = {
  in_transit: "#2563eb", delivered: "#16a34a", pending: "#ea580c", cancelled: "#dc2626", dispatched: "#9333ea",
};

const MyLoads = () => {
  const { data: loads = [] } = useGetLoadsQuery();
  const myLoads = loads.filter((l) => l.shipperId === "current_user");
  const display = myLoads.length > 0 ? myLoads : mockMyLoads;

  return (
    <div className="td-table-card">
      <h3>My Loads</h3>
      <div className="td-table-wrap">
        <table className="td-table">
          <thead>
            <tr><th>Load ID</th><th>Origin</th><th>Destination</th><th>Cargo</th><th>Status</th><th>Posted</th></tr>
          </thead>
          <tbody>
            {display.map((l) => (
              <tr key={l.id}>
                <td><span className="td-link">{l.id}</span></td>
                <td>{l.origin}</td>
                <td>{l.destination}</td>
                <td>{l.cargo}</td>
                <td><span className="td-badge" style={{ background: `${statusColor[l.status]}18`, color: statusColor[l.status] }}>{l.status.replace("_", " ")}</span></td>
                <td>{l.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoads;
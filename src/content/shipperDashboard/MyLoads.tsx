import { useGetLoadsQuery } from "../../features/api/loadsApi";
import type { Load } from "../../utils/types";

const mockMyLoads: Load[] = [
  { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driverId: undefined, truckId: undefined, shipperId: "current_user", status: "pending", cargo: "Machinery", weight: 22000, quantity: 5, createdAt: "2026-05-16", updatedAt: "2026-05-17" },
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "t1", shipperId: "current_user", status: "in_transit", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-10", updatedAt: "2026-05-18" },
];

const statusColor: Record<string, string> = {
  in_transit: "#2563eb", delivered: "#16a34a", pending: "#ea580c", cancelled: "#dc2626", dispatched: "#9333ea",
};

const th = "text-left p-2.5 px-3.5 bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "p-3 px-3.5 border-b border-slate-200 align-middle";

const MyLoads = () => {
  const { data: loadsResponse = [], isLoading } = useGetLoadsQuery();
  
  // Handle both array and wrapped response
  const loads = Array.isArray(loadsResponse) ? loadsResponse : [];
  const myLoads = loads.filter((l) => l.shipperId === "current_user");
  const display = myLoads.length > 0 ? myLoads : mockMyLoads;

  if (isLoading) {
    return (
      <div className="dashboard-card">
        <div className="p-10 text-center text-slate-500 text-sm">Loading loads...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h3 className="dashboard-card-title">My Loads</h3>
          <p className="dashboard-card-subtitle">All your posted shipments</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="dashboard-table">
          <thead>
            <tr><th className={th}>Load ID</th><th className={th}>Origin</th><th className={th}>Destination</th><th className={th}>Cargo</th><th className={th}>Status</th><th className={th}>Posted</th></tr>
          </thead>
          <tbody>
            {display.map((l) => (
              <tr key={l.id}>
                <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{l.id}</span></td>
                <td className={td}>{l.origin}</td>
                <td className={td}>{l.destination}</td>
                <td className={td}>{l.cargo}</td>
                <td className={td}><span className="status-badge" style={{ background: `${statusColor[l.status]}18`, color: statusColor[l.status] }}>{l.status.replace("_", " ")}</span></td>
                <td className={td}>{l.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoads;
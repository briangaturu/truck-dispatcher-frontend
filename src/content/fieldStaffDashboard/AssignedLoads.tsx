import { useState } from "react";
import { useGetLoadsQuery } from "../../features/api/loadsApi";
import type { Load } from "../../utils/types";

const mockAssignedLoads: Load[] = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "KCD 123A", shipperId: "s1", status: "dispatched", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-18", updatedAt: "2026-05-18" },
  { id: "LD-2026-0004", origin: "Nakuru", destination: "Eldoret", driverId: "d2", truckId: "KCD 246D", shipperId: "s1", status: "in_transit", cargo: "Textiles", weight: 6000, quantity: 40, createdAt: "2026-05-15", updatedAt: "2026-05-17" },
];

const statusColor: Record<string, string> = {
  in_transit: "#2563eb", delivered: "#16a34a", pending: "#ea580c", cancelled: "#dc2626", dispatched: "#9333ea",
};

const th = "text-left p-2.5 px-3.5 bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "p-3 px-3.5 border-b border-slate-200 align-middle";

const AssignedLoads = () => {
  const { data: loadsResponse = [], isLoading } = useGetLoadsQuery();
  const [search, setSearch] = useState("");
  
  const loads = Array.isArray(loadsResponse) ? loadsResponse : [];
  const assignedLoads = loads.filter((l) => l.status === "dispatched" || l.status === "in_transit");
  const display = assignedLoads.length > 0 ? assignedLoads : mockAssignedLoads;
  
  const filtered = display.filter(
    (l) => !search || l.id.toLowerCase().includes(search.toLowerCase()) || l.origin.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="dashboard-card">
        <div className="p-10 text-center text-slate-500 text-sm">Loading assigned loads...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h3 className="dashboard-card-title">Assigned Loads</h3>
          <p className="dashboard-card-subtitle">Loads assigned to field operations</p>
        </div>
        <div className="relative">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search loads..."
            className="pl-7 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-44"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th className={th}>Load ID</th>
              <th className={th}>Origin</th>
              <th className={th}>Destination</th>
              <th className={th}>Cargo</th>
              <th className={th}>Driver</th>
              <th className={th}>Truck</th>
              <th className={th}>Status</th>
              <th className={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((l) => (
              <tr key={l.id}>
                <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{l.id}</span></td>
                <td className={td}>{l.origin}</td>
                <td className={td}>{l.destination}</td>
                <td className={td}>{l.cargo}</td>
                <td className={td}>{l.driverId || "—"}</td>
                <td className={td}>{l.truckId || "—"}</td>
                <td className={td}>
                  <span className="status-badge" style={{ background: `${statusColor[l.status]}18`, color: statusColor[l.status] }}>
                    {l.status.replace("_", " ")}
                  </span>
                </td>
                <td className={td}>
                  <button className="text-xs text-primary font-medium hover:underline">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedLoads;

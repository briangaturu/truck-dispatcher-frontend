import { Link } from "react-router-dom";

const loads = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driver: "John Kamau", truck: "KCD 123A", status: "in_transit", date: "May 18, 2026" },
  { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driver: "Peter Odhiambo", truck: "KCE 456B", status: "delivered", date: "May 17, 2026" },
  { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driver: "James Kariuki", truck: "KCF 789C", status: "pending", date: "May 16, 2026" },
  { id: "LD-2026-0004", origin: "Nakuru", destination: "Eldoret", driver: "Alex Mutua", truck: "KCD 246D", status: "in_transit", date: "May 17, 2026" },
  { id: "LD-2026-0005", origin: "Nairobi", destination: "Nakuru", driver: "Samuel Okello", truck: "KCH 135E", status: "cancelled", date: "May 16, 2026" },
];

const statusMeta: Record<string, { label: string; color: string; bg: string }> = {
  in_transit: { label: "In Transit", color: "#2563eb", bg: "#eff6ff" },
  delivered: { label: "Delivered", color: "#16a34a", bg: "#f0fdf4" },
  pending: { label: "Pending", color: "#f59e0b", bg: "#fffbeb" },
  cancelled: { label: "Cancelled", color: "#ef4444", bg: "#fef2f2" },
};

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const LatestLoadsTable = () => (
  <div className="dashboard-card">
    <div className="dashboard-card-header">
      <div>
        <h3 className="dashboard-card-title">Recent Loads</h3>
        <p className="dashboard-card-subtitle">Latest shipments in the system</p>
      </div>
      <Link to="/admin/loads" className="text-xs font-medium text-primary hover:underline">View All →</Link>
    </div>
    <div className="overflow-x-auto">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th className={th}>Load ID</th>
            <th className={th}>Origin</th>
            <th className={th}>Destination</th>
            <th className={th}>Driver</th>
            <th className={th}>Truck</th>
            <th className={th}>Status</th>
            <th className={th}>Updated</th>
          </tr>
        </thead>
        <tbody>
          {loads.map((l) => {
            const s = statusMeta[l.status];
            return (
              <tr key={l.id}>
                <td className={td}>
                  <Link to="/admin/loads" className="text-primary font-medium hover:underline">{l.id}</Link>
                </td>
                <td className={td + " text-slate-700"}>{l.origin}</td>
                <td className={td + " text-slate-700"}>{l.destination}</td>
                <td className={td + " text-slate-700"}>{l.driver}</td>
                <td className={td + " text-slate-500"}>{l.truck}</td>
                <td className={td}>
                  <span className="status-badge" style={{ background: s.bg, color: s.color }}>
                    {s.label}
                  </span>
                </td>
                <td className={td + " text-slate-400"}>{l.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

export default LatestLoadsTable;

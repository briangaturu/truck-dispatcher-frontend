import { Link } from "react-router-dom";

const loads = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driver: "John Kamau", status: "in_transit", date: "May 18, 2026" },
  { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driver: "Peter Odhiambo", status: "delivered", date: "May 17, 2026" },
  { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driver: "James Kariuki", status: "pending", date: "May 16, 2026" },
  { id: "LD-2026-0004", origin: "Nakuru", destination: "Eldoret", driver: "Alex Mutua", status: "in_transit", date: "May 17, 2026" },
  { id: "LD-2026-0005", origin: "Nairobi", destination: "Nakuru", driver: "Samuel Okello", status: "cancelled", date: "May 16, 2026" },
];

const statusColor: Record<string, string> = { in_transit: "#2563eb", delivered: "#16a34a", pending: "#ea580c", cancelled: "#dc2626" };

const LatestLoadsTable = () => (
  <div className="td-table-card">
    <div className="td-table-card__header">
      <h3>Recent Loads</h3>
      <Link to="/admin/loads" className="td-link">View All</Link>
    </div>
    <div className="td-table-wrap">
      <table className="td-table">
        <thead>
          <tr><th>Load ID</th><th>Origin</th><th>Destination</th><th>Driver</th><th>Status</th><th>Updated</th></tr>
        </thead>
        <tbody>
          {loads.map((l) => (
            <tr key={l.id}>
              <td><span className="td-link">{l.id}</span></td>
              <td>{l.origin}</td>
              <td>{l.destination}</td>
              <td>{l.driver}</td>
              <td><span className="td-badge" style={{ background: `${statusColor[l.status]}18`, color: statusColor[l.status] }}>{l.status.replace("_", " ")}</span></td>
              <td>{l.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default LatestLoadsTable;
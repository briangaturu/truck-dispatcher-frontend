import { useGetLoadsQuery } from "../../features/api/loadsApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import type { Load } from "../../utils/types";

const mockHistory: Load[] = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "t1", shipperId: "s1", status: "delivered", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-10", updatedAt: "2026-05-12" },
  { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driverId: "d1", truckId: "t1", shipperId: "s2", status: "delivered", cargo: "Food", weight: 8000, quantity: 15, createdAt: "2026-05-05", updatedAt: "2026-05-07" },
];

const LoadHistory = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const { data: loads = [] } = useGetLoadsQuery();
  const history = loads.filter((l) => l.driverId === user?.id && l.status === "delivered");
  const display = history.length > 0 ? history : mockHistory;

  return (
    <div className="td-table-card">
      <h3>Load History</h3>
      <div className="td-table-wrap">
        <table className="td-table">
          <thead>
            <tr><th>Load ID</th><th>Origin</th><th>Destination</th><th>Status</th><th>Date</th></tr>
          </thead>
          <tbody>
            {display.map((l) => (
              <tr key={l.id}>
                <td><span className="td-link">{l.id}</span></td>
                <td>{l.origin}</td>
                <td>{l.destination}</td>
                <td><span className="td-badge" style={{ background: "#16a34a18", color: "#16a34a" }}>Delivered</span></td>
                <td>{l.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadHistory;
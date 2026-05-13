import { useGetTrucksQuery } from "../../features/api/trucksApi";
import type { Truck } from "../../utils/types";

const statusColor: Record<string, string> = {
  available: "#16a34a",
  on_road: "#2563eb",
  maintenance: "#ea580c",
};

const mockTrucks: Truck[] = [
  { id: "KCD-123A", plateNumber: "KCD 123A", model: "KCD 123A", capacity: 20000, status: "on_road", driverId: "John Kamau", lastService: "May 01, 2026" },
  { id: "KCE-456B", plateNumber: "KCE 456B", model: "KCE 456B", capacity: 18000, status: "available", driverId: "Peter Odhiambo", lastService: "Apr 28, 2026" },
  { id: "KCF-789C", plateNumber: "KCF 789C", model: "KCF 789C", capacity: 22000, status: "on_road", driverId: "James Kariuki", lastService: "May 02, 2026" },
  { id: "KCD-246D", plateNumber: "KCD 246D", model: "KCD 246D", capacity: 20000, status: "maintenance", driverId: "Alex Mutua", lastService: "Apr 20, 2026" },
  { id: "KCH-135E", plateNumber: "KCH 135E", model: "KCH 135E", capacity: 16000, status: "available", driverId: "Samuel Okello", lastService: "Apr 30, 2026" },
];

const AllTrucks = () => {
  const { data: trucks = [], isLoading } = useGetTrucksQuery();
  const display = trucks.length > 0 ? trucks : mockTrucks;

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>All Trucks</h3>
        <button className="td-btn td-btn--primary td-btn--sm">+ Add Truck</button>
      </div>
      {isLoading ? <div className="td-loading">Loading...</div> : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Truck</th>
                <th>Plate Number</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Capacity</th>
                <th>Last Service</th>
              </tr>
            </thead>
            <tbody>
              {display.map((t) => (
                <tr key={t.id}>
                  <td><span className="td-link">{t.id}</span></td>
                  <td>{t.plateNumber}</td>
                  <td>{t.driverId || "—"}</td>
                  <td>
                    <span className="td-badge" style={{ background: `${statusColor[t.status]}18`, color: statusColor[t.status] }}>
                      {t.status.replace("_", " ")}
                    </span>
                  </td>
                  <td>{t.capacity.toLocaleString()} kg</td>
                  <td>{t.lastService || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllTrucks;
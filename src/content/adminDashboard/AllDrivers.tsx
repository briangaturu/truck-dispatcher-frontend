import { useGetDriversQuery } from "../../features/api/driversApi";
import type { Driver } from "../../utils/types";

const mockDrivers: Driver[] = [
  { id: "d1", name: "John Kamau", phone: "+254 711 345 678", email: "john.kamau@example.com", license: "DL1234567", status: "active", createdAt: "Jan 10, 2026" },
  { id: "d2", name: "Peter Odhiambo", phone: "+254 733 222 111", email: "peter.odhiambo@example.com", license: "DL2345678", status: "active", createdAt: "Feb 05, 2026" },
  { id: "d3", name: "James Kariuki", phone: "+254 711 888 999", email: "james.kariuki@example.com", license: "DL3456789", status: "active", createdAt: "Mar 12, 2026" },
  { id: "d4", name: "Alex Mutua", phone: "+254 700 132 456", email: "alex.mutua@example.com", license: "DL4567890", status: "inactive", createdAt: "Jan 20, 2026" },
  { id: "d5", name: "Samuel Okello", phone: "+254 721 654 321", email: "samuel.okello@example.com", license: "DL5678901", status: "active", createdAt: "Apr 18, 2026" },
];

const AllDrivers = () => {
  const { data: drivers = [], isLoading } = useGetDriversQuery();
  const display = drivers.length > 0 ? drivers : mockDrivers;

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>All Drivers</h3>
        <button className="td-btn td-btn--primary td-btn--sm">+ Add Driver</button>
      </div>
      {isLoading ? <div className="td-loading">Loading...</div> : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>License</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {display.map((d) => (
                <tr key={d.id}>
                  <td>
                    <div className="td-avatar-cell">
                      <div className="td-avatar">{d.name[0]}</div>
                      {d.name}
                    </div>
                  </td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>{d.license}</td>
                  <td>
                    <span className="td-badge" style={{ background: d.status === "active" ? "#16a34a18" : "#dc262618", color: d.status === "active" ? "#16a34a" : "#dc2626" }}>
                      {d.status}
                    </span>
                  </td>
                  <td>{d.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllDrivers;
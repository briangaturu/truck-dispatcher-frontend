import { useGetUsersQuery } from "../../features/api/usersApi";
import type { User } from "../../utils/types";

const mockUsers: User[] = [
  { id: "u1", name: "John Kamau", email: "john@example.com", phone: "+254711345678", role: "driver", status: "active", createdAt: "2026-01-10" },
  { id: "u2", name: "Acme Logistics", email: "acme@example.com", phone: "+254722111222", role: "shipper", status: "active", createdAt: "2026-02-01" },
  { id: "u3", name: "Jane Admin", email: "jane@truckdispatcher.com", phone: "+254700000001", role: "admin", status: "active", createdAt: "2026-01-01" },
];

const AllUsers = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const display = users.length > 0 ? users : mockUsers;

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>All Users</h3>
      </div>
      {isLoading ? <div className="td-loading">Loading...</div> : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {display.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className="td-badge td-badge--neutral">{u.role}</span>
                  </td>
                  <td>
                    <span className="td-badge" style={{ background: u.status === "active" ? "#16a34a18" : "#dc262618", color: u.status === "active" ? "#16a34a" : "#dc2626" }}>
                      {u.status}
                    </span>
                  </td>
                  <td>{u.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
import { useState } from "react";
import { useGetUsersQuery } from "../../features/api/usersApi";
import type { User } from "../../utils/types";

const mockUsers: User[] = [
  { id: "u1", name: "John Kamau", email: "john@example.com", phone: "+254711345678", role: "driver", status: "active", createdAt: "2026-01-10" },
  { id: "u2", name: "Acme Logistics", email: "acme@example.com", phone: "+254722111222", role: "shipper", status: "active", createdAt: "2026-02-01" },
  { id: "u3", name: "Jane Admin", email: "jane@truckdispatcher.com", phone: "+254700000001", role: "admin", status: "active", createdAt: "2026-01-01" },
];

const roleMeta: Record<string, { color: string; bg: string }> = {
  admin: { color: "#9333ea", bg: "#faf5ff" },
  driver: { color: "#2563eb", bg: "#eff6ff" },
  shipper: { color: "#16a34a", bg: "#f0fdf4" },
};

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllUsers = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [search, setSearch] = useState("");
  const display = (users.length > 0 ? users : mockUsers).filter(
    (u) => !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">All Users</h3>
        <div className="relative">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="pl-7 pr-3 py-1.5 text-[12px] border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-44"
          />
        </div>
      </div>
      {isLoading ? (
        <div className="py-12 text-center text-slate-400 text-sm">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th}>Name</th>
                <th className={th}>Email</th>
                <th className={th}>Role</th>
                <th className={th}>Status</th>
                <th className={th}>Joined</th>
              </tr>
            </thead>
            <tbody>
              {display.map((u) => {
                const r = roleMeta[u.role] || { color: "#64748b", bg: "#f8fafc" };
                return (
                  <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                    <td className={td + " font-medium text-slate-800"}>{u.name}</td>
                    <td className={td + " text-slate-500"}>{u.email}</td>
                    <td className={td}>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold capitalize" style={{ background: r.bg, color: r.color }}>
                        {u.role}
                      </span>
                    </td>
                    <td className={td}>
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
                        style={{
                          background: u.status === "active" ? "#f0fdf4" : "#fef2f2",
                          color: u.status === "active" ? "#16a34a" : "#ef4444",
                        }}
                      >
                        {u.status}
                      </span>
                    </td>
                    <td className={td + " text-slate-400"}>{u.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllUsers;

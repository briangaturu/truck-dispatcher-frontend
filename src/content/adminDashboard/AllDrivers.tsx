import { useState } from "react";
import { useGetDriversQuery } from "../../features/api/driversApi";
import type { Driver } from "../../utils/types";

const mockDrivers: Driver[] = [
  { id: "d1", name: "John Kamau", phone: "+254 711 345 678", email: "john.kamau@example.com", license: "DL1234567", status: "active", createdAt: "Jan 10, 2026" },
  { id: "d2", name: "Peter Odhiambo", phone: "+254 733 222 111", email: "peter.odhiambo@example.com", license: "DL2345678", status: "active", createdAt: "Feb 05, 2026" },
  { id: "d3", name: "James Kariuki", phone: "+254 711 888 999", email: "james.kariuki@example.com", license: "DL3456789", status: "active", createdAt: "Mar 12, 2026" },
  { id: "d4", name: "Alex Mutua", phone: "+254 700 132 456", email: "alex.mutua@example.com", license: "DL4567890", status: "inactive", createdAt: "Jan 20, 2026" },
  { id: "d5", name: "Samuel Okello", phone: "+254 721 654 321", email: "samuel.okello@example.com", license: "DL5678901", status: "active", createdAt: "Apr 18, 2026" },
];

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllDrivers = () => {
  const { data: drivers = [], isLoading } = useGetDriversQuery();
  const [search, setSearch] = useState("");
  const display = (drivers.length > 0 ? drivers : mockDrivers).filter(
    (d) => !search || d.name.toLowerCase().includes(search.toLowerCase()) || d.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">Drivers</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search drivers..."
              className="pl-7 pr-3 py-1.5 text-[12px] border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-44"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
            ⚙ Filters
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            + Add Driver
          </button>
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
                <th className={th}>Phone</th>
                <th className={th}>Email</th>
                <th className={th}>License</th>
                <th className={th}>Status</th>
                <th className={th}>Joined</th>
              </tr>
            </thead>
            <tbody>
              {display.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                  <td className={td}>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                        {d.name[0]}
                      </div>
                      <span className="font-medium text-slate-800">{d.name}</span>
                    </div>
                  </td>
                  <td className={td + " text-slate-600"}>{d.phone}</td>
                  <td className={td + " text-slate-500"}>{d.email}</td>
                  <td className={td + " text-slate-500 font-mono text-[12px]"}>{d.license}</td>
                  <td className={td}>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{
                        background: d.status === "active" ? "#f0fdf4" : "#fef2f2",
                        color: d.status === "active" ? "#16a34a" : "#ef4444",
                      }}
                    >
                      {d.status}
                    </span>
                  </td>
                  <td className={td + " text-slate-400"}>{d.createdAt}</td>
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

import { useState } from "react";
import { useGetTrucksQuery } from "../../features/api/trucksApi";
import type { Truck } from "../../utils/types";

const statusMeta: Record<string, { label: string; color: string; bg: string }> = {
  available: { label: "Available", color: "#16a34a", bg: "#f0fdf4" },
  on_road: { label: "On Road", color: "#2563eb", bg: "#eff6ff" },
  maintenance: { label: "Maintenance", color: "#f59e0b", bg: "#fffbeb" },
};

const mockTrucks: Truck[] = [
  { id: "KCD-123A", plateNumber: "KCD 123A", model: "KCD 123A", capacity: 20000, status: "on_road", driverId: "John Kamau", lastService: "May 01, 2026" },
  { id: "KCE-456B", plateNumber: "KCE 456B", model: "KCE 456B", capacity: 18000, status: "available", driverId: "Peter Odhiambo", lastService: "Apr 28, 2026" },
  { id: "KCF-789C", plateNumber: "KCF 789C", model: "KCF 789C", capacity: 22000, status: "on_road", driverId: "James Kariuki", lastService: "May 02, 2026" },
  { id: "KCD-246D", plateNumber: "KCD 246D", model: "KCD 246D", capacity: 20000, status: "maintenance", driverId: "Alex Mutua", lastService: "Apr 20, 2026" },
  { id: "KCH-135E", plateNumber: "KCH 135E", model: "KCH 135E", capacity: 16000, status: "available", driverId: "Samuel Okello", lastService: "Apr 30, 2026" },
];

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllTrucks = () => {
  const { data: trucks = [], isLoading } = useGetTrucksQuery();
  const [search, setSearch] = useState("");
  const display = (trucks.length > 0 ? trucks : mockTrucks).filter(
    (t) => !search || t.plateNumber.toLowerCase().includes(search.toLowerCase()) || (t.driverId || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">Trucks</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search trucks..."
              className="pl-7 pr-3 py-1.5 text-[12px] border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-44"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
            ⚙ Filters
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            + Add Truck
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
                <th className={th}>Truck</th>
                <th className={th}>Plate Number</th>
                <th className={th}>Driver</th>
                <th className={th}>Status</th>
                <th className={th}>Capacity</th>
                <th className={th}>Last Service</th>
              </tr>
            </thead>
            <tbody>
              {display.map((t) => {
                const s = statusMeta[t.status] || { label: t.status, color: "#64748b", bg: "#f8fafc" };
                return (
                  <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                    <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{t.id}</span></td>
                    <td className={td + " font-mono text-[12px] text-slate-700"}>{t.plateNumber}</td>
                    <td className={td + " text-slate-700"}>{t.driverId || "—"}</td>
                    <td className={td}>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: s.bg, color: s.color }}>
                        {s.label}
                      </span>
                    </td>
                    <td className={td + " text-slate-600"}>{t.capacity.toLocaleString()} kg</td>
                    <td className={td + " text-slate-400"}>{t.lastService || "—"}</td>
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

export default AllTrucks;

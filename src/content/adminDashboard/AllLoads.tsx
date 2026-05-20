import { useState } from "react";
import { useGetLoadsQuery } from "../../features/api/loadsApi";
import type { Load, LoadStatus } from "../../utils/types";

const statusMeta: Record<LoadStatus, { label: string; color: string; bg: string }> = {
  in_transit: { label: "In Transit", color: "#2563eb", bg: "#eff6ff" },
  delivered: { label: "Delivered", color: "#16a34a", bg: "#f0fdf4" },
  pending: { label: "Pending", color: "#f59e0b", bg: "#fffbeb" },
  cancelled: { label: "Cancelled", color: "#ef4444", bg: "#fef2f2" },
  dispatched: { label: "Dispatched", color: "#9333ea", bg: "#faf5ff" },
};

const mockLoads: Load[] = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "John Kamau", truckId: "KCD 123A", shipperId: "s1", status: "in_transit", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-18", updatedAt: "2026-05-18" },
  { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driverId: "Peter Odhiambo", truckId: "KCE 456B", shipperId: "s2", status: "delivered", cargo: "Food", weight: 8000, quantity: 15, createdAt: "2026-05-17", updatedAt: "2026-05-18" },
  { id: "LD-2026-0003", origin: "Eldoret", destination: "Kisumu", driverId: "James Kariuki", truckId: "KCF 789C", shipperId: "s3", status: "pending", cargo: "Machinery", weight: 22000, quantity: 5, createdAt: "2026-05-16", updatedAt: "2026-05-17" },
  { id: "LD-2026-0004", origin: "Nakuru", destination: "Eldoret", driverId: "Alex Mutua", truckId: "KCD 246D", shipperId: "s1", status: "in_transit", cargo: "Textiles", weight: 6000, quantity: 40, createdAt: "2026-05-15", updatedAt: "2026-05-17" },
  { id: "LD-2026-0005", origin: "Nairobi", destination: "Nakuru", driverId: "Samuel Okello", truckId: "KCH 135E", shipperId: "s4", status: "cancelled", cargo: "Chemicals", weight: 9000, quantity: 10, createdAt: "2026-05-14", updatedAt: "2026-05-16" },
];

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllLoads = () => {
  const { data: loadsResponse = [], isLoading } = useGetLoadsQuery();
  const [search, setSearch] = useState("");
  
  // Handle both array and wrapped response
  const loads = Array.isArray(loadsResponse) ? loadsResponse : [];
  const displayLoads = (loads.length > 0 ? loads : mockLoads).filter(
    (l) => !search || l.id.toLowerCase().includes(search.toLowerCase()) || l.origin.toLowerCase().includes(search.toLowerCase()) || l.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">Loads</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search loads..."
              className="pl-7 pr-3 py-1.5 text-[12px] border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-44"
            />
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">
            ⚙ Filters
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            + New Load
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="py-12 text-center text-slate-400 text-sm">Loading loads...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th}>Load ID</th>
                <th className={th}>Origin</th>
                <th className={th}>Destination</th>
                <th className={th}>Driver</th>
                <th className={th}>Truck</th>
                <th className={th}>Status</th>
                <th className={th}>Created</th>
              </tr>
            </thead>
            <tbody>
              {displayLoads.map((l) => {
                const s = statusMeta[l.status];
                return (
                  <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                    <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{l.id}</span></td>
                    <td className={td + " text-slate-700"}>{l.origin}</td>
                    <td className={td + " text-slate-700"}>{l.destination}</td>
                    <td className={td + " text-slate-700"}>{l.driverId || "—"}</td>
                    <td className={td + " text-slate-500"}>{l.truckId || "—"}</td>
                    <td className={td}>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: s.bg, color: s.color }}>
                        {s.label}
                      </span>
                    </td>
                    <td className={td + " text-slate-400"}>{l.createdAt}</td>
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

export default AllLoads;

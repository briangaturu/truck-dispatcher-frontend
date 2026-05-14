import { useGetLoadsQuery } from "../../features/api/loadsApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import type { Load } from "../../utils/types";

const mockHistory: Load[] = [
  { id: "LD-2026-0001", origin: "Nairobi", destination: "Mombasa", driverId: "d1", truckId: "t1", shipperId: "s1", status: "delivered", cargo: "Electronics", weight: 12500, quantity: 25, createdAt: "2026-05-10", updatedAt: "2026-05-12" },
  { id: "LD-2026-0002", origin: "Kisumu", destination: "Nairobi", driverId: "d1", truckId: "t1", shipperId: "s2", status: "delivered", cargo: "Food", weight: 8000, quantity: 15, createdAt: "2026-05-05", updatedAt: "2026-05-07" },
];

const th = "text-left p-2.5 px-3.5 bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "p-3 px-3.5 border-b border-slate-200 align-middle";

const LoadHistory = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const { data: loads = [] } = useGetLoadsQuery();
  const history = loads.filter((l) => l.driverId === user?.id && l.status === "delivered");
  const display = history.length > 0 ? history : mockHistory;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
      <h3 className="font-display text-lg font-bold mb-5">Load History</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr><th className={th}>Load ID</th><th className={th}>Origin</th><th className={th}>Destination</th><th className={th}>Status</th><th className={th}>Date</th></tr>
          </thead>
          <tbody>
            {display.map((l) => (
              <tr key={l.id} className="hover:bg-slate-50">
                <td className={td}><span className="td-link">{l.id}</span></td>
                <td className={td}>{l.origin}</td>
                <td className={td}>{l.destination}</td>
                <td className={td}><span className="td-badge" style={{ background: "#16a34a18", color: "#16a34a" }}>Delivered</span></td>
                <td className={td}>{l.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadHistory;
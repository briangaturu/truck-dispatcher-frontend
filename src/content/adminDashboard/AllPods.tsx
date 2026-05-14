import { useGetPODsQuery } from "../../features/api/podApi";
import type { POD } from "../../utils/types";

const mockPODs: POD[] = [
  { id: "pod1", loadId: "LD-2026-0002", driverId: "John Kamau", imageUrl: "", notes: "Delivered in good condition", uploadedAt: "2026-05-18 10:30 AM" },
  { id: "pod2", loadId: "LD-2026-0001", driverId: "Peter Odhiambo", imageUrl: "", notes: "Signed by warehouse manager", uploadedAt: "2026-05-17 02:15 PM" },
];

const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllPODs = () => {
  const { data: pods = [], isLoading } = useGetPODsQuery();
  const display = pods.length > 0 ? pods : mockPODs;

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-card">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">POD & Documents</h3>
      </div>
      {isLoading ? (
        <div className="py-12 text-center text-slate-400 text-sm">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={th}>Load ID</th>
                <th className={th}>Driver</th>
                <th className={th}>Notes</th>
                <th className={th}>Uploaded At</th>
                <th className={th}>Document</th>
              </tr>
            </thead>
            <tbody>
              {display.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{p.loadId}</span></td>
                  <td className={td + " text-slate-700"}>{p.driverId}</td>
                  <td className={td + " text-slate-500"}>{p.notes || "—"}</td>
                  <td className={td + " text-slate-400"}>{p.uploadedAt}</td>
                  <td className={td}>
                    {p.imageUrl ? (
                      <a href={p.imageUrl} target="_blank" rel="noreferrer" className="text-primary text-[12px] font-medium hover:underline">View</a>
                    ) : (
                      <span className="text-slate-400 text-[12px]">No file</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPODs;

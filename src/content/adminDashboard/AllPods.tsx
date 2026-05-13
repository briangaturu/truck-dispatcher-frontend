import { useGetPODsQuery } from "../../features/api/podApi";
import type { POD } from "../../utils/types";

const mockPODs: POD[] = [
  { id: "pod1", loadId: "LD-2026-0002", driverId: "John Kamau", imageUrl: "", notes: "Delivered in good condition", uploadedAt: "2026-05-18 10:30 AM" },
  { id: "pod2", loadId: "LD-2026-0001", driverId: "Peter Odhiambo", imageUrl: "", notes: "Signed by warehouse manager", uploadedAt: "2026-05-17 02:15 PM" },
];

const AllPODs = () => {
  const { data: pods = [], isLoading } = useGetPODsQuery();
  const display = pods.length > 0 ? pods : mockPODs;

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>POD & Documents</h3>
      </div>
      {isLoading ? <div className="td-loading">Loading...</div> : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Load ID</th>
                <th>Driver</th>
                <th>Notes</th>
                <th>Uploaded At</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              {display.map((p) => (
                <tr key={p.id}>
                  <td><span className="td-link">{p.loadId}</span></td>
                  <td>{p.driverId}</td>
                  <td>{p.notes || "—"}</td>
                  <td>{p.uploadedAt}</td>
                  <td>
                    {p.imageUrl ? (
                      <a href={p.imageUrl} target="_blank" rel="noreferrer" className="td-link">View</a>
                    ) : (
                      <span className="td-text-muted">No file</span>
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
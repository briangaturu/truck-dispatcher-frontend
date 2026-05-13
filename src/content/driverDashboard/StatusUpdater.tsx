import { useState } from "react";
import { useAddTrackingEventMutation } from "../../features/api/trackingApi";

const statuses = ["In Transit", "At Checkpoint", "Delayed", "Delivered"];

const StatusUpdater = () => {
  const [loadId, setLoadId] = useState("");
  const [status, setStatus] = useState(statuses[0]);
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [addEvent, { isLoading, isSuccess }] = useAddTrackingEventMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addEvent({ loadId, status, location, note });
    setLoadId(""); setLocation(""); setNote("");
  };

  return (
    <div className="td-table-card">
      <h3>Update Load Status</h3>
      {isSuccess && <div className="td-alert td-alert--success">✅ Status updated!</div>}
      <form onSubmit={handleSubmit} className="dispatch-form">
        <div className="dispatch-form__grid">
          <div className="td-field">
            <label>Load ID</label>
            <input value={loadId} onChange={(e) => setLoadId(e.target.value)} placeholder="LD-2026-0001" required />
          </div>
          <div className="td-field">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="td-field">
            <label>Current Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Voi, Kenya" required />
          </div>
        </div>
        <div className="td-field">
          <label>Note</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Optional note..." />
        </div>
        <button type="submit" className="td-btn td-btn--primary" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Status"}
        </button>
      </form>
    </div>
  );
};

export default StatusUpdater;
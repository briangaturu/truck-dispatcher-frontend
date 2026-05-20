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
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
      <h3 className="font-display text-lg font-bold mb-5">Update Load Status</h3>
      {isSuccess && <div className="p-3 px-4 rounded-lg mb-4 text-sm font-medium bg-green-100 text-green-800 border-l-4 border-green-600">✅ Status updated!</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Load ID</label>
            <input value={loadId} onChange={(e) => setLoadId(e.target.value)} placeholder="LD-2026-0001" required className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10">
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Current Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Voi, Kenya" required className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Note</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Optional note..." className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-semibold text-sm bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark disabled:opacity-60 disabled:cursor-not-allowed" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Status"}
        </button>
      </form>
    </div>
  );
};

export default StatusUpdater;
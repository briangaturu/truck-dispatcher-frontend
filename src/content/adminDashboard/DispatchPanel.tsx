import { useState } from "react";
import { useCreateDispatchMutation } from "../../features/api/dispatchApi";

const DispatchPanel = () => {
  const [form, setForm] = useState({ loadId: "", driverId: "", truckId: "", notes: "" });
  const [createDispatch, { isLoading, isSuccess }] = useCreateDispatchMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createDispatch(form);
    setForm({ loadId: "", driverId: "", truckId: "", notes: "" });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-900">Dispatch Panel</h3>
      </div>
      {isSuccess && (
        <div className="td-alert td-alert--success">✅ Dispatch created successfully!</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4">
          <div className="td-field">
            <label>Load ID</label>
            <input name="loadId" value={form.loadId} onChange={handleChange} placeholder="LD-2026-0001" required />
          </div>
          <div className="td-field">
            <label>Driver ID</label>
            <input name="driverId" value={form.driverId} onChange={handleChange} placeholder="Driver ID" required />
          </div>
          <div className="td-field">
            <label>Truck ID</label>
            <input name="truckId" value={form.truckId} onChange={handleChange} placeholder="KCD 123A" required />
          </div>
        </div>
        <div className="td-field">
          <label>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Any dispatch notes..." />
        </div>
        <button type="submit" className="td-btn td-btn--primary" disabled={isLoading}>
          {isLoading ? "Dispatching..." : "Create Dispatch"}
        </button>
      </form>
    </div>
  );
};

export default DispatchPanel;
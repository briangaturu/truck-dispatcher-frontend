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
        <div className="p-3 px-4 rounded-lg mb-4 text-sm font-medium bg-green-100 text-green-800 border-l-4 border-green-600">
          ✅ Dispatch created successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Load ID</label>
            <input
              name="loadId"
              value={form.loadId}
              onChange={handleChange}
              placeholder="LD-2026-0001"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Driver ID</label>
            <input
              name="driverId"
              value={form.driverId}
              onChange={handleChange}
              placeholder="Driver ID"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Truck ID</label>
            <input
              name="truckId"
              value={form.truckId}
              onChange={handleChange}
              placeholder="KCD 123A"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Any dispatch notes..."
            className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-semibold text-sm bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Dispatching..." : "Create Dispatch"}
        </button>
      </form>
    </div>
  );
};

export default DispatchPanel;

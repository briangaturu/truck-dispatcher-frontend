import { useState } from "react";
import { useCreateLoadMutation } from "../../features/api/loadsApi";

const PostLoadForm = () => {
  const [form, setForm] = useState({ origin: "", destination: "", cargo: "", weight: "", quantity: "" });
  const [createLoad, { isLoading, isSuccess }] = useCreateLoadMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createLoad({ ...form, weight: Number(form.weight), quantity: Number(form.quantity), status: "pending", shipperId: "current_user" } as any);
    setForm({ origin: "", destination: "", cargo: "", weight: "", quantity: "" });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-card">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">Post a Load</h3>
      {isSuccess && (
        <div className="p-3 px-4 rounded-lg mb-4 text-sm font-medium bg-green-100 text-green-800 border-l-4 border-green-600">
          ✅ Load posted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Origin</label>
            <input
              name="origin"
              value={form.origin}
              onChange={handleChange}
              placeholder="e.g. Nairobi"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Destination</label>
            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="e.g. Mombasa"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cargo Type</label>
            <input
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              placeholder="e.g. Electronics"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Weight (kg)</label>
            <input
              name="weight"
              type="number"
              value={form.weight}
              onChange={handleChange}
              placeholder="12500"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Quantity</label>
            <input
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
              placeholder="25"
              required
              className="w-full py-2 px-3 border border-slate-200 rounded-lg text-sm text-slate-900 bg-white transition-colors duration-150 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg font-semibold text-sm bg-primary text-white border-2 border-primary transition-all duration-150 hover:bg-primary-dark hover:border-primary-dark disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? "Posting..." : "Post Load"}
        </button>
      </form>
    </div>
  );
};

export default PostLoadForm;

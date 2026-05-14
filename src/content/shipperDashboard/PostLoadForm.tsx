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
      {isSuccess && <div className="td-alert td-alert--success">✅ Load posted successfully!</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4">
          <div className="td-field"><label>Origin</label><input name="origin" value={form.origin} onChange={handleChange} placeholder="e.g. Nairobi" required /></div>
          <div className="td-field"><label>Destination</label><input name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Mombasa" required /></div>
          <div className="td-field"><label>Cargo Type</label><input name="cargo" value={form.cargo} onChange={handleChange} placeholder="e.g. Electronics" required /></div>
          <div className="td-field"><label>Weight (kg)</label><input name="weight" type="number" value={form.weight} onChange={handleChange} placeholder="12500" required /></div>
          <div className="td-field"><label>Quantity</label><input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="25" required /></div>
        </div>
        <button type="submit" className="td-btn td-btn--primary" disabled={isLoading}>
          {isLoading ? "Posting..." : "Post Load"}
        </button>
      </form>
    </div>
  );
};

export default PostLoadForm;
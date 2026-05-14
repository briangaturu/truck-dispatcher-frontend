import { useState } from "react";
import { useGetPaymentsQuery } from "../../features/api/paymentsApi";
import type { Payment, PaymentStatus } from "../../utils/types";

const statusMeta: Record<PaymentStatus, { color: string; bg: string }> = {
  paid: { color: "#16a34a", bg: "#f0fdf4" },
  pending: { color: "#f59e0b", bg: "#fffbeb" },
  overdue: { color: "#ef4444", bg: "#fef2f2" },
};

const mockPayments: Payment[] = [
  { id: "p1", invoiceId: "INV-2026-0001", loadId: "LD-2026-0001", customer: "Acme Logistics", amount: 150000, status: "paid", dueDate: "2026-05-25", paidAt: "2026-05-18" },
  { id: "p2", invoiceId: "INV-2026-0002", loadId: "LD-2026-0002", customer: "Global Traders", amount: 160000, status: "paid", dueDate: "2026-05-28", paidAt: "2026-05-18" },
  { id: "p3", invoiceId: "INV-2026-0003", loadId: "LD-2026-0003", customer: "East Africa Supplies", amount: 105000, status: "pending", dueDate: "2026-05-30" },
  { id: "p4", invoiceId: "INV-2026-0004", loadId: "LD-2026-0004", customer: "Buildit Ltd", amount: 200000, status: "pending", dueDate: "2026-05-28" },
  { id: "p5", invoiceId: "INV-2026-0005", loadId: "LD-2026-0005", customer: "Tech Solutions", amount: 180000, status: "overdue", dueDate: "2026-05-10" },
];

const fmt = (n: number) => `KES ${n.toLocaleString()}`;
const th = "text-left py-2.5 px-3 bg-slate-50 text-slate-500 text-[11px] font-semibold uppercase tracking-wider border-b border-slate-200 whitespace-nowrap";
const td = "py-2.5 px-3 border-b border-slate-100 align-middle text-[13px]";

const AllPayments = () => {
  const { data: payments = [], isLoading } = useGetPaymentsQuery();
  const [search, setSearch] = useState("");
  const display = (payments.length > 0 ? payments : mockPayments).filter(
    (p) => !search || p.customer.toLowerCase().includes(search.toLowerCase()) || p.invoiceId.toLowerCase().includes(search.toLowerCase())
  );

  const total = display.reduce((a, p) => a + p.amount, 0);
  const paid = display.filter((p) => p.status === "paid").reduce((a, p) => a + p.amount, 0);
  const pending = display.filter((p) => p.status === "pending").reduce((a, p) => a + p.amount, 0);
  const overdue = display.filter((p) => p.status === "overdue").reduce((a, p) => a + p.amount, 0);

  return (
    <div className="flex flex-col gap-4">
      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Payments", val: fmt(total), color: "#2563eb", bg: "#eff6ff", icon: "💳" },
          { label: "Paid", val: fmt(paid), color: "#16a34a", bg: "#f0fdf4", icon: "✅" },
          { label: "Pending", val: fmt(pending), color: "#f59e0b", bg: "#fffbeb", icon: "⏳" },
          { label: "Overdue", val: fmt(overdue), color: "#ef4444", bg: "#fef2f2", icon: "⚠️" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-card">
            <div className="flex items-start justify-between mb-1">
              <p className="text-xs font-medium text-slate-500">{s.label}</p>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: s.bg, color: s.color }}>{s.icon}</div>
            </div>
            <div className="text-base font-bold text-slate-900">{s.val}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-card">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">Payments</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="pl-7 pr-3 py-1.5 text-[12px] border border-slate-200 rounded-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 w-40"
              />
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">⚙ Filters</button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition">↓ Export</button>
          </div>
        </div>
        {isLoading ? (
          <div className="py-12 text-center text-slate-400 text-sm">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={th}>Invoice ID</th>
                  <th className={th}>Load ID</th>
                  <th className={th}>Customer</th>
                  <th className={th}>Amount</th>
                  <th className={th}>Status</th>
                  <th className={th}>Due Date</th>
                  <th className={th}>Paid At</th>
                </tr>
              </thead>
              <tbody>
                {display.map((p) => {
                  const s = statusMeta[p.status];
                  return (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className={td}><span className="text-primary font-medium hover:underline cursor-pointer">{p.invoiceId}</span></td>
                      <td className={td + " text-slate-500"}>{p.loadId}</td>
                      <td className={td + " text-slate-700"}>{p.customer}</td>
                      <td className={td + " font-semibold text-slate-800"}>{fmt(p.amount)}</td>
                      <td className={td}>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: s.bg, color: s.color }}>
                          {p.status}
                        </span>
                      </td>
                      <td className={td + " text-slate-400"}>{p.dueDate}</td>
                      <td className={td + " text-slate-400"}>{p.paidAt || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPayments;

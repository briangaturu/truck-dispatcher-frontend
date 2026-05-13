import { useGetPaymentsQuery } from "../../features/api/paymentsApi";
import type { Payment, PaymentStatus } from "../../utils/types";

const statusColor: Record<PaymentStatus, string> = {
  paid: "#16a34a",
  pending: "#ea580c",
  overdue: "#dc2626",
};

const mockPayments: Payment[] = [
  { id: "p1", invoiceId: "INV-2026-0001", loadId: "LD-2026-0001", customer: "Acme Logistics", amount: 150000, status: "paid", dueDate: "2026-05-25", paidAt: "2026-05-18" },
  { id: "p2", invoiceId: "INV-2026-0002", loadId: "LD-2026-0002", customer: "Global Traders", amount: 160000, status: "paid", dueDate: "2026-05-28", paidAt: "2026-05-18" },
  { id: "p3", invoiceId: "INV-2026-0003", loadId: "LD-2026-0003", customer: "East Africa Supplies", amount: 105000, status: "pending", dueDate: "2026-05-30" },
  { id: "p4", invoiceId: "INV-2026-0004", loadId: "LD-2026-0004", customer: "Buildit Ltd", amount: 200000, status: "pending", dueDate: "2026-05-28" },
  { id: "p5", invoiceId: "INV-2026-0005", loadId: "LD-2026-0005", customer: "Tech Solutions", amount: 180000, status: "overdue", dueDate: "2026-05-10" },
];

const fmt = (n: number) => `KES ${n.toLocaleString()}`;

const AllPayments = () => {
  const { data: payments = [], isLoading } = useGetPaymentsQuery();
  const display = payments.length > 0 ? payments : mockPayments;

  const total = display.reduce((a, p) => a + p.amount, 0);
  const paid = display.filter((p) => p.status === "paid").reduce((a, p) => a + p.amount, 0);
  const pending = display.filter((p) => p.status === "pending").reduce((a, p) => a + p.amount, 0);
  const overdue = display.filter((p) => p.status === "overdue").reduce((a, p) => a + p.amount, 0);

  return (
    <div className="td-table-card">
      <div className="td-table-card__header">
        <h3>Payments</h3>
        <div className="td-table-card__actions">
          <button className="td-btn td-btn--outline td-btn--sm">Filters</button>
          <button className="td-btn td-btn--outline td-btn--sm">Export</button>
        </div>
      </div>

      <div className="admin-stat-cards admin-stat-cards--sm">
        {[
          { label: "Total Payments", val: fmt(total), color: "#2563eb" },
          { label: "Paid", val: fmt(paid), color: "#16a34a" },
          { label: "Pending", val: fmt(pending), color: "#ea580c" },
          { label: "Overdue", val: fmt(overdue), color: "#dc2626" },
        ].map((s) => (
          <div key={s.label} className="admin-stat-card" style={{ borderTop: `3px solid ${s.color}` }}>
            <div className="admin-stat-card__label">{s.label}</div>
            <div className="admin-stat-card__value" style={{ fontSize: "1.1rem" }}>{s.val}</div>
          </div>
        ))}
      </div>

      {isLoading ? <div className="td-loading">Loading...</div> : (
        <div className="td-table-wrap">
          <table className="td-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Load ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Paid At</th>
              </tr>
            </thead>
            <tbody>
              {display.map((p) => (
                <tr key={p.id}>
                  <td><span className="td-link">{p.invoiceId}</span></td>
                  <td>{p.loadId}</td>
                  <td>{p.customer}</td>
                  <td>{fmt(p.amount)}</td>
                  <td>
                    <span className="td-badge" style={{ background: `${statusColor[p.status]}18`, color: statusColor[p.status] }}>
                      {p.status}
                    </span>
                  </td>
                  <td>{p.dueDate}</td>
                  <td>{p.paidAt || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllPayments;
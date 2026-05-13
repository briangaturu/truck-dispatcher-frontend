// Analytics.tsx
const Analytics = () => (
  <div className="td-table-card">
    <h3>Analytics Overview</h3>
    <div className="analytics-grid">
      {[
        { label: "Loads This Month", value: "128", trend: "▲ 12%" },
        { label: "Revenue (KES)", value: "2,450,000", trend: "▲ 8%" },
        { label: "Driver Utilization", value: "87%", trend: "▲ 3%" },
        { label: "On-Time Delivery", value: "98%", trend: "▲ 1%" },
      ].map((a) => (
        <div key={a.label} className="analytics-card">
          <div className="analytics-card__label">{a.label}</div>
          <div className="analytics-card__value">{a.value}</div>
          <div className="analytics-card__trend" style={{ color: "#16a34a" }}>{a.trend}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Analytics;
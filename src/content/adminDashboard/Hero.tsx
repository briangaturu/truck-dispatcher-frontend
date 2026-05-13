interface Props {
  stats?: {
    totalLoads: number;
    inTransit: number;
    delivered: number;
    pending: number;
  };
}

const AdminHero = ({ stats }: Props) => {
  const data = stats || { totalLoads: 128, inTransit: 74, delivered: 48, pending: 6 };

  const cards = [
    { label: "Total Loads", value: data.totalLoads, icon: "📦", color: "#2563eb", delta: "+12% from last week" },
    { label: "In Transit", value: data.inTransit, icon: "🚛", color: "#16a34a", delta: "+8% from last week" },
    { label: "Delivered", value: data.delivered, icon: "✅", color: "#9333ea", delta: "+106% from last week" },
    { label: "Pending", value: data.pending, icon: "⏳", color: "#ea580c", delta: "-4% from last week" },
  ];

  return (
    <div className="admin-stat-cards">
      {cards.map((c) => (
        <div key={c.label} className="admin-stat-card" style={{ borderTop: `3px solid ${c.color}` }}>
          <div className="admin-stat-card__header">
            <span className="admin-stat-card__label">{c.label}</span>
            <span className="admin-stat-card__icon" style={{ color: c.color }}>{c.icon}</span>
          </div>
          <div className="admin-stat-card__value">{c.value}</div>
          <div className="admin-stat-card__delta">{c.delta}</div>
        </div>
      ))}
    </div>
  );
};

export default AdminHero;
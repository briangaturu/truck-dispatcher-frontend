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
    { label: "Total Loads", value: data.totalLoads, icon: "📦", color: "#2563eb", bg: "#eff6ff", delta: "+12% from last week", up: true },
    { label: "In Transit", value: data.inTransit, icon: "🚛", color: "#16a34a", bg: "#f0fdf4", delta: "+8% from last week", up: true },
    { label: "Delivered", value: data.delivered, icon: "✅", color: "#9333ea", bg: "#faf5ff", delta: "+106% from last week", up: true },
    { label: "Pending", value: data.pending, icon: "⏳", color: "#f59e0b", bg: "#fffbeb", delta: "-4% from last week", up: false },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c) => (
        <div key={c.label} className="stat-card">
          <div className="stat-card-icon" style={{ background: c.bg }}>
            {c.icon}
          </div>
          <h3 className="stat-card-label">{c.label}</h3>
          <div className="stat-card-value">{c.value}</div>
          <div className={`stat-card-delta ${c.up ? 'positive' : 'negative'}`}>
            <span>{c.up ? '↑' : '↓'}</span>
            <span>{c.delta}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminHero;

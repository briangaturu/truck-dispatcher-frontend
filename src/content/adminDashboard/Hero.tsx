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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-card">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-medium text-slate-500 mb-0.5">{c.label}</p>
              <div className="text-2xl font-bold text-slate-900">{c.value}</div>
            </div>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
              style={{ background: c.bg, color: c.color }}
            >
              {c.icon}
            </div>
          </div>
          <div className={`text-xs font-medium ${c.up ? "text-success" : "text-danger"}`}>
            {c.delta}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminHero;

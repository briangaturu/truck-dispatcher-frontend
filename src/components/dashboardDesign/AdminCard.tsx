interface AdminCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
  bg?: string;
  delta?: string;
  up?: boolean;
}

const AdminCard = ({ title, value, icon, color = "#2563eb", bg = "#eff6ff", delta, up = true }: AdminCardProps) => (
  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-card">
    <div className="flex items-start justify-between mb-3">
      <div>
        <p className="text-xs font-medium text-slate-500 mb-0.5">{title}</p>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
      </div>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0"
        style={{ background: bg, color }}
      >
        {icon}
      </div>
    </div>
    {delta && (
      <div className={`text-xs font-medium ${up ? "text-success" : "text-danger"}`}>
        {delta}
      </div>
    )}
  </div>
);

export default AdminCard;

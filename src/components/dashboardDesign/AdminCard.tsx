interface AdminCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
  delta?: string;
}

const AdminCard = ({ title, value, icon, color = "#2563eb", delta }: AdminCardProps) => (
  <div className="admin-stat-card" style={{ borderTop: `3px solid ${color}` }}>
    <div className="admin-stat-card__header">
      <span className="admin-stat-card__label">{title}</span>
      <span className="admin-stat-card__icon" style={{ color }}>{icon}</span>
    </div>
    <div className="admin-stat-card__value">{value}</div>
    {delta && <div className="admin-stat-card__delta">{delta}</div>}
  </div>
);

export default AdminCard;
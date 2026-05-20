interface AdminCardProps {
  title: string;
  value: string | number;
  icon: string;
  bg?: string;
  delta?: string;
  up?: boolean;
}

const AdminCard = ({ title, value, icon, bg = "#eff6ff", delta, up = true }: AdminCardProps) => (
  <div className="stat-card">
    <div className="stat-card-icon" style={{ background: bg }}>
      {icon}
    </div>
    <h3 className="stat-card-label">{title}</h3>
    <div className="stat-card-value">{value}</div>
    {delta && (
      <div className={`stat-card-delta ${up ? 'positive' : 'negative'}`}>
        <span>{up ? '↑' : '↓'}</span>
        <span>{delta}</span>
      </div>
    )}
  </div>
);

export default AdminCard;

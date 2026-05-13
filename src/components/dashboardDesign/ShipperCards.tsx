interface ShipperCardProps {
  title: string;
  value: string | number;
  icon: string;
  color?: string;
}

const ShipperCard = ({ title, value, icon, color = "#2563eb" }: ShipperCardProps) => (
  <div className="admin-stat-card" style={{ borderTop: `3px solid ${color}` }}>
    <div className="admin-stat-card__header">
      <span className="admin-stat-card__label">{title}</span>
      <span className="admin-stat-card__icon" style={{ color }}>{icon}</span>
    </div>
    <div className="admin-stat-card__value">{value}</div>
  </div>
);

export default ShipperCard;
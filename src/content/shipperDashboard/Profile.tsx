import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const ShipperProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  return (
    <div className="profile-card">
      <div className="profile-card__avatar">{user?.name ? user.name[0] : "S"}</div>
      <div className="profile-card__info">
        <h2>{user?.name || "Shipper Company"}</h2>
        <span className="td-badge td-badge--neutral">Shipper</span>
        <p>{user?.email || "shipper@example.com"}</p>
        <p>{user?.phone || "+254 722 111 222"}</p>
      </div>
      <div className="profile-card__actions">
        <button className="td-btn td-btn--outline">Edit Profile</button>
      </div>
    </div>
  );
};

export default ShipperProfile;
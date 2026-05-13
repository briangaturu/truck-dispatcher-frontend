import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const DriverProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  return (
    <div className="profile-card">
      <div className="profile-card__avatar">{user?.name ? user.name[0] : "D"}</div>
      <div className="profile-card__info">
        <h2>{user?.name || "Driver Name"}</h2>
        <span className="td-badge td-badge--neutral">Driver</span>
        <p>{user?.email || "driver@example.com"}</p>
        <p>{user?.phone || "+254 711 345 678"}</p>
      </div>
      <div className="profile-card__actions">
        <button className="td-btn td-btn--outline">Edit Profile</button>
      </div>
    </div>
  );
};

export default DriverProfile;
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const AdminProfile = () => {
  const { user } = useSelector((s: RootState) => s.auth);

  return (
    <div className="profile-card">
      <div className="profile-card__avatar">
        {user?.name ? user.name[0].toUpperCase() : "A"}
      </div>
      <div className="profile-card__info">
        <h2>{user?.name || "Administrator"}</h2>
        <p className="profile-card__role">
          <span className="td-badge td-badge--neutral">{user?.role || "admin"}</span>
        </p>
        <p>{user?.email || "admin@truckdispatcher.com"}</p>
        <p>{user?.phone || "+254 700 000 001"}</p>
      </div>
      <div className="profile-card__actions">
        <button className="td-btn td-btn--outline">Edit Profile</button>
        <button className="td-btn td-btn--outline">Change Password</button>
      </div>
    </div>
  );
};

export default AdminProfile;
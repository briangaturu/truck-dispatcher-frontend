import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

/**
 * TokenWatcher — mounts once at the app root.
 * Decodes the JWT expiry and auto-logouts when expired.
 */
const TokenWatcher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("td_token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiresAt = payload.exp * 1000;
      const msLeft = expiresAt - Date.now();

      if (msLeft <= 0) {
        dispatch(logout());
        navigate("/login");
        return;
      }

      const timer = setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, msLeft);

      return () => clearTimeout(timer);
    } catch {
      // token is not a real JWT in dev — skip
    }
  }, [dispatch, navigate]);

  return null;
};

export default TokenWatcher;
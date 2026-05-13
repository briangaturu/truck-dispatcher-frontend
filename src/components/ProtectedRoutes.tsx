import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

interface Props {
  allowedRoles?: string[];
}

const ProtectedRoutes = ({ allowedRoles }: Props) => {
  const { isAuthenticated, user } = useSelector((s: RootState) => s.auth);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
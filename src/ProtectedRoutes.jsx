import { useContext } from "react";
import { authContext } from "./AuthContext.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);
  const isAllowed = allowedRoles.includes(role);
  const accessibleRoute =
    token && isAllowed ? (
      children
    ) : (
      <Navigate to="/login-page" replace={true} />
    );

  return accessibleRoute;
};

export default ProtectedRoute;

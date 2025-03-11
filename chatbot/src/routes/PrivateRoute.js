import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, role, children }) => {
  return user && user.role === role ? children : <Navigate to="/" />;
};

export default PrivateRoute;

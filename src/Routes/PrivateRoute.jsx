import React, { use } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Shared/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;

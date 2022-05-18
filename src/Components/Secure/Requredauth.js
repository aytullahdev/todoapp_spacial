import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase";
import Progressbar from "../Progressbar";
import { Navigate, useLocation } from "react-router-dom";

const Requredauth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Progressbar />;
  }
  if (!loading) {
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }
};

export default Requredauth;

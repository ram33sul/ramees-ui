import React from "react";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Props } from "./ProtectedRoute.types";

export default function ProtectedRoute({
  children,
  isLoggedIn,
  shouldLogout = false,
  setPageBeforeLogin = () => {},
}: Props) {
  const location = useLocation();

  useEffect(() => {
    if (!shouldLogout && !isLoggedIn) {
      setPageBeforeLogin(location.pathname + location.search);
    }
  }, [shouldLogout, isLoggedIn]);

  return shouldLogout ? (
    !isLoggedIn ? (
      children
    ) : (
      <Navigate to={"/"} />
    )
  ) : isLoggedIn ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
}

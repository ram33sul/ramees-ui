import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.component";
import { Props } from "./AppRouter.types";

export default function AppRouter({ routes, isLoggedIn, setPageBeforeLogin }: Props) {
  return (
    <Routes>
      {routes.map(
        ({ path, element, isProtected = false, shouldLogout = false }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    shouldLogout={shouldLogout}
                    setPageBeforeLogin={setPageBeforeLogin}
                  >
                    {element}
                  </ProtectedRoute>
                ) : (
                  element
                )
              }
            />
          );
        }
      )}
    </Routes>
  );
}

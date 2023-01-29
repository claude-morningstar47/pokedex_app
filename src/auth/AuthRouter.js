import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "@/_utils/Error";
import AuthPage from "./AuthPage";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;

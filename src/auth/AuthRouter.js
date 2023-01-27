import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Error from "@/_utils/Error";

const AuthRouter = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AuthRouter;

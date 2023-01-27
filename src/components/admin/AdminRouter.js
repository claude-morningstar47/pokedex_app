import React from "react";
import { Route, Routes } from "react-router";

// Imported routes ===>
import LayoutAdmin from "./LayoutAdmin";
import { Dashboard } from "@/pages/admin";
import Error from "@/_utils/Error";

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AdminRouter;

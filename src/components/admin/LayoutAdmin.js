import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/components/admin/sideBar_section/SideBar";

const LayoutAdmin = () => {
  return (
    <div className="container">
      <SideBar />

      <Outlet />
    </div>
  );
};

export default LayoutAdmin;

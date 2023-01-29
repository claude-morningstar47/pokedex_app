import React from "react";
import { SideBar, Top } from "@/admin";
import { Outlet } from "react-router-dom";

import "@/admin/components/body_section/body.css";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <SideBar />
        <div className="mainContent">
          <Top />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

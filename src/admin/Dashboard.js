import React from "react";
import { SideBar } from "@/admin";
import { Outlet } from "react-router-dom";

import "@/admin/components/body_section/body.css";
import Top from "./components/top_section/Top";

const Dashboard = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="mainContent">
        <Top />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

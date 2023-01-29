import React from "react";
// import "./body.css";
import { Activity, Listing } from "@/admin";

const Body = () => {
  return (
    <>
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </>
  );
};

export default Body;

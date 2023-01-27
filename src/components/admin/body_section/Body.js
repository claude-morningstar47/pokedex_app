import React from "react";
import "./body.css";
import Top from "./top_section/Top";
import Listing from "./listing_section/Listing";
import Activity from "./activity_section/Activity";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;

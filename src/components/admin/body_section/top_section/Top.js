import React from "react";
import "./top.css";

// Imported Icons ====>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";
// Imported Images ====>
import img_1 from "@/assets/logo/profile.jpg";
// import img_2 from "@/assets/images/image_11.jpg";
// import video from "@/assets/videos/video_1.mp4";
// import { BsArrowRightShort } from "react-icons/bs";
// Imported functions ====>
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/account.service.js";

const Top = () => {
  let navigate = useNavigate();

  const logout = () => {
    accountService.logout();
    navigate("/");
  };

  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Mopeno.</h1>
          <p>hello Claude, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <CiLogout className="icon" onClick={logout} />
          <div className="adminImage">
            <img src={img_1} alt="Admin_Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        {/*
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div> */}

        {/* 
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders
                <BsArrowRightShort className="icon" />{" "}
              </span>
            </div>

            <div className="imgDiv">
              <img src={img_2} alt="Image_Name" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Top;

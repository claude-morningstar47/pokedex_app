import React from "react";
import "./activity.css";

// Imported Icons ====>
import { BsArrowRightShort } from "react-icons/bs";
// Imported Images ====>
import img_1 from "@/assets/images/image_9.jpg";
import img_2 from "@/assets/images/image_10.jpg";
import img_3 from "@/assets/images/image_11.jpg";
import img_4 from "@/assets/images/image_8.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img_1} alt="Image_Customer" />
          <div className="customerDetails">
            <span className="name">Emma MorningStar</span>
            <small>Ordered a new Mopeno</small>
          </div>
          <div className="duration">3 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={img_2} alt="Image_Customer" />
          <div className="customerDetails">
            <span className="name">Emma MorningStar</span>
            <small>Ordered a new Mopeno</small>
          </div>
          <div className="duration">3 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={img_3} alt="Image_Customer" />
          <div className="customerDetails">
            <span className="name">Emma MorningStar</span>
            <small>Ordered a new Mopeno</small>
          </div>
          <div className="duration">3 min ago</div>
        </div>

        <div className="singleCustomer flex">
          <img src={img_4} alt="Image_Customer" />
          <div className="customerDetails">
            <span className="name">Emma MorningStar</span>
            <small>Ordered a new Mopeno</small>
          </div>
          <div className="duration">3 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;

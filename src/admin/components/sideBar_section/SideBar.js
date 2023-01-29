import React from "react";
import "./sidebar.css";
// Imported Images ====>
import logo from "@/assets/logo/pikachu.png";
// Imported Icons ====>
import { IoMdSpeedometer } from "react-icons/io";
import {
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
  MdOutlineCatchingPokemon,
} from "react-icons/md";
import { BsCreditCard2Front, BsQuestionCircle } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image_Name" />
        <Link to="/">
          <h2>Pokedex.</h2>
        </Link>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/admin" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dash board</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#!" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="./pokemon/" className="menuLink flex">
              <MdOutlineCatchingPokemon className="icon" />
              <span className="smallText">My Pokemons</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="./user/" className="menuLink flex">
              <HiOutlineUser className="icon" />
              <span className="smallText">Users</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="#!" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#!" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#!" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="#!" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Pokedex, please contact us from for more
            questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

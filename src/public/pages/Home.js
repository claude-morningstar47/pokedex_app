import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="/admin">Admin</Link>
      <h1>Welcome to my App Pokedex</h1>
    </div>
  );
};

export default Home;

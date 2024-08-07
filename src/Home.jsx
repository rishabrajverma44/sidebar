import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <h1>
        {" "}
        <Link to="first">first</Link>
        <br></br>
        <Link to="second">second</Link>
        <br></br>
        <Link to="third">third</Link>
        <br></br>
        <Link to="four">four</Link>
        <br></br>
        <Link to="private-route">private</Link>
      </h1>
    </div>
  );
};

export default Home;

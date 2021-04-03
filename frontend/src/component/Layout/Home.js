import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h4>WELCOME TO COLLEGE-SUITE</h4>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
import Bars from "../../images/icon-hamburger.svg";

const Navbar = () => {
  const [present, setPresent] = useState(false);

  return (
    <div className="nav">
      <img src={Logo} alt="" />

      <div className={present ? "links active" : "links"}>
        <div className="mid">
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Resources</a>
        </div>
        <hr />
        <div className="far-left">
          <a href="">Login</a>
          <a href="" className="btn">
            Sign up
          </a>
        </div>
      </div>

      <img
        src={Bars}
        onClick={() => setPresent(!present)}
        className="menuBar"
        alt=""
      />
    </div>
  );
};

export default Navbar;

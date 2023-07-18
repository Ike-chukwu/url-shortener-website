import React from "react";
import "./Below.css";
import Cards from "./Cards/Cards";

const Below = () => {
  return (
    <div className="below">
      <h2>Advanced Statistics</h2>
      <p className="subtext">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <Cards />
    </div>
  );
};

export default Below;

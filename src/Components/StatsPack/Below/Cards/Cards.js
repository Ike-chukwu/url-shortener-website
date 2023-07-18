import React from "react";
import "./Cards.css";
import Brand from "../../../../images/icon-brand-recognition.svg";
import Record from "../../../../images/icon-detailed-records.svg";
import Custom from "../../../../images/icon-fully-customizable.svg";
import Card from "./Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cyan-line"></div>
      <div className="card-pack">
        <Card
        src={Brand}
          heading="Brand Recognition"
          paragraph="Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content."
        />
        <Card
        src={Record}
          heading="Detailed Records"
          paragraph=" Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform decisions."
        />
        <Card
        src={Custom}
          heading="Fully Customizable"
          paragraph="Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
};

export default Cards;

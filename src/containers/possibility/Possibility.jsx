import React from "react";
import possilibityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possilibityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis vero
          maxime ipsam totam, assumenda repellat modi quo exercitationem omnis
          rem aut rerum illo at accusamus ducimus doloremque dolorum placeat
          quae.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;

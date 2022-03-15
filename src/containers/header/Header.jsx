import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet ipsum dolor sit amet consectetur, adipisicing elit. Est,
          asperiores repellendus. Soluta dolor iusto maiores ipsa quidem
          aliquam, rerum mollitia velit esse architecto illo, quod omnis veniam
          totam tempore! Laudantium!
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600+ people requested access to visit in last 24 hours</p>
        </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="openai" />
      </div>
    </div>
  );
};

export default Header;

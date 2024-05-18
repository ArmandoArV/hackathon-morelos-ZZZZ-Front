import React from "react";
import "./IconComponent.css";

const IconComponent = ({ iconSrc, text }) => {
  return (
    <div className="icon">
      <div className="imageContainer">
        <img className="img" src={iconSrc} alt="" />
      </div>
      <div className="textContainer">
        <p>
          {text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default IconComponent;

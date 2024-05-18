import React from "react";
import "./footer.css";
import Logo from "../images/logo_short.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footercont">
          <div className="logo-footer-container">
            <div className="footerlogo">
              <Link to="#">
                <img src={Logo}></img>
              </Link>
            </div>
            <div className="footertext">
              <p>Empoderando financieramente a las mujeres mexicanas.</p>
            </div>
          </div>

          <div>
            <p> &#169; Freya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

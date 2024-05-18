import { navBarElements } from "../../constants";
import React from "react";
import "./navbar.css";
import Logo from "../../images/logo_short.svg";
import { Link } from "react-router-dom";

export default function NavbarLanding() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className="navbarContainer">
        <ul className="navbarList">
          <li className="navbarItem">
            <div
              className="logo-container"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              <img src={Logo} alt=""></img>
            </div>
          </li>
          {Object.entries(navBarElements).map(([key, element]) => (
            <li className="navbarItem" key={key}>
              <a
                href={element.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(element.id.substring(1));
                }}
              >
                {element.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="buttons-container">
          <Link to="/registro">
            <button className="elementButton">
              <p>Registro</p>
            </button>
          </Link>
          <Link to="/iniciar-sesion">
            <button className="elementButton">
              <p>Iniciar sesión</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="buttons-container-external">
        <Link to="/registro">
          <button className="elementButton-external">
            <p>Registro</p>
          </button>
        </Link>
        <Link to="/iniciar-sesion">
          <button className="elementButton-external">
            <p>Iniciar sesión</p>
          </button>
        </Link>
      </div>
    </>
  );
}

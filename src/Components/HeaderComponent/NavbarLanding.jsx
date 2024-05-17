import { navBarElements } from '../../constants';
import React from 'react';
import './navbar.css'
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
    <div className="navbarContainer">
      <ul className="navbarList">
        <li className="navbarItem">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
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
    </div>
  );
}

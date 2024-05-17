import { navBarElements } from '../../constants';
import React from 'react';
import './navbar.css'
import Logo from '../../images/logo_completo.png'

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
          <div className='logo-container'
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <img src={Logo}></img>
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
        <div className='buttons-container'>
          <button>Registrar</button>
          <button className='inicio-btn'>Iniciar sesión</button>
        </div>
        
      </ul>
      
    </div>
  );
}

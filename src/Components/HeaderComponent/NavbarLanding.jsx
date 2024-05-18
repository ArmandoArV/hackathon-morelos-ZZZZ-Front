import { navBarElements } from '../../constants';
import React from 'react';
import './navbar.css'
import Logo from '../../images/logo_completo.svg'
import {Link} from 'react-router-dom'

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
      <div id="up"></div>
      <div id="down"></div>
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
          <button> <Link to="/Dashboard"><font color ="#5B57F4">Dashboard</font></Link></button>
          <button> <Link to="/registro"><font color ="#5B57F4">Registro</font></Link></button>
          <button className="inicio-btn"><Link to="/iniciar-sesion"><font color ="#5B57F4">Iniciar sesión</font></Link></button>
        </div>
        
      </ul>
      
    </div>
  );
}

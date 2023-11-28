import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import menu from "../Assests/menu.png";
import "./menu.css";
import Visitante from "./Visitante";

function MenuBar() {
  const [showMenu, setshowMenu] = useState(false);

  const active = () => {
    setshowMenu(true);
    showMenuActive();
  }

  const showMenuActive = () => {

    if(showMenu === true ) {
      const menubar = document.getElementsByClassName('menu-bar');
      if(showMenu === true) {
        menubar[0].classList.toggle("show");
      }
    }

    
  }
  

  return (
    <section className="menu-bar">
      <div className="Menu-icon">
        <figure onClick={() => active()}>
          <img src={menu} alt="Icone de Menu" />
        </figure>
      </div>
      <nav>
        <ul>
          <li>
              <ScrollLink to="home" smooth={true} duration={500}>
              <Link to="/">
                Inicio
              </Link>
              </ScrollLink>
            </li>
          <li><ScrollLink to="destaque" smooth={true} duration={500}>Cardapio</ScrollLink></li>
          <li><ScrollLink to="galeria" smooth={true} duration={500}>Galeria</ScrollLink></li>
          <li><ScrollLink to="eventos" smooth={true} duration={500}>Eventos</ScrollLink></li>
          <li><ScrollLink to="faq" smooth={true} duration={500}>FAQ</ScrollLink></li>
          <li><ScrollLink to="equipe" smooth={true} duration={500}>Equipe</ScrollLink></li>
          <li><ScrollLink to="newsletter" smooth={true} duration={500}>NewsLetters</ScrollLink></li>
          <Visitante />
        </ul>
      </nav>
    </section>
  );
}

export default MenuBar;

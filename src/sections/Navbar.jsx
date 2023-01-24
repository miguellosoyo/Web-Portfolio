import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import JSlogo from "../assets/img/imgComun/logo_450x200_azul_trans.png";
import ButtonMenu from "../assets/img/imgComun/bx-menu.svg";

// const routes = [];
// routes.push({
//   to: "/",
//   title: "Home",
// });
// routes.push({
//   to: "/aboutme",
//   title: "AboutMe",
// });
// routes.push({
//   to: "/skills",
//   title: "Skills",
// });
// routes.push({
//   to: "/projects",
//   title: "Projects",
// });
// routes.push({
//   to: "/contact",
//   title: "Contact",
// });

const Navbar = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // function movileMenu() {
  //   setToggleMenu(!toggleMenu);
  //   console.log(toggleMenu);
  // }

  return (
    <nav id="navbar" aria-label="navigation bar" className={className}>
      <a href="#welcome-section" className="logo-header">
        <img src={JSlogo} alt="logo" className="nav-logo" />
      </a>
      <div className="enlaces-header">
        <a
          className="animate__animated animate__pulse animate__infinite "
          href="#aboutme"
        >
          About Me
        </a>
        <a
          className="animate__animated animate__pulse animate__infinite "
          href="#skills"
        >
          Skills
        </a>
        <a
          className="animate__animated animate__pulse animate__infinite "
          href="#projects"
        >
          Projects
        </a>
        <a
          className="animate__animated animate__pulse animate__infinite "
          href="#contact"
        >
          Contact
        </a>
      </div>
      {/* <div className="boton-menu" onClick={() => movileMenu()}>
        <img src={ButtonMenu} alt="" />
      </div> */}
      <span className="indicador" id="indicador"></span>

      {/* {routes.map((route) => {
       
       if(route.title === 'Home'){
        return (
          <NavLink
            key={route.title}
            style={({ isActive }) => ({
              color: isActive ? "red" : "green",
            })}
            to={route.to}
            end
          >
            <img src={JSlogo} alt="" />
          </NavLink>
        );
       } 
       
       
       return (
          <NavLink
            key={route.title}
            style={({ isActive }) => ({
              color: isActive ? "red" : "green",
            })}
            to={route.to}
            end
          >
            {route.title}
          </NavLink>
        );
      })} */}
    </nav>
  );
};

export default styled(Navbar)`
  background: #fff;
  height: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  /* Menu Pegajoso */
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 100;
  flex: 1;

  a {
    flex: 1;
    /* width: 100%; */
    height: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
    transition: 0.2s ease-in-out all;
    font-weight: 500;
  }

  a:hover {
    background: #f2f2f2;
  }
  .logo-header {
    width: 80px;
  }
  .enlaces-header {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }
  img {
    height: 80px;
  }

  .indicador {
    width: 0;
    height: 5px;
    background: #4e66f8;
    position: absolute;
    bottom: 0;
    transition: 0.3s ease-in-out all;
    transform: translate(100px);
  }
  
  @media screen and (max-width: 500px) {
    .logo-header{
      
      width:20%;
    }
    img{width:100%;
      height:auto;}
    a{
      font-size:14px;
    }

 
  }
`;

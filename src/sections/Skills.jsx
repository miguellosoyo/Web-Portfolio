import React from "react";
import styled from "styled-components";
import {TitleH2} from '../elementsUI/Titles'
import LogoHTML from '../assets/img/imgComun/logo-html.svg'
import LogoCSS from '../assets/img/imgComun/logo-css.svg'
import LogoJS from '../assets/img/imgComun/logo-javascript.svg'
import LogoPostgresql from '../assets/img/imgComun/logo-postgresql.svg'
import LogoReact from '../assets/img/imgComun/logo-react.svg'
import LogoDjango from '../assets/img/imgComun/logo-django.svg'

const skills = [
  { skill: "HTML", id: "html-bar", type: "code", logo:LogoHTML },
  { skill: "CSS", id: "CSS-bar", type: "code", logo:LogoCSS },
  { skill: "Javascript", id: "JS-bar", type: "code", logo:LogoJS },
  { skill: "Postgresql", id: "Postgresql-bar", type: "code", logo:LogoPostgresql },
  { skill: "React", id: "React-bar", type: "framework", logo:LogoReact },
  { skill: "DJango", id: "DJango-bar", type: "framework", logo:LogoDjango },
];

const Skills = ({ className }) => {
  return (
    <section className={className} id="skills">
      <div className="skills skills-card">
        <div className="skills-description">
          <div className="skillLogo html-logo animate__animated animate__swing animate__repeat-3 "></div>
          <div className="animate__animated animate__swing animate__repeat-2 skillLogo css-logo"></div>
          <div className="animate__animated animate__swing animate__infinite skillLogo javascript-logo"></div>
          <div className="animate__animated animate__swing animate__repeat-2 skillLogo postgresql-logo"></div>
          <div className="animate__animated animate__swing animate__infinite skillLogo react-logo"></div>
          <div className="animate__animated animate__swing animate__infinite skillLogo django-logo"></div>
          {/* <!-- <img src="img/img-skills.svg" alt="skills image" /> --> */}
        </div>
        <div className="skills-box">
          <TitleH2>Skills</TitleH2>

          {skills.filter(skill=> skill.type ==='code')
          .map((element) => {
            return (
              <div className="skills-bar" key={element.id}>
                <div className="skills-details ">
                  <span>{element.skill}</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="skillsBar" id={element.id}></div>
                </div>
              </div>
            );
          })}

          <TitleH2>Frameworks</TitleH2>

          {skills.filter(skill=> skill.type ==='framework')
          .map((element) => {
            return (
              <div className="skills-bar" key={element.id}>
                <div className="skills-details ">
                  <span>{element.skill}</span>
                  <span></span>
                </div>
                <div className="bar">
                  <div className="skillsBar" id={element.id}></div>
                </div>
              </div>
            );
          })}
           
        </div>
      </div>
    </section>
  );
};

export default styled(Skills)`
 

  .skills {
    display: flex;
    flex-direction: row-reverse;
    /* position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%; */
    justify-content: space-around;
    align-items: center;
  }

  .skills-card {
    padding: 30px 30px 50px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }

  .skills-description {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;
    width: 30%;
  }
  .skillLogo {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: 100px;
    height: 100px;
    border-radius: 30%;
    border: 3px solid rgb(78, 102, 248);
    margin: 10px 0;
    background-color: white;
  }
  .skillLogoTitle {
    width: 90%;
    text-align: center;
    font-size: 20px;
    background: rgba(49, 49, 49, 0.789);
    color: rgb(255, 255, 255);
    padding: 5px 10px;
    border-radius: 10px;
  }

  /* SKILLS LOGO */
  
  .html-logo {
    background-image: url(${LogoHTML});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .css-logo {
    background-image: url(${LogoCSS});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .javascript-logo {
    background-image: url(${LogoJS});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .postgresql-logo {
    background-image: url(${LogoPostgresql});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .react-logo {
    background-image: url(${LogoReact});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .django-logo {
    background-image: url(${LogoDjango});
    background-position: center;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .skills-bar {
    margin-bottom: 15px;
  }

  .skills-box {
    width: 60%;
  }
  .skills-box .skill .html5 {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-image: url(./img/logo-html.svg);
    background-repeat: no-repeat;
    background-size: 100px 100px;
  }
  .skills-box img {
    width: 200px;
    fill: #00834e;
  }

  .skills-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .bar {
    position: relative;
    border: 3px solid #4e66f8;
    border-radius: 20px;
  }

  .bar div {
    position: relative;
    width: 0;
    height: 10px;
    border-radius: 10px;
    background-color: #4e66f8;
    margin: 2px;
  }

  #html-bar {
    animation: html-fill 5s forwards;
  }

  @keyframes html-fill {
    100% {
      width: 90%;
    }
  }

  #CSS-bar {
    animation: CSS-fill 3s forwards;
  }

  @keyframes CSS-fill {
    100% {
      width: 80%;
    }
  }

  #JS-bar {
    animation: JS-fill 5s forwards;
  }

  @keyframes JS-fill {
    100% {
      width: 80%;
    }
  }

  #React-bar {
    animation: React-fill 5s forwards;
  }

  @keyframes React-fill {
    100% {
      width: 80%;
    }
  }

  #DJango-bar {
    animation: DJango-fill 7s forwards;
  }

  @keyframes DJango-fill {
    100% {
      width: 80%;
    }
  }

  #Postgresql-bar {
    animation: Postgresql-fill 9s forwards;
  }

  @keyframes Postgresql-fill {
    100% {
      width: 75%;
    }
  }
  @media screen and (max-width: 500px) {
    .skillLogo {
    
    width: 50px;
    height: 50px;
     
  }
  }

`;

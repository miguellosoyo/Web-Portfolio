import React from "react";
import { PrimaryLink } from "../elementsUI/Buttons";
import {TitleH2} from '../elementsUI/Titles'
import styled from "styled-components";

import AboutMeImg from "../assets/img/imgComun/Startup_Monochromatic.png";

const AboutMe = ({ className }) => {
  return (
    <section className={`seccion aboutme ${className}`} id="aboutme">
      <div id="aboutme-card " className="aboutme-card">
        <div className="aboutme-img home__img">
          {/* <img src={AboutMeImg} className="" alt="aboutme image" /> */}
        </div>
        <div className="aboutme-text" aria-level="1" aria-label="about me section">
          <TitleH2 aria-label="Hello, My name is Miguel Granados">
            Hello, My name is Miguel Granados,
            <br />
            I'm a data scientist
          </TitleH2>
          <p>Let me help you with your project</p>
          <PrimaryLink 
          href="https://drive.google.com/file/d/1_0pH7I-cwbRuUnTKyiZj5WlF4kowtXkP/view?usp=sharing"
          target="_blank"
          
          aria-label="You can download my resume here">new Download Resume </PrimaryLink>
          
        </div>
      </div>
    </section>
  );
};

export default styled(AboutMe)`
 height: 100vh;
 width: 100%;
  margin: auto;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 242, 242);
.aboutme {
  background-color: rgba(255, 255, 255, 0);
  margin: 0 auto;
}
.aboutme-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
}

.aboutme-img {
  width: 40%;
}
.aboutme-img img {
  width: 100%;
}
.aboutme-text {
  width: 60%;
  margin: 0 20px;
}

.aboutme-text p {
  line-height: 38px;
  margin-bottom: 40px;
  color: #494949;
  font-size: 20px;
}

.home__img {
  background-image: url(${AboutMeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(0, 0, 0);
  order: 1;
  justify-self: center;
  width: 400px;
  height: 400px;
  animation: profile__animate 8s ease-in-out infinite 1s;
}

@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}

@media screen and (max-width: 900px) {
  nav img {
    height: auto;
    width: 100%;
    font-size: 14px;
    padding: 5px;
  }
  .hero h1 {
    font-size: 4rem;
    text-align: center;
  }
  .hero p {
    font-size: 2rem;
    text-align: center;
    margin: 10px 15px 0 15px;
  }
  .aboutme-card {
    flex-direction: column-reverse;
    height: 80vh;
    justify-content: space-around;
  }
  .aboutme-img {
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .aboutme-img img {
    height: auto;
    width: 60vw;
  }
  .skills {
    flex-direction: column;
  }
  .skills-description {
    width: 50%;
  }
  .project {
    width: 40%;
  }
  .project-card h3 {
    font-size: 1rem;
    font-weight: 500;
    padding: 7px 0;
  }
  .project-card ul {
    font-size: 0.6rem;
  }
  .contact {
    background-size: auto;
    background-position: top;
    justify-content: space-around;
    height: calc(100vh - 80px);
    min-height: calc(100vh - 80px);
  }
  .social-media {
    padding-top: 10px;
    width: 70%;
  }
  .social-media a {
    margin-left: 0;
  }
}

@media screen and (max-width: 600px) {
  .seccion h2 {
    font-size: 30px;
  }
  .hero {
    height: calc(100vh - 120px);
  }
  .aboutme-text {
    text-align: center;
  }
  .aboutme-text p {
    line-height: 38px;
    margin-bottom: 0;
  }
  .project {
    width: 90%;
  }
  .skillLogo {
    width: 70px;
    height: 70px;
    margin:  5px;
  }
  /* CONTACT FORM */
  .contactFormCard {
    width: 80vw;
  }
}

@media screen and (max-width: 450px) {
  nav a {
    font-size: 12px;
  }
  .skills-description{
    width: 90%;
  }
  .skillLogo {
    width: 50px;
    height: 50px;
  }
  .social-media {
    width: 90%;
  }
  .social-media-icon {
    width: 40px;
    height: 40px;
  }

  .social-media-icon i {
    font-size: 20px;
    line-height: 40px;
  }
}

`;

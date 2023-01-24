import React from "react";
import styled from "styled-components";
import background from "../assets/img/imgComun/bg_contact.jpg";
import { PrimaryLink, PrimaryButton } from "../elementsUI/Buttons";
import { TitleH2 } from "../elementsUI/Titles";
const Contact = ({ className }) => {
  return (
    <section className={className} id="contact">
      <div className="contact-me">
        <TitleH2>{'<----- Contact me ----->'}</TitleH2>
        <PrimaryButton id="ContactFormButton" className="project-card-btn">
          Send me a Message <i className="bx bx-message-edit"></i>
        </PrimaryButton>
      </div>

      <div className="social-media">
        <a
          href="https://github.com/aramxD"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-angel-granados-losoyo-431641181/"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a
          href="mailto:miguel.losoyo@hotmail.com"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bx-envelope"></i>
        </a>
        <a
          href="https://www.wa.link/mqz551"
          target="_blank"
          className="social-media-icon"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
      </div>
      <div className="notification" id="notification">
        <div className="message">
          <p>Sending 📩</p>
        </div>
        <div className="progress" id="progress"></div>
      </div>
      <div className="contactFormCard" id="contactFormCard">
        <form action="." className="contactForm " id="contactForm">
          <div className="closeIcon">
            <i className="bx bx-x-circle"></i>
          </div>

          <div id="formTitle"></div>
          <div id="formError"></div>

          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="20" rows="10"></textarea>

          <PrimaryButton
            id="submitContactFormButton"
            type="button"
            className="project-card-btn"
          >
            Submit 🤖
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};

export default styled(Contact)`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  max-width: 100%;
  width: 100vw;
  height: calc(100vh - 180px);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: #ffffff;
  text-align: center;
  .contact-me{
    display:flex;
    flex-direction:column;
  }
  .contact-me h2 {
    font-size:34px;
    margin:20px 0
  }

  .contact-me a {
    font-size: 20px;
  }
  .social-media {
    display: flex;
    justify-content: flex-start;
    justify-content: space-evenly;
    padding-top: 30px;
    margin: 0 auto;
    width: 50%;
  }

  .social-media-icon {
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 50%;
    text-align: center;
    color: rgb(0, 0, 0);
  }

  .social-media-icon:hover {
    background: white;
    color: #4e66f8;
    border: 2px solid #4e66f8;
  }

  .social-media-icon i {
    font-size: 30px;
    line-height: 60px;
  }

 

  /* FORM DATA  */

  .contactFormCard {
    position: fixed;
    top: 0;
    right: 0;
    width: 40vw;
    max-width: 400px;
    height: 100%;
    background-color: #ffffff;
    /* background-image: linear-gradient(135deg, #4b5ca7 0%rgb(118, 75, 162) 100%); */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: transform 0.3s ease-in-out;
    transform: translate(110%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.719);
    z-index: 2;
  }

  .spread {
    transform: translate(0);
  }
  .closeIcon {
    text-align: right;
    font-size: 30px;
  }
  .closeIcon i:hover {
    text-align: right;
    font-size: 30px;
    transition: ease-in;
    transform: translateY(-4px);
  }
  .contactForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    width: 90%;
    margin: auto 0;
    z-index: 3;
    background-color: transparent;
  }
  input {
    height: 30px;
    border-radius: 7px;
    padding: 5px;
  }
  label {
    margin-top: 10px;
    font-size: var(--size-parrafo);
  }
  textarea {
    height: 100px;
    border: 2px solid black;
    border-radius: 7px;
    padding: 5px;
    margin: 0 0 20px 0;
  }

  .notification {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    max-width: 400px;
    height: 80px;
    padding: 20px 15px;
    border-radius: 10px;
    background-color: #141519b6;
    color: #f6f5f9;
    box-shadow: 0 1px 10px rgba(0, 0, 0.1);
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    /* animation: fade 4s linear forwards; */
  }
  .notification .progress {
    position: relative;
    left: 5px;
    bottom: 5px;
    width: 10px;
    height: 3px;
    background: linear-gradient(to right, #529dbd, #2150bf);
    border-radius: 5px;
    /* animation: progressBar 3s .25s linear forwards; */
  }
  @keyframes fade {
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
    60% {
      background-color: #141519b6;
    }
    70% {
      background-color: #00834e;
    }
    80% {
      opacity: 1;
      transform: translateY(0px);
      background-color: #00834e;
      color: #000;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
  @keyframes progressBar {
    to {
      width: calc(100% - 10px);
    }
  }
  @media screen and (max-width: 500px) {
    background-size: auto;
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

import React from "react";
import styled from "styled-components";

const Hero = ({ className }) => {
  return (
    <header className={className} id="welcome-section">
      <div className="hero">
        <h1>Julio Santacruz Frontend Dev</h1>

        <p>HTML • CSS • Javascript • React • Django • Postgresql</p>
      </div>
    </header>
  );
};

export default styled(Hero)`
 height: 100vh;


.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  background-color: rgb(242, 242, 242);
  padding: 30px;
}

.hero h1 {
  color: black;
  font-size: 70px;
}

.hero p {
  font-size: 30px;
  text-transform: uppercase;
  color: #4e66f8;
}`;

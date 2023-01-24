import React from "react";
import styled from "styled-components";


const Footer =({className}) =>{




    return(
        <footer className={className}>
            <div className="container footer-content">
        <div className="footer-btn">
          <a href="#welcome-section"><i className="bx bx-up-arrow-circle"></i></a>
          <p>Inicio</p>
        </div>
      </div>

        </footer>
    )
}


export default styled(Footer)`
 
  background: #4e66f8;
  padding-bottom: 0.1px;
 

.footer-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-right: 20px;
}

.footer-btn {
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-btn i {
  font-weight: 500;
  font-size: 40px;
  color: white;
}`
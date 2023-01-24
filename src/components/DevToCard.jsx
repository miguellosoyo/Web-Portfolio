import React from "react";
import styled from "styled-components";
import { PrimaryLink } from "../elementsUI/Buttons";
import {TitleH3} from "../elementsUI/Titles"

const DevToCard = ({ post, className }) => {
  return (
    <article className={className}>
      <div className="project-card project-card-shadow">
        <div className="project-card-img center-img">
          <img
            src={post.social_image}
            alt="discounts city project"
            className=""
          />
        </div>

        <TitleH3 className="project-tile">{post.title}</TitleH3>

        <PrimaryLink href={post.url} target="_blank">
          Go to Post..!
        </PrimaryLink>
      </div>
    </article>
  );
};

export default styled(DevToCard)`
  

  width: 100%;
  margin: 0.5rem 0;
  height: 500px;

  .project-card {
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    background: white;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.514);
    border-radius: 1rem;
    height: 100%;
  }

  .project-card-img {
    
    overflow: hidden;
    cursor: pointer;
  }

  .center-img {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .project-card-img > img {
    align-items: center;
    width: 100%;
    border: 2px solid black;
  }

  

  .project p {
    margin: 20px 0;
    color: #494949;
    font-size: 1rem;
  }

  .project-card ul {
    display: flex;
    font-weight: 600;
    font-size: 0.75rem;
    justify-content: space-around;
  }

  .project-card li {
    padding: 0.25rem;
    display: flex;
    width: 20%;
    justify-content: space-evenly;
  }

  .project-card i {
    font-size: 1rem;
  }

  .project-card-footer {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project-card-footer p {
    margin: 0;
    font-size: 0.6rem;
  }

  .project-card.project-card-shadow {
    border: none;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.411);
  }
`;

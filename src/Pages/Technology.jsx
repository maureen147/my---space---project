import React from "react";
import "../Css/Technology.css";
import { useState } from "react";
import { TechDB } from "../DB/TechnologyDB";

const Technology = () => {
  const [techs] = useState(TechDB);
  const [value, setValue] = useState(0);
  const { name, images, description } = techs[value];

  return (
    <div className="technology-bg">
      <div className="technology">
        <main>
          <div className="title-page-tech">
            <h1>
              <span>03</span>SPACE LAUNCH 101
            </h1>
          </div>
          <div className="content-tech">
            <div className="left-side-tech">
              <div className="btns-tech">
                {techs.map((tech, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setValue(index); 
                    }}
                    className={`${index === value && 'active'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="about-tech">
                <h2>THE TECHNOLOGY...</h2>
                <h1>{name.toUpperCase()}</h1>
                <p>{description}</p>
              </div>
            </div>
            <div className="right-side-tech">
              <img
                src={images.portrait}
                title={name}
                className="desktop-tech"
              />
              <img
                src={images.landscape}
                title={name}
                className="mobile-tech"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Technology;

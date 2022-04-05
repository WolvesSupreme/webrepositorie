import React from "react";
import aboutImg from "../../../assets/about.png";

const About = () => {
  const data = [
    {
      title: "About Us",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, arcu facilisi purus venenatis semper inceptos, dictumst cras fermentum bibendum lectus sed. ",
      frase:
        "Learning is not attained by chance, it must be sought for with ardor and attender to width diligence",
      persona: "---Abigail Adams",
    },
  ];
  return (
    <section id="about-item">
      <div className="about-lef-col">
        <img src={aboutImg} />
      </div>

      <div className="about-right-col">
        {data.map((item, index) => {
          return (
            <article className="about-text" key={index}>
              <h1>
                {item.title} <br />
              </h1>
              <p>{item.text}</p>
              <h2>"{item.frase}"</h2>
              <h3>{item.persona}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;

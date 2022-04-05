import React from "react";
import offerImg from "../../../assets/offer.png";

const Offer = () => {
  const data = [
    {
      title: "Limitless learning, limitless possibilities",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
      frase:
        "Learning is not attained by chance, it must be sought for with ardor and attender to width diligence",
      persona: "---Abigail Adams",
    },
  ];
  return (
    <section id="offer">
      <article className="offer-left-col">
        <img src={offerImg} alt="" />
      </article>

      <article className="offer-righ-col">
        {data.map((el, index) => {
          return (
            <div className="offer-text" key={index}>
              <h1 className="offer-title">
                {el.title}
                <br />
              </h1>
              <p className="offer-parrafo">{el.text}</p>

              <h2 className="offer-title-2">"{el.frase}"</h2>

              <h3 className="offer-title-3">{el.persona}</h3>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Offer;

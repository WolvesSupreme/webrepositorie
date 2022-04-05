import React from "react";
import featureImg from "../../../assets/pic-1.png";
import featureImg_1 from "../../../assets/pic-2.png";
import featureImg_2 from "../../../assets/pic-3.png";

const Features = () => {
  const [Lear] = React.useState({
    title: "Lear Anywhre",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
  });
  const [Expert] = React.useState({
    title: "Expert Teachers",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
  });
  const [Unlimted] = React.useState({
    title: "Unlimted Access",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
  });
  return (
    <section id="features">
      <div className="feature-row">
        <article className="feature-col">
          <img src={featureImg} alt="" />
          <h4>{Lear.title}</h4>
          <p>{Lear.text}</p>
        </article>
        <article className="feature-col">
          <img src={featureImg_1} alt="" />
          <h4>{Expert.title}</h4>
          <p>{Expert.text}</p>
        </article>
        <article className="feature-col">
          <img src={featureImg_2} alt="" />
          <h4>{Unlimted.title}</h4>
          <p>{Unlimted.text}</p>
        </article>
      </div>
      <div className="feature-btn">
        <button className="common-btn">Start Free Trial</button>
      </div>
    </section>
  );
};

export default Features;

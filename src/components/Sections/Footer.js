import React from "react";
import footerImg from '../../assets/logo.png';

const Footer = () => {
  const data = [
    {
      type: "Product",
      text: "Our Plan",
      text_2: "Free Trial",
    },
    {
      type: "About Us",
      text: "Request Demo",
      text_2: "FAQs",
    },
    {
      type: "Support",
      text: "Features",
      text_2: "Contact Us",
    },
    {
      type: "Explore",
      text: "Find a nonprofit",
      text_2: "Coporate Solution",
    },
  ];

  return (
    <section id="footer">
      <div className="container footer-row">
        <hr></hr>
        
        <article className="footer-left-col">
          <div className="footer-links">
            {data.map((footer, index) => {
              return (
                <div className="link-title" key={index}>
                  <h6>{footer.type}</h6>
                  <small>{footer.text}</small>
                  <br />
                  <small>{footer.text_2}</small>
                </div>
              );
            })}
          </div>
        </article>

        <article className="footer-right-col">
          <div className="footer-info">
            <div className="copyright-text">
              <small>Support@Xypo.com</small><br/>
              <small>copyright 2022 Xypo</small>
            </div>
            <div className="footer-logo">
              <img src={footerImg} alt=''/>
              <button className="footer-btn">English</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Footer;

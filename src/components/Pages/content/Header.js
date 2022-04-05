import React from "react";
import logo from "../../../assets/logo.png";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
const Header = () => {
  const data = [
    {
      title: "The purpose",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
    },
  ];
  return (
    <section id="header">
      <div className="contenido">
        <img src={logo} alt="" className="logo" />
        {data.map((el, index) => {
          return (
            <div className="header-text" key={index}>
              <h1>{el.title}</h1>
              <p>{el.text}</p>
              <button className="btnHeader btn1" id="menuBtn">
                Read More
              </button>
              <div className="line">
                <span className="line-1"></span>
                <br />
                <span className="line-2"></span>
                <br />
                <span className="line-3"></span>
                <br />
              </div>

              <div className="social-links">
                <a href="#" className="facebook">
                  <FiFacebook />
                </a>
                <a href="#">
                  <FiTwitter />
                </a>
                <a href="#">
                  <FiInstagram />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Header;

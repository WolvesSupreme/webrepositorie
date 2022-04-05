import React from "react";


const Flotante = () => {
  return (
    <div className="argumento">
      <input type="checkbox" id="btn-mas"></input>
      <div className="redes">
        <a href="https://www.facebook.com/StuwarGironGarcia/" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/stuwar0306/" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://twitter.com/NeoAtla" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="btn-mas">
        <label htmlFor="btn-mas">
        <i class="fa-solid fa-plus"></i>
        </label>
      </div>
    </div>
  );
};

export default Flotante;

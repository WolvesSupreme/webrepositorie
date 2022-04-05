import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";

const Scrolltop = () => {
  const [click, setClick] = useState();
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <section className="scroll-container" onClick={handleClick}>
      <Link
        to="header"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={closeMenu}
      >
        <a className="scroll">
          <i class="fa-solid fa-arrow-up"></i>
        </a>
      </Link>
    </section>
  );
};

export default Scrolltop;

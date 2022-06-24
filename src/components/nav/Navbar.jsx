import React, { useState } from "react";
import "./NavbarStyle.css";
import { FaViacoin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clicked = () => setClick(!click);
  const closeMenu = () => setClick(false)

  return (
    <>
      <div className="nav-container">
        <Link
          style={{ cursor: "pointer" }}
          to="home"
          smooth={true}
          duration={2000}
          
        >
          <FaViacoin className="logo" size={25} />
        </Link>

        <ul className={click ? "nav-list active" : "nav-list "}>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              to="home"
              smooth={true}
              duration={2000}
              onClick={closeMenu}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              to="featured"
              smooth={true}
              duration={2000}
              onClick={closeMenu}
            >
              featured
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              to="support"
              smooth={true}
              duration={2000}
              onClick={closeMenu}
            >
              support
            </Link>
          </li>
        </ul>
        <div className="humb" onClick={clicked}>
          {click ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;

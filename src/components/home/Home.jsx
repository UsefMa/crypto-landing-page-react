import React from "react";
import "./HomeStyle.css";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="home-info">
          <h2>
            All About <span>Crypto</span>
          </h2>
          <p>Things Change Every 0.0005 s</p>
          <p>Make It Happen</p>

          <Link style={{cursor:"pointer"}}
              to="featured"
              smooth={true}
              duration={2000}
              
              
            >
            <AiOutlineDown size={50} className="down-icon" />
     
            </Link>
         
        </div>
      </div>
    </>
  );
};

export default Home;

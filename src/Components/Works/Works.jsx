import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Explored these
          </span>
          <span>Coding platforms</span>
          <spane>
            4⭐ at Codechef with Max. Rating of 1806
            <br />
            6⭐ at hackerrank
            <br />
            Pupil at Codeforces with Max. Rating of 1278
            <br />
            300+ problems solved on GeeksforGeeks
            <br />
            200+ problems solved on Leetcode.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
           <a href="https://codeforces.com/profile/rj1682003" target="_blank">
            <img src={Upwork} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
          <a href="https://www.codechef.com/users/rj1682003" target="_blank">
            <img src={Fiverr} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
          <a href="https://auth.geeksforgeeks.org/user/rajagri1682003" target="_blank">
            <img src={Amazon} alt="" />
            </a>
          </div>{" "}
          <div className="w-secCircle">
          <a href="https://www.hackerrank.com/Raj_agrahari" target="_blank">
            <img src={Shopify} alt="" />
            </a>
          </div>
          <div className="w-secCircle">
          <a href="https://leetcode.com/RajAgrahari/" target="_blank">
            <img src={Facebook} alt="" />
            </a>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
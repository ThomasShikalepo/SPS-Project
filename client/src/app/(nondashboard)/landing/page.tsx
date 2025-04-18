"use client";
import React from 'react'
{/*An animation library*/}
import {motion} from "framer-motion";

const Landing = () => {
  return (
  <motion.div
  initial={{opacity: 0}}
  animate={{opacity:1}}
  transition ={{duration: 0.5}}
  className="landing"
  >
    <motion.div
     initial={{y:20, opacity: 0}}
     animate={{y:0 , opacity:1}}
     transition ={{duration: 0.5}}
     className="landing__hero">

    </motion.div>
    Landing
    </motion.div>
  
);
};

export default Landing;
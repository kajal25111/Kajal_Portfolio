import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      //Opacity initialy 1 in above bcoz it will keep one after sliding....th following is ero while sliding...means will be blur on SLIDING due to opacity 0 .
      opacity: 0,
      //-100 will slide component from left to right in animation
      x: "-100%",
    },

    twoandthree: {
      opacity: 0,
      //-100 will slide component from up to down in animation
      y: "-100%",
    },
    four: {
      opacity: 0,
      //100 will slide component from right to left in animation
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          id="serviceBox1"
          className='"serviceBox1'
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>0.5+</h3>
          <p>Years Experience</p>
        </motion.div>

        <motion.div
          className='"serviceBox2'
          whileInView={animations.whileInView}
          initial={animations.twoandthree}
        >
          <AiFillIeCircle />
          <p>Java, Spring Boot, Sql </p>
        </motion.div>

        <motion.div
          className='"serviceBox3'
          whileInView={animations.whileInView}
          initial={animations.twoandthree}
          transition={{
            delay: 0.2,
          }}
        >
          <AiFillAndroid />
          <p>React,Web Development </p>
        </motion.div>

        <motion.div
          id="serviceBox4"
          className='"serviceBox1'
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillWindows />
          <p>Javascript</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

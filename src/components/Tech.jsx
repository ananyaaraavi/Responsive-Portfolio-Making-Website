import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const techstack = ["Javascript", "C++", "DSA", "Hello"];
  return (
    // <div className="py-5">
    //   <h1 className="text-secondary text-xl variants={textVariant()}">
    //     Here are a few technologies I have been working on

    //   </h1>
    // </div>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Here are a few technologies I have been working on
        </p>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={textVariant()}
          className="flex flex-wrap gap-10 mt-5 variants={textVariant()}"
        >
          {techstack.map((tech, index) => (
            <div className="border border-[#915eff] py-3 px-10 rounded variants={textVariant()}">
              <h1 className="text-secondary">{tech}</h1>
            </div>
          ))}
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

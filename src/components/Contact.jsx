import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const user = {
    name: "name",
    age: null,
    gender: "female",
    email: "dfjasld@gmail.com",
    mobile: "8888888888",
    country: "India",
  }; //[#915eff]
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>
      <div className="flex variants={textVariant()}">
        <motion.p variants={textVariant()}>
          <div className="flex flex-col gap-1">
            <p className="text-secondary ">{"{"}</p>
            {Object.keys(user).map((key) => (
              <p className="ml-5 ">
                <span className="text-secondary ">{key}:</span>

                <span className="text-secondary  ">{user[key]}</span>
              </p>
            ))}
            <p className="text-secondary">{"}"}</p>
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

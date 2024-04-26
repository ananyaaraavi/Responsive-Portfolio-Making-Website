import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { edu } from "../constants/index.js";

const Education = () => {
  const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Learning journey</p>
        <h2 className={`${styles.sectionHeadText}`}>My Education</h2>
      </motion.div>
      <div className="flex py-10 gap-20">
        <div className="flex flex-col gap-10 border-l-2 border-[#915eff] w-1/3">
          {edu.map((education, index) => (
            <div
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer "
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#00000056] py-3"
                    : "text-white"
                }`}
              >
                {education.date}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[#915eff] text-xl">
            {edu[selectedItemIndex].name}
          </h1>
          <h1 className="text-secondary text-xl">
            {edu[selectedItemIndex].des}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");

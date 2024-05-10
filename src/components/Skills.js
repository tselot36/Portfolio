import React, { useState } from "react";
import { motion } from "framer-motion";
import SvgBrain from "./SvgBrain.js";
import SkillCard from "./SkillCard.js";
import SkillsData from "../data/SkillsData.js";
import "../styles/skills-card.css";
import "../styles/component.css";

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.2 },
    },
    exit: {
        x: "-100vh",
        transition: { ease: "easeInOut" },
    },
};

const Skills = () => {
    const [listAllSkills] = useState(SkillsData);

    return (
        <div className="component-container" id="skills">
            <h1>Exploring My Skills</h1>

            <p>Discover some of the skills and tools I have knowledge of.</p>

            <div>
                <SvgBrain />

                <motion.div
                    className="box-skills"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    {listAllSkills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
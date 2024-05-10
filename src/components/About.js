import React, { useState } from 'react';
import Faq from "./Faq";
import Profile from "./Profile";
import { motion } from 'framer-motion';
import "../styles/component.css"
import DataAboutMe from "../data/DataAboutMe";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.5, ease: 'easeInOut' },
    },
    exit: {
        x: '100vw',
        opacity: 0,
        transition: { ease: 'easeInOut' },
    },
};


const profileVariants = {
    initial: {
        x: '50vw'
    },
    visible: {
        x: 0
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' },
        duration: 1
    },
}

const About = () => {

    const [allDatas] = useState(DataAboutMe);

    return (
        <div>
            <div
                className="component-container"
                id="about" >

                <h1>About Me!</h1>

                <motion.div
                    className="split-component-container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit">

                    <motion.div
                        variants={profileVariants}
                        initial="initial"
                        whileInView="visible"
                        exit="exit"
                        transition={{ ease: 'easeInOut', duration: 1 }}
                    >
                        <Profile />
                    </motion.div>

                    <div>
                        <Faq
                            allDatas={allDatas}
                        />
                    </div>

                </motion.div >

            </div>

        </div>
    );

};

export default About;
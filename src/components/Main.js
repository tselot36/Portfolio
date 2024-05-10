
import { motion } from 'framer-motion';
import Pdf from '../assets/pdf/DevOps.pdf';
import SvgDev from './SvgDev';
import Button from './Button';
import '../styles/main.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Main = () => {

    function openResume() {
        window.open(Pdf);
    }

    return (
        <div className="main-container">
            <motion.div className="bio-info-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible" >
                <motion.span variants={childVariants} className="tagline">
                    🌟Welcome to my Portfolio
                </motion.span>

                <motion.h1 variants={childVariants}>
                    Hi! I'm <span className="name-title">Tselot</span> 👋🏼
                </motion.h1>

                <motion.h2 variants={childVariants}>
                    Developer |
                    React |
                    SpringBoot
                </motion.h2>

                <motion.p variants={childVariants}>
                    I'm a dedicated developer passionate about crafting
                    exceptional software solutions. With a focus on React and
                    Spring Boot, I thrive on turning ideas into functional
                    and user-friendly applications.
                </motion.p>


                <motion.div
                    variants={childVariants}
                >
                    <Button
                        buttonName={"Resume"}
                        onClickFunction={openResume} />
                </motion.div>
            </motion.div>

            <div className="bio-svg-container">
                <SvgDev />
            </div>
        </div>
    );

};

export default Main;

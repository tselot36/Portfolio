
import { motion } from 'framer-motion';
import "../styles/button.css"

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px var(--primary-color)",
        boxShadow: "0px 0px 8px var(--primary-color)",
        transition: {
            duration: 0.3,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
};

const Button = ({ buttonName, onClickFunction }) => {
    return (
        <>
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="button"
                onClick={onClickFunction} >
                {buttonName}
            </motion.button>
        </>
    );
};

export default Button;

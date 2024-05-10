
import { motion } from "framer-motion";
import SvgError404 from "../components/SvgError404";
import "../styles/not-found-page.css";

const NotFoundPage = ({ message }) => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const elementVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            className="container-not-found-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div variants={elementVariants}>
                <motion.h1>Error</motion.h1>
                <motion.p>Oops! Something went wrong.</motion.p>
            </motion.div>

            <motion.div variants={elementVariants}>
                <SvgError404 />
            </motion.div>

            {message && (
                <motion.div variants={elementVariants}>
                    <motion.p>{message}</motion.p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default NotFoundPage;

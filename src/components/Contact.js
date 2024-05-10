
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import ContactForm from "./ContactForm";
import LazyLoad from "react-lazy-load";
import "../styles/component.css";
import "../styles/contact.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
    exit: { x: "-100vh", transition: { ease: "easeInOut" } },
};

const Contact = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div id="contact">
            <LazyLoad height={"auto"} offset={100} debounce={false} once>
                {hasMounted && (
                    <motion.div
                        className="split-component-container"
                        initial={hasMounted ? "hidden" : "visible"}
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                    >
                        <div className="component-container">
                            <h1>Contact</h1>

                            <p>Get in contact with me by completing this form.</p>

                            <div className="contact-links">
                                <div className="contact-item">
                                    <FaPhoneSquareAlt className="contact-icon" />
                                    <p> +251936679199 </p>
                                </div>

                                <div className="contact-item">
                                    <MdEmail className="contact-icon" />
                                    <p>tselotbeyene70@gmail.com</p>
                                </div>

                                <div className="contact-item">
                                    <SiGooglemaps className="contact-icon" />
                                    <p>MG- Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </motion.div>
                )}
            </LazyLoad>
        </div>
    );

};

export default Contact;

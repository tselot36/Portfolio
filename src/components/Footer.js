
import logo from "../assets/img/logo.svg";
import "../styles/footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h2>EXPLORE</h2>

                <a href="/#">Homepage</a>

                <a href="/#about">About</a>

                <a href="/#skills">Skills</a>

                <a href="/#project">Projects</a>

                <a href="/contact">Contact</a>
            </div>

            <div className="footer-content">
                <h2>INFORMATION TECHNOLOGY</h2>

                <p>
                    {" "}
                    <b> Whatsapp:</b> (251) 936679199
                </p>

                <p>
                    {" "}
                    <b>Email: </b>tselotbeyene70@gmail.com
                </p>

                <div className="footer-social-icon">
                    <a href="https://github.com/tselot36">
                        <i>
                            <AiFillGithub />
                        </i>
                    </a>

                    <a href="https://www.instagram.com/Tselot_b/">
                        <i>
                            {" "}
                            <AiFillInstagram />
                        </i>
                    </a>

                    <a href="https://www.linkedin.com/in/Tselot-Beyene/">
                        <i>
                            <FaLinkedinIn />
                        </i>
                    </a>
                </div>
            </div>

            <div className="footer-content">
                <img src={logo} alt="Logo" className="footer-logo" />

                <h2>&copy; 2023 Tselot Beyene. All rights reserved.</h2>
            </div>
        </div>
    );
};

export default Footer;

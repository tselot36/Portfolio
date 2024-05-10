
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/svg.css';

const svgVariants = {
    hidden: { rotate: 0, opacity: 0},
    visible: {
        rotate: 360,
        opacity: 1,
        transition: {
            delay: 2,
            staggerChildren: 0.1,
        },
    },
};

const lineCodeVariant = {
    hidden: { opacity: 0, y: 5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "linear",
        },
    },
};

const SvgDev = () => {
    return (
        <div className="container-svg">
            <motion.div
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.7}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="dev-svg "
                    viewBox="0 0 400 300"
                    variants={svgVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <path
                        fill="none"
                        stroke="#e6e6e6"
                        strokeDasharray="3 10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M118.26 98.45V62.51a10 10 0 0110-9.95H284a10 10 0 0110 9.95v55.62"
                    ></path>
                    <path
                        fill="#e6e6e6"
                        d="M194.85 35.72H243.32999999999998V69.4H194.85z"
                    ></path>
                    <path
                        fill="#9e9e9e"
                        d="M207.35 52.24c1.46 0 1.66-.8 1.66-1.52a12.5 12.5 0 00-.16-1.72 10.88 10.88 0 01-.17-1.7c0-1.89 1.23-2.69 3-2.69h.44v1.13h-.37c-1.21 0-1.62.66-1.62 1.76a9.24 9.24 0 00.14 1.46 9.73 9.73 0 01.14 1.56 2 2 0 01-1.47 2.21 2 2 0 011.44 2.27 9.5 9.5 0 01-.14 1.55 9.6 9.6 0 00-.14 1.45c0 1.15.47 1.78 1.62 1.78h.37V61h-.44c-1.7 0-3-.74-3-2.81a10.75 10.75 0 01.17-1.68 11.52 11.52 0 00.18-1.71c0-.63-.2-1.52-1.66-1.52zM231.38 53.33c-1.46 0-1.66.8-1.66 1.51a12.36 12.36 0 00.16 1.72 12.38 12.38 0 01.17 1.71c0 1.88-1.23 2.68-3 2.68h-.43v-1.13h.38c1.21 0 1.62-.65 1.62-1.76a9.12 9.12 0 00-.14-1.45 9.94 9.94 0 01-.15-1.56 2 2 0 011.48-2.22 2 2 0 01-1.48-2.23 9.49 9.49 0 01.15-1.56 9.37 9.37 0 00.14-1.48c0-1.14-.47-1.78-1.62-1.78h-.37v-1.17h.43c1.7 0 3 .74 3 2.81a11.81 11.81 0 01-.17 1.68 11.8 11.8 0 00-.16 1.66c0 .64.2 1.52 1.66 1.52z"
                    ></path>
                    <path
                        fill="var(--text-color);"
                        d="M68.95 81.78H169.74V182.57H68.95z"
                    ></path>
                    <motion.path
                        fill="#c2def5"
                        d="M98.4 126H130.78V129.62H98.4z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="var(--secondary-color)"
                        d="M107.69 115.91H136.63V119.53H107.69z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="var(--secondary-color)"
                        d="M135.28 154.16H150.38V157.78H135.28z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="var(--secondary-color)"
                        d="M120.02 143.97H135.12V147.59H120.02z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#c2def5"
                        d="M107.69 134.76H146.26999999999998V138.38H107.69z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M86.39 134.76H100.9V138.38H86.39z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M100.84 144.28H115.35000000000001V147.9H100.84z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M87.1 163.7H101.61V167.32H87.1z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M77.11 126H91.62V129.62H77.11z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <circle cx="75.55" cy="87.89" r="1.71" fill="#fff"></circle>
                    <circle
                        cx="80.63"
                        cy="87.89"
                        r="1.71"
                        fill="#c2def5"
                        className="target-color"
                    ></circle>
                    <circle
                        cx="85.41"
                        cy="87.89"
                        r="1.71"
                        fill="var(--secondary-color)"
                    ></circle>
                    <motion.path
                        fill="#fff"
                        d="M77.11 98.45H91.62V102.07000000000001H77.11z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M86.39 107.51H100.9V111.13000000000001H86.39z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="var(--secondary-color)"
                        d="M107.69 107.51H136.63V111.13000000000001H107.69z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M86.39 115.91H100.9V119.53H86.39z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#c2def5"
                        d="M97.42 98.45H127.31V102.07000000000001H97.42z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#fff"
                        d="M77.52 154.16H92.03V157.78H77.52z"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#c2def5"
                        d="M97.82 154.16H127.71V157.78H97.82z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#c2def5"
                        d="M107.35 163.68H137.24V167.3H107.35z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <motion.path
                        fill="#c2def5"
                        d="M133.56 98.45H154.78V102.07000000000001H133.56z"
                        className="target-color"
                        variants={lineCodeVariant}
                    ></motion.path>
                    <path
                        fill="#f4a28c"
                        d="M196.85 118.13L202.1 147.32 187.6 148.4 190.5 124.99 196.85 118.13z"
                    ></path>
                    <path
                        fill="#ce8172"
                        d="M189.89 128.63a8.12 8.12 0 004-2.49s-.09 4.14-4.55 8.32z"
                        opacity="0.31"
                    ></path>
                    <path
                        fill="#f4a28c"
                        d="M186.76 116.5s-1.4 6.76-.78 11.44a3.46 3.46 0 003.91 3c2.35-.34 5.43-1.49 6.62-5l2.75-5.75a6.2 6.2 0 00-1.94-6.9c-3.54-3.29-9.92-.95-10.56 3.21z"
                    ></path>
                    <path
                        fill="#f4a28c"
                        d="M186.1 120.8l-2.22 2.42a1.1 1.1 0 00.48 1.8l2.57.81z"
                    ></path>
                    <path
                        fill="var(--text-color);"
                        d="M199 127.28l2.39-9.08s5.24-.89 3.67-4.31-3.67-1.15-3.74-5.08-3.26-4.72-5.53-2.52-1.21-.88-4-1.3-3.57.83-3.64 3-4.13-.15-5.19 2.56-1.2 5.34 5.82 5.79 1.98 6.2 10.22 10.94z"
                    ></path>
                    <path
                        fill="#f4a28c"
                        d="M193.36 123.22s.36-2.63 2.32-2.2 1.46 4.25-1.28 4.29z"
                    ></path>
                    <ellipse
                        cx="198.56"
                        cy="241.9"
                        fill="#e6e6e6"
                        opacity="0.45"
                        rx="96.76"
                        ry="21.78"
                    ></ellipse>
                    <path
                        fill="#c2def5"
                        d="M183.78 144.14s-40.92-11.82-40.73 17.9c.15 22.45 25.33 70.11 25.33 70.11h52s39.45-60.51 20.26-80-23.59-2.73-56.86-8.01z"
                        className="target-color"
                    ></path>
                    <path
                        fill="var(--text-color);"
                        d="M168.3 239.43L199.94 247.96 228.01 233.72 232.27 226.12 203.98 226.12 158.97 226.12 168.3 239.43z"
                    ></path>
                    <path
                        d="M217.44 148.4s-15.34 7.7-10.94 47.6c1.24 11.23-2.52 14-2.52 14l-43.85 4.39 8.25 17.75h52S243.2 195 245 175.87s-27.56-27.47-27.56-27.47z"
                        opacity="0.08"
                    ></path>
                    <path
                        fill="#c2def5"
                        d="M193 239.42s10.65 3.73 7 8.54-9.44-3.18-9.44-3.18z"
                        className="target-color"
                    ></path>
                    <path
                        fill="var(--text-color);"
                        d="M193.28 237.56s-43-22-46.71-10.28 26 18.49 45.14 19.19zM203.73 239.29s34.33-34 41.37-24-19.14 25.51-37.17 32z"
                    ></path>
                    <path
                        fill="#c2def5"
                        d="M205.08 241.85s-10.17 9.06-4.28 11.73 7.13-6.29 7.13-6.29zM214.63 156.68c-.16-11.45 13.65-17.54 21.9-9.61 6.05 5.82 11.95 14.55 14.86 27.49 7.35 32.59 20.56 27.6 27 17.32s5.2-32.88 5.2-32.88l11.73.22s10.07 58.68-33.06 60.86c-33.2 1.67-47.26-35.95-47.63-63.4z"
                        className="target-color"
                    ></path>
                    <path
                        fill="#fff"
                        d="M214.63 156.68c-.16-11.45 13.65-17.54 21.9-9.61 6.05 5.82 11.95 14.55 14.86 27.49 7.35 32.59 20.56 27.6 27 17.32s5.2-32.88 5.2-32.88l11.73.22s10.07 58.68-33.06 60.86c-33.2 1.67-47.26-35.95-47.63-63.4z"
                        opacity="0.54"
                    ></path>
                    <path
                        fill="var(--text-color);"
                        d="M291.61 135.32H296.34000000000003V176.87H291.61z"
                    ></path>
                    <path
                        fill="var(--secondary-color)"
                        d="M172.73 220.85L169.06 187.43 225.18 187.43 219.58 222.56 220.38 227.06 172.14 227.44 172.73 220.85z"
                    ></path>
                    <path
                        d="M111.14 182.56s6.74-40.93 50.17-40.41l-34.83 40.41z"
                        opacity="0.28"
                    ></path>
                    <circle cx="197.67" cy="205.43" r="4.81" fill="#fff"></circle>
                    <path
                        fill="#c2def5"
                        d="M162.36 144.33a11.89 11.89 0 00-15.12 3.54c-8.54 11.41-27 38.54-26.19 58.22 1.1 25.55 56.82 22 56.82 22l-1.1-9.66S143 216 152.32 199.05c6.33-11.53 26.44-45.73 10.04-54.72z"
                        className="target-color"
                    ></path>
                    <path
                        fill="#fff"
                        d="M162.36 144.33a11.89 11.89 0 00-15.12 3.54c-8.54 11.41-27 38.54-26.19 58.22 1.1 25.55 56.82 22 56.82 22l-1.1-9.66S143 216 152.32 199.05c6.33-11.53 26.44-45.73 10.04-54.72z"
                        opacity="0.54"
                    ></path>
                    <path
                        fill="#f4a28c"
                        d="M286.54 159.05s-1.32-10.12 7.64-8.94 8.88 8.37 1.14 9.1z"
                    ></path>
                    <path
                        fill="var(--secondary-color)"
                        d="M268.04 106.65H319.25V139.39000000000001H268.04z"
                    ></path>
                    <path
                        fill="#fff"
                        d="M287 130.54a1.2 1.2 0 01-.74-.25l-7.77-6.14a1.24 1.24 0 01-.46-.94 1.22 1.22 0 01.45-.94l7.77-6.25a1.2 1.2 0 111.5 1.87l-6.59 5.31 6.59 5.2a1.21 1.21 0 01.19 1.69 1.17 1.17 0 01-.94.45zM301 130.54a1.2 1.2 0 01-.75-2.14l6.59-5.2-6.6-5.31a1.21 1.21 0 01-.18-1.69 1.2 1.2 0 011.69-.18l7.77 6.25a1.18 1.18 0 01.44.94 1.23 1.23 0 01-.45.94l-7.77 6.14a1.2 1.2 0 01-.74.25zM290.73 130.54a1.23 1.23 0 01-.49-.1 1.2 1.2 0 01-.6-1.59l5.66-12.4a1.2 1.2 0 012.19 1l-5.66 12.39a1.22 1.22 0 01-1.1.7z"
                    ></path>
                    <path
                        fill="#f4a28c"
                        d="M177 220.67s8.56-3 10.61.55-1 8.38-9.76 6.87z"
                    ></path>
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default SvgDev;

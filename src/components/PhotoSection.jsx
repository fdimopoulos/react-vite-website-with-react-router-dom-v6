import "./PhotoSection.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PhotoSection = () => {
    const navigate = useNavigate();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: {
            transform: "translateX(400px)",
            opacity: 0,
        },
        visible: {
            transform: isInView ? "none" : "translateX(300px)",
            opacity: isInView ? 1 : 0,
            transition: {
                duration: 1,
                staggerChildren: 0.5,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: 400 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="container">
            <div className="photo-section" id="photo-section">
                <div className="photo__container">
                    <img className="img-1" src="./image_1.webp" alt="" />
                    <img className="img-2" src="./image_2.webp" alt="" />
                    <img className="img-3" src="./image_11.webp" alt="" />
                    <img className="img-4" src="./image_9.webp" alt="" />
                    <img className="img-5" src="./image_5.webp" alt="" />
                </div>
                <motion.div
                    className="photo-section__text"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        className="photo-section__title"
                        variants={childVariants}
                    >
                        The best places to visit in Iceland
                    </motion.h2>
                    <motion.p
                        className="photo-section__subtitle"
                        variants={childVariants}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil, ipsum.
                    </motion.p>
                    <motion.p
                        className="photo-section__details"
                        variants={childVariants}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos rem, iusto nulla minus in necessitatibus
                        voluptatum laudantium vel accusamus atque mollitia illum
                        sit alias consectetur, temporibus, ullam odit eaque
                        officiis!
                    </motion.p>
                    <motion.button
                        className="photo-section__btn"
                        onClick={() => navigate("/aboutUs")}
                        variants={childVariants}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default PhotoSection;

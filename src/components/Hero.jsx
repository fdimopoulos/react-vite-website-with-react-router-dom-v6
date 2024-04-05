import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className="hero__container">
                <motion.div
                    className="hero__container-text"
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-300px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 1.5s",
                    }}
                >
                    <h1 className="hero__container-text__title">
                        Welcome to Iceland
                    </h1>
                    <p className="hero__container-text__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis dolorum iusto, eveniet nostrum eligendi modi
                        nulla porro! Laboriosam, sint? Libero animi eaque
                        delectus dolores autem quaerat facere minus quibusdam
                        itaque!
                    </p>
                    <button
                        className="hero__button"
                        onClick={() => navigate("/aboutUs")}
                    >
                        Learn More
                    </button>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;

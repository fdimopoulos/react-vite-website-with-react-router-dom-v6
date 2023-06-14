import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hero__container">
                <div className="hero__container-text">
                    <h1>Welcome to Iceland</h1>
                    <p>
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
                </div>
            </section>
        </>
    );
};

export default Hero;

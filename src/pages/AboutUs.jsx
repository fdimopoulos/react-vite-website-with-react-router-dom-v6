import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="about-us__wrapper">
                <section className="about-us__container">
                    <div className="about-us__section">
                        <div className="about-us__photo-section">
                            <img
                                className="about-us-image"
                                src="./about_us.webp"
                                alt="/"
                            />
                        </div>
                        <div className="about-us__text">
                            <h2 className="about-us__title">
                                You should remember your trip to Iceland as the
                                most epic trip of your life.
                            </h2>
                            <p className="about-us__subtitle">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nihil, ipsum.
                            </p>
                            <p className="about-us__details">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Quos rem, iusto nulla minus in
                                necessitatibus voluptatum laudantium vel
                                accusamus atque mollitia illum sit alias
                                consectetur, temporibus, ullam odit eaque
                                officiis!
                            </p>
                            <button
                                className="about-us__btn"
                                onClick={() => navigate("/services")}
                            >
                                Plan Your Trip
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default AboutUs;

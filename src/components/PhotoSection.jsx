import "./PhotoSection.css";
import { useNavigate } from "react-router-dom";

const PhotoSection = () => {
    const navigate = useNavigate();

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
                <div className="photo-section__text">
                    <h2 className="photo-section__title">
                        The best places to visit in Iceland
                    </h2>
                    <p className="photo-section__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil, ipsum.
                    </p>
                    <p className="photo-section__details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quos rem, iusto nulla minus in necessitatibus
                        voluptatum laudantium vel accusamus atque mollitia illum
                        sit alias consectetur, temporibus, ullam odit eaque
                        officiis!
                    </p>
                    <button
                        className="photo-section__btn"
                        onClick={() => navigate("/aboutUs")}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;

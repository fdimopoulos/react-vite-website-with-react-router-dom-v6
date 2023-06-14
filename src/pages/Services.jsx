import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaCheck, FaTimes } from "react-icons/fa";
import "../App.css";

const Services = () => {
    return (
        <>
            <Navbar />
            <section>
                <div class="card__container">
                    <div class="card">
                        <h3 class="card__title">Basic</h3>
                        <p class="card__price">1.499€</p>
                        <div class="card__separator"></div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <button class="card__button">Buy Now</button>
                    </div>
                    <div class="card">
                        <h3 class="card__title">Advanced</h3>
                        <p class="card__price">1.999€</p>
                        <div class="card__separator"></div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaTimes className="times" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <button class="card__button">Buy Now</button>
                    </div>
                    <div class="card">
                        <h3 class="card__title">Premium</h3>
                        <p class="card__price">2.999€</p>
                        <div class="card__separator"></div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="card__details">
                            <FaCheck className="check" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <button class="card__button">Buy Now</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;

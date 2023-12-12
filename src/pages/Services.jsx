import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaCheck, FaTimes } from "react-icons/fa";
import "../App.css";
import plans_data from "../db.json";

const Services = () => {
    const plans = plans_data.plans;

    return (
        <>
            <Navbar />
            <section>
                <h2 className="services__title">
                    Pick the plan that's right for you
                </h2>
                <div class="card__container">
                    {plans.map((plan) => (
                        <div class="card" key={plan.id}>
                            <h3 class="card__title">{plan.title}</h3>
                            <p class="card__price">{plan.price}€</p>
                            <div class="card__separator"></div>
                            <div class="card__details">
                                {plan.description_1.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_1.description_title}</p>
                            </div>
                            <div class="card__details">
                                {plan.description_2.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_2.description_title}</p>
                            </div>
                            <div class="card__details">
                                {plan.description_3.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_3.description_title}</p>
                            </div>
                            <div class="card__details">
                                {plan.description_4.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_4.description_title}</p>
                            </div>
                            <div class="card__details">
                                {plan.description_5.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_5.description_title}</p>
                            </div>
                            <div class="card__details">
                                {plan.description_6.checked ? (
                                    <FaCheck className="check" />
                                ) : (
                                    <FaTimes className="times" />
                                )}
                                <p>{plan.description_6.description_title}</p>
                            </div>
                            <button class="card__button">Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;

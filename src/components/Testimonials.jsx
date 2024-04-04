import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import data from "../data.json";

const Testimonials = () => {
    const reviewers = data.reviewers;

    return (
        <div className="testimonials">
            <div className="testimonials-container" id="review">
                <h2 className="testimonials__title">Reviews</h2>
                <div className="swiper-button image-swiper-button-next">
                    <IoIosArrowForward />
                </div>
                <div className="swiper-button image-swiper-button-prev">
                    <IoIosArrowBack />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    speed={500}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled",
                    }}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <div className="testimonials__card">
                        {reviewers.map((reviewer) => (
                            <SwiperSlide>
                                <div
                                    className="testimonials__content"
                                    key={reviewer.id}
                                >
                                    <img
                                        className="testimonials__image"
                                        src={reviewer.image}
                                        alt=""
                                    />
                                    <p className="testimonials__content--description">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Repellat dicta
                                        delectus praesentium, harum quod
                                        expedita debitis in minima excepturi vel
                                        placeat ad! Nihil quisquam provident
                                        perferendis ratione aspernatur illum
                                        recusandae?
                                    </p>
                                    <ImQuotesLeft className="testimonials__quote" />
                                    <h4 className="testimonials__content--name">
                                        {reviewer.name}
                                    </h4>
                                    <p className="testimonials__content--job">
                                        <em>{reviewer.position}</em>
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;

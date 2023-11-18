import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [scrollToTopButton, setScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 250
                ? setScrollToTopButton(true)
                : setScrollToTopButton(false);
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {scrollToTopButton && (
                <button className="scroll-to-top" onClick={scrollUp}>
                    ^
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;

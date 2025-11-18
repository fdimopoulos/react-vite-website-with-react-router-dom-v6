import "./Footer.css";
import {
    FaFacebook,
    FaInstagramSquare,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h3 className="footer__title">Iceland</h3>
                <p className="footer__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur, fuga.
                </p>
                <ul className="footer__socials">
                    <li className="footer__socials--item item-1">
                        <a href="https://www.facebook.com/" target="_blank" aria-label="Link to Facebook page">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className="footer__socials--item item-2">
                        <a href="https://www.instagram.com/" target="_blank" aria-label="Link to Instagram page">
                            <FaInstagramSquare />
                        </a>
                    </li>
                    <li className="footer__socials--item item-3">
                        <a href="https://twitter.com/" target="_blank" aria-label="Link to Twitter page">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="footer__socials--item item-4">
                        <a href="https://www.youtube.com/" target="_blank" aria-label="Link to YouTube page">
                            <FaYoutube />
                        </a>
                    </li>
                    <li className="footer__socials--item item-5">
                        <a href="https://www.linkedin.com/" target="_blank" aria-label="Link to LinkedIn page">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                <div className="footer__copyright">
                    <p>&copy; {new Date().getFullYear()} by Fotis</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

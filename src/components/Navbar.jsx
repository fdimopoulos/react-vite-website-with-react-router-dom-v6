import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header className="header">
            <div className={click ? "header__logo active" : "header__logo"}>
                <Link to="/">Iceland</Link>
            </div>
            <nav>
                <ul
                    onClick={handleClick}
                    className={click ? "nav__menu active" : "nav__menu"}
                >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={30} style={{ color: "#f5f5f5" }} />
                ) : (
                    <FaBars size={30} style={{ color: "#121212" }} />
                )}
            </div>
        </header>
    );
};

export default Navbar;

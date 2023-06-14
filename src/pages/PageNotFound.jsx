import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";

const PageNotFound = () => {
    return (
        <>
            <Navbar />
            <div className="error__container">
                <h1 className="error__container--title">
                    404 Error - Page Not Found
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default PageNotFound;

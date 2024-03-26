import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact__wrapper">
                <ContactForm />
                <Footer />
            </div>
        </>
    );
};

export default Contact;

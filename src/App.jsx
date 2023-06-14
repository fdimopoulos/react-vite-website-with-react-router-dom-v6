import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PhotoSection from "./components/PhotoSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <PhotoSection />
            <Testimonials />
            <Footer />;
            <ScrollToTopButton />
        </>
    );
}

export default App;

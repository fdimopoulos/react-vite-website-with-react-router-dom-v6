import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PhotoSection from "./components/PhotoSection";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <PhotoSection />
            <Testimonials />
            <Footer />;
        </>
    );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Carousel from "./components/Carousel";
import { slides } from "./components/images.json";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="container mt-[10rem]">
        <h2 className="text-primary font-bold text-3xl lg:text-4xl py-5">
          Examples:
        </h2>
      </div>

      <Carousel data={slides} />
      <Footer />
    </>
  );
}

export default App;

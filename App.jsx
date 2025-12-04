import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CodingProfile from "./components/CodingProfile";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <CodingProfile /> */}
      <Experience />
      <Certifications />
      <CodingProfile />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

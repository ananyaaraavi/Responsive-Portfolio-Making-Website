import { BrowserRouter } from "react-router-dom";
import {
  About,
  Education,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  // StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

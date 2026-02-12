import About from "./Components/About.jsx";
import Contactme from "./Components/Contactme.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import Skills from "./Components/Skills.jsx";
import "./App.css";
import Education from "./Components/Education.jsx";
import Projects from "./Components/Projects.jsx";
import Handles from "./Components/Handles.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Handles />
      <Contactme />

      <Footer />
    </div>
  );
};

export default App;

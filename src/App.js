import Home from "../src/pages/components/Home.tsx";
import About from "../src/pages/components/About.tsx";
import Projects from "../src/pages/components/Projects.tsx";
import Work from "../src/pages/components/Work.tsx";
import Education from "../src/pages/components/Education.jsx";
import Contact from "../src/pages/components/Contact.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Home />
        <About />
        <Projects />
        <Work />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;

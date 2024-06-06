import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

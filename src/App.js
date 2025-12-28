import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

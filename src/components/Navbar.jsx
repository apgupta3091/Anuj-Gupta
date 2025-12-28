import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const navItems = [
    { name: "About", to: "about" },
    { name: "Projects", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer"
        >
          <span className="font-mono text-xl font-bold tracking-tight text-foreground">
            anuj<span className="text-primary">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2 h-6 w-px bg-border" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNav}>
            {nav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={closeNav}
                  className="cursor-pointer rounded-md px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

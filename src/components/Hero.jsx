import React from "react";
import profilePic from "../assets/portfolio-pic.jpeg";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "./ui/Button";
import resume from "../docs/Anuj_Gupta_Resume.pdf";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const techStack = [
    { name: "Golang", color: "text-cyan-500" },
    { name: "Node.js", color: "text-emerald-500" },
    { name: "Postgres", color: "text-blue-500" },
    { name: "AWS", color: "text-orange-500" },
    { name: "Docker", color: "text-sky-500" },
    { name: "Redis", color: "text-red-500" },
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Anuj Gupta
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-2 text-xl font-medium text-foreground md:text-2xl"
            >
              Backend Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-6 max-w-lg text-muted-foreground"
            >
              Crafting scalable APIs, robust microservices, and efficient
              database architectures. 4+ years of building the invisible
              infrastructure that powers great products.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <Link to="contact" smooth offset={-80} duration={500}>
                <Button className="group">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={resume} download>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/apgupta3091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anujgupta19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <Link
                  to="contact"
                  smooth
                  offset={-80}
                  duration={500}
                  className="cursor-pointer rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 flex justify-center md:order-2 md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1">
                <img
                  className="h-64 w-64 rounded-xl object-cover md:h-80 md:w-80"
                  src={profilePic}
                  alt="Anuj Gupta"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-emerald-500">●</span> Building things
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

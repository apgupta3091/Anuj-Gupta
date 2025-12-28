import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Database, Music } from "lucide-react";
import us from "../assets/U.S.png";
import social from "../assets/social.png";
import soundwave from "../assets/soundwave.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/Card";
import { Button } from "./ui/Button";

const Portfolio = () => {
  const projects = [
    {
      img: social,
      title: "Social",
      description:
        "Production-ready social media API with real-time feed generation, JWT authentication, Redis caching, and rate limiting. Features role-based access control, PostgreSQL with full-text search, and graceful shutdown handling.",
      tech: ["Golang", "Chi", "PostgreSQL", "Redis", "JWT", "Docker", "GCP"],
      icon: Server,
      imgPosition: "[object-position:50%_25%]",
      links: {
        site: "https://social-one-liart.vercel.app/",
        github: "https://github.com/apgupta3091/Social",
      },
    },
    {
      img: soundwave,
      title: "SoundWave",
      description:
        "SoundCloud clone with Rails API backend featuring full CRUD for songs, user authentication, and AWS S3 integration for audio file storage and streaming.",
      tech: ["Ruby", "Rails", "PostgreSQL", "AWS S3", "React", "Redux"],
      icon: Music,
      imgPosition: "object-top",
      links: {
        site: "",
        github: "https://github.com/apgupta3091/SoundWave",
      },
    },
    {
      img: us,
      title: "U.S. Software Jobs",
      description:
        "Interactive data visualization showcasing software engineering job distribution across US states. Built with D3.js for dynamic, responsive charts.",
      tech: ["D3.js", "JavaScript", "GeoJSON", "SVG"],
      icon: Database,
      links: {
        site: "https://apgupta3091.github.io/U.S.-Software-Jobs/",
        github: "https://github.com/apgupta3091/U.S.-Software-Jobs",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of projects showcasing my backend development skills and
            problem-solving approach.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        project.imgPosition || ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/80 backdrop-blur-sm">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.links.site && (
                        <a
                          href={project.links.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm">
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Live
                          </Button>
                        </a>
                      )}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="sm">
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

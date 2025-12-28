import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cloud,
  Terminal,
  Cpu,
  GitBranch,
} from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Golang", "Node.js", "TypeScript", "Python"],
      icon: Terminal,
    },
    {
      category: "Backend",
      items: ["Chi", "Node.js", "Express", "REST APIs"],
      icon: Server,
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "DynamoDB", "Redis"],
      icon: Database,
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "AWS", "CI/CD", "Linux"],
      icon: Cloud,
    },
  ];

  const experiences = [
    {
      metric: "4+",
      label: "Years Experience",
      description: "Building production systems",
    },
    {
      metric: "∞",
      label: "Cups of Coffee",
      description: "Fueling late-night deploys",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            I specialize in building the backbone of web applications — scalable
            APIs, efficient databases, and reliable server infrastructure that
            keeps everything running smoothly.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card className="h-full transition-colors hover:border-primary/50">
                  <CardContent className="p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-3 font-semibold text-foreground">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {experiences.map((exp, i) => (
            <Card
              key={i}
              className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
            >
              <CardContent className="flex items-center gap-6 p-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-2xl font-bold text-primary">
                    {exp.metric}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{exp.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="border-b border-border p-6 md:border-b-0 md:border-r">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Cpu className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Performance First
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I write code that scales. Every query is optimized, every
                    endpoint is efficient, and every system is built to handle
                    growth.
                  </p>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <GitBranch className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    Clean Architecture
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Maintainable, testable, and well-documented code. I believe
                    in building systems that other developers can understand and
                    extend.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

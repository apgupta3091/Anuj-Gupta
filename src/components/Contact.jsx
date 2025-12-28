import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or want to discuss backend architecture? I'm
            always open to interesting conversations and new opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">
                  Drop me a line anytime
                </p>
                <a
                  href="mailto:anujpgupta19@gmail.com"
                  className="mt-2 inline-block text-sm text-primary hover:underline"
                >
                  anujpgupta19@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">
                  NYC · Open to remote/hybrid
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <a
                href="https://github.com/apgupta3091"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/anujgupta19/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <Card>
              <CardContent className="p-6">
                <form
                  action="https://getform.io/f/pbnvdjwb"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project or idea..."
                      required
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    { name: "C", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    { name: "C++", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
    { name: "Java", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
    { name: "Python", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
    { name: "JavaScript", color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" },
    { name: "TypeScript", color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
    { name: "Node.js", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200" },
    { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
    { name: "MongoDB", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
    { name: "Git", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
    { name: "SQL", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
    { name: "Figma", color: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                I'm a <strong className="text-foreground font-semibold">Full Stack Developer</strong> passionate about building 
                web applications that provide exceptional user experiences.
              </p>
              <p className="leading-relaxed">
                I have 4 months of internship experience, where I gained hands-on exposure to developing and deploying full-stack projects using technologies like React, Next.js, Node.js, and MongoDB.
              </p>
              <p className="leading-relaxed">
                I'm always open to new opportunities where I can contribute, learn, and grow.
                If you have a good opportunity that matches my skills and experience, 
                don't hesitate to contact me.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">My Skills</h3>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 0, 2, 0],
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className={`text-sm py-1.5 px-3 font-medium ${skill.color} transition-colors duration-200 hover:shadow-md`}>
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
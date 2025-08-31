"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Eduprobe: An ultimate test portal",
    description: "A full-stack online assessment platform where students can take quizzes, practice tests, live exams, peer challenges, AI powered tests etc. Includes features like user authentication, timed tests, result analytics, and an admin panel for quiz management.",
    technologies: ["React", "Nextjs","Tailwind CSS","Sadcn", "MongoDB", "Nodemailer","Gemini AI ",],
    githubUrl: "https://github.com/code-guru2004/quiz-app",
    liveUrl: "https://eduprobe-exam.vercel.app/",
    image: "/Eduprobe_img.png"
  },
  {
    title: "LetterBox: An anonymous messaging web application",
    description: "A anonymous messaging platform where users can send and receive messages without revealing their identity. Built with WebSockets for instant updates and a clean, modern UI for smooth interactions.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/code-guru2004/letterbox",
    liveUrl: "https://letterbox-beta.vercel.app/",
    image: "/letterbox_img.png"
  },
  {
    title: "JobEchoAI: An AI Powered Mock Interview Application",
    description: "An AI-driven interview preparation app that simulates real job interviews. Users can upload resumes, attempt personalized questions, receive instant feedback, and track progress with AI-powered analytics.",
    technologies: ["Next.js", "Gemini AI ", "Tailwind CSS", "PostgreSQL","pdf.js"],
    githubUrl: "https://github.com/code-guru2004/JobEchoAI",
    liveUrl: "https://job-echo-ai.vercel.app/",
    image: "/jobechoai_img.png"
  },
  {
    title: "Hotel Listing Web Application",
    description: "A full-featured hotel booking and listing platform where users can browse hotels, view details, give feedbacks.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/code-guru2004/Hotel-listing",
    liveUrl: "https://github.com/code-guru2004/Hotel-listing",
    image: "/hotel_listing.jpeg"
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio website to showcase projects, skills, and experience. Built with smooth animations, dark mode, and best practices for accessibility and SEO.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/api/placeholder/400/250"
  }
];


export default function Projects() {
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
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            My Projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects. Each project represents a challenge I've enjoyed solving.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-stone-800">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="group/code relative overflow-hidden border-border bg-transparent hover:bg-transparent"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/code:opacity-100 transition-opacity duration-300 -z-10" />
                      <FiGithub className="h-4 w-4 mr-2 transition-transform group-hover/code:text-white duration-300 group-hover/code:scale-110" />
                      <span className="text-foreground group-hover/code:text-white transition-colors duration-300">Code</span>
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    asChild
                    className="group/demo relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover/demo:opacity-100 transition-opacity duration-300" />
                      <ExternalLink className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/demo:translate-x-0.5" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
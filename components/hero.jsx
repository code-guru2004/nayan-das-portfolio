"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="home" className="min-h-screen flex items-center justify-center py-16">
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="relative w-40 h-40 rounded-full flex items-center justify-center mx-auto p-[3px] 
                  bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                  animate-gradient-border">
              <Image
                src="/nayan_das.jpg"
                alt=""
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg"></div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Nayan Das
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            aria-label="I am a Full Stack Developer, Problem Solver, and AI/ML Enthusiast"
          >
            I am a <span className="ml-1"></span>
            <Typewriter
              words={['Full Stack Developer', 'Problem Solver', 'AI/ML Enthusiast']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>


          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl"
          >
            I create beautiful, functional web experiences that make a difference.
            Currently specializing in React, Next.js, and modern web technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="/Nayan_das_CV.pdf" download>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 "
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Download CV
                </Button>
              </motion.div>
            </a>
            <Link
              href={"#projects"}
              className="group inline-flex items-center justify-center px-2.5 py-2.5 text-sm font-medium rounded-lg border-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white shadow-md hover:shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
            >
              View Projects
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-2"
          >
            <Link href="https://github.com/code-guru2004" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FiGithub className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/nayan-das2004" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FiLinkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:nayan010das@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
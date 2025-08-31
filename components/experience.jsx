"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";

const experiences = [
  {
    company: "NirveonX Omnicare Pvt. Ltd. ",
    position: "Full Stack Web Developer",
    period: "April,2025 - July,2025",
    description: [ 
      "Built interactive web-based games like Echo Match and Bloom the Buds to improve user engagement.", 
      "Designed and developed multiple responsive UIs for NirveonX's healthcare-focused platform.", 
      "Contributed to frontend enhancements with a focus on usability, accessibility, and performance."
    ],
    technologies: ["React", "Nextjs", "Tailwind CSS", "MongoDB"],
    lor: "/Nayan_Das_Letter_Of_Recommendation.pdf",
    certificate: "/Certification_of_Completion_NAYAN_DAS.pdf",
    website: "https://nirveonx.com/",
  },
];

const education = [
  {
    institution: "Hooghly Engineering and Technology College",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 - Present",
    score: "CGPA: 8.67",
    description: [
      "Ranked among the top 5% of the batch.",
      "Relevant coursework: Object-Oriented Programming, Operating Systems, Data Structures & Algorithms, Database Management Systems."
    ]
  },
  {
    institution: "Singur Mahamaya High School",
    degree: "Higher Secondary Education (PCM)",
    period: "2020 - 2022",
    score: "Percentage: 89%",
    description: [
      "Specialized in Physics, Chemistry, and Mathematics (PCM).",
      "Built a strong foundation in analytical and problem-solving skills.",
      "Actively engaged in academic and extracurricular activities."
    ]
  }
];

export default function Experience() {
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and educational background that shaped my skills and knowledge.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="pt-6 group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl">{exp.position}</CardTitle>
                          <CardDescription className="text-base mt-1">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                          <FaCalendarAlt />{exp.period}
                        </Badge>
                      </div>
                      {exp.website && (
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors mt-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Visit Website
                        </a>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="text-muted-foreground mb-4 space-y-2">
                        {exp.description.map((item, index) => (
                          <li key={index} className="text-sm flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full  mt-2 mr-2 flex-shrink-0 bg-gray-700 dark:bg-gray-300"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {exp.lor && (
                          <Button variant="outline" size="sm" asChild className="text-xs">
                            <a href={exp.lor} download>
                              <Download className="h-3 w-3 mr-1" />
                              Recommendation Letter
                            </a>
                          </Button>
                        )}
                        {exp.certificate && (
                          <Button variant="outline" size="sm" asChild className="text-xs">
                            <a href={exp.certificate} download>
                              <Download className="h-3 w-3 mr-1" />
                              Certificate
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="pt-6 group hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-base mt-1">{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="shrink-0">
                        <FaCalendarAlt />{edu.period}
                        </Badge>
                      </div>
                      {edu.score && (
                        <div className="mt-2">
                          <Badge variant="default" className="text-xs">
                          <GrScorecard className="w-7 h-7"/>{edu.score}
                          </Badge>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.description.map((item, index) => (
                          <li key={index} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 bg-gray-700 dark:bg-gray-300"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
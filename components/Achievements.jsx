"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star, Calendar, MapPin } from "lucide-react";

const achievements = [
    {
        title: "1st Place – Best Web Application Award",
        organization: "CodeCharcha",
        date: "April 2025",
        description: "Won 1st place with my team for developing an innovative e-commerce platform featuring exceptional user experience, scalability, and performance. Contributed to full-stack development and AI-based recommendation system.",
        location: "Remote",
        category: "Development",
        icon: <Trophy className="h-6 w-6" />
      },
      
  {
    title: "2nd Place - Frontend Excellence Award",
    organization: "Google Developer Student Club & CatOff",
    date: "December 2024",
    description: "Recognized for outstanding contributions to frontend development and innovative use of React patterns.",
    location: "Hooghly, West Bengal, India",
    category: "Frontend",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "2nd Rank in College",
    organization: "Hooghly Engineering and Technology College",
    date: "February 2025",
    description: "Achieved 2nd rank in the Computer Science & Engineering department with a CGPA of 8.74.",
    location: "West Bengal, India",
    category: "Education",
    icon: <Award className="h-6 w-6" />
  }
  
];

const categories = [
  { name: "All", value: "all" },
  { name: "Development", value: "Development" },
  { name: "Frontend", value: "Frontend" },
  { name: "Education", value: "Education" }
];

import { useState } from "react";

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredAchievements = activeCategory === "all" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

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
    <section id="achievements" className="py-20">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Awards
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition for my work, contributions, and participation in various competitions and events.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        {/* <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer transition-all ${activeCategory === category.value&&'bg-stone-500 text-white dark:bg-gray-500'}`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.name}
            </Badge>
          ))}
        </motion.div> */}

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 pt-6 dark:bg-stone-800 animate-card">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {achievement.icon}
                    </div>
                    <Badge variant="secondary">{achievement.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription>{achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">{achievement.description}</p>
                  
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{achievement.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-muted-foreground mb-4">No achievements found in this category.</div>
            <Badge 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => setActiveCategory("all")}
            >
              View all achievements
            </Badge>
          </motion.div>
        )}
      </div>
    </section>
  );
}
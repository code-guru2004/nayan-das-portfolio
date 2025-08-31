"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { BiMailSend } from "react-icons/bi";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('/api/mail/send-mail',{
        ...formData
      });
      if(resp.data.success){
        toast.success('Your message is sent successfully.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
      }
    } catch (error) {
      toast.error('Oops! Failed to send message.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }finally{
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }
    
  };

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
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-primary mx-auto mb-8"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">nayan010das@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9062674732</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Singur, Hooghly, West Bengal, India</p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-lg font-medium mb-4">Follow me</h4>
              <div className="flex gap-3">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm h-10 w-10 bg-gray-100 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-100 text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md group/github"
                  >
                    <FiGithub className="h-5 w-5 transition-transform duration-300 group-hover/github:scale-110" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm h-10 w-10 bg-blue-100 hover:bg-blue-600 dark:bg-blue-900/50 dark:hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group/linkedin"
                  >
                    <FaLinkedinIn className="h-5 w-5 transition-transform duration-300 group-hover/linkedin:scale-110" />
                  </Button>
                </Link>
                <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm h-10 w-10 bg-slate-700 hover:bg-slate-500 dark:bg-slate-500/50 dark:hover:bg-slate-500 text-slate-600 hover:text-white dark:text-slate-100 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group/twitter"
                  >
                    <BsTwitterX className="h-5 w-5 transition-transform duration-300 group-hover/twitter:scale-110" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="name" className="flex">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=""
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className=""
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
  <Button 
    type="submit" 
    className="w-full group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg overflow-hidden"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <BiMailSend className="size-6 mr-2 transition-transform duration-300 group-hover:scale-110" />
    Send Message
  </Button>
</motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
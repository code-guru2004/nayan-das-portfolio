"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ChevronDown, Home, User, Folder, Briefcase, Award, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Experience", href: "#experience", icon: Award },
    { name: "Achievements", href: "#achievements",icon: Mail },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

 

  if (!mounted) return null;

  return (
    <>
      {/* Normal Top Navbar */}
      <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b bg-background/95 backdrop-blur-md shadow-sm py-1" : "bg-transparent py-3"} ${scrolled ? "hidden sm:block" : "block"}`}>
        <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              {"<Nayan/>"}
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}

              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-4 p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:hidden flex items-center"
            >
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-foreground focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-background/95 backdrop-blur-md rounded-lg border shadow-lg overflow-hidden"
              >
                <div className="px-4 py-2 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  
                  
                  
                  <div className="pt-2 border-t border-border">
                    <button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="flex items-center w-full px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground rounded-md transition-colors"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="mr-3 h-5 w-5" /> Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="mr-3 h-5 w-5" /> Dark Mode
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>

      {/* Mobile Bottom Navbar (visible only when scrolled) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 block sm:hidden bg-stone-100 dark:bg-stone-700 border-t shadow-lg"
          >
            <nav className="container mx-auto px-4 py-2">
              <div className="flex justify-between items-center text-sm font-medium">
                {menuItems.slice(0,4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex flex-col items-center p-2 text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <item.icon className="h-5 w-5 mb-1" />
                    <span className="text-xs">{item.name}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
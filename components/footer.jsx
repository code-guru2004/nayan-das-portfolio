import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Nayan Das<span className="text-3xl">.</span></h3>
            <p className="text-muted-foreground">
              Full Stack Developer & AI-ML Enthusiast
            </p>
          </div>

          <div className="flex gap-3">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 bg-gray-100 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-100 text-gray-700 hover:text-white dark:text-gray-300 dark:hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md group/github"
              >
                <Github className="h-5 w-5 transition-transform duration-300 group-hover/github:scale-110" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 bg-blue-100 hover:bg-blue-600 dark:bg-blue-900/50 dark:hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group/linkedin"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover/linkedin:scale-110" />
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 bg-red-100 hover:bg-red-600 dark:bg-red-900/50 dark:hover:bg-red-600 text-red-600 hover:text-white dark:text-red-400 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group/mail"
              >
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover/mail:scale-110" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nayan Das. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#home" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nayan Das | A Full-Stack Developer",
  description:
    "Portfolio of Nayan Das – a passionate Full-Stack Web Developer specializing in Next.js, React, and modern web technologies. Explore projects, skills, and achievements.",
  keywords: [
    "Nayan Das",
    "Portfolio",
    "Web Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Nayan Das" }],
  openGraph: {
    title: "Nayan Das | Full-Stack Developer Portfolio",
    description:
      "Discover projects and skills of Nayan Das – Full-Stack Developer building modern, scalable, and responsive applications.",
    url: "https://your-domain.com",
    siteName: "Nayan Das Portfolio",
    images: [
      {
        url: "https://your-domain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Nayan Das Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
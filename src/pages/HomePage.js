"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Twitter, Phone, MapPin, Globe, Instagram } from "lucide-react"
import { Button } from "../components/ui/button"
import ProjectCard from "../components/ProjectCard"
import TechStack from "../components/TechStack"
import TypeAnimation from "../components/TypeAnimation"
import { cn } from "../lib/utils"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="hidden font-bold sm:inline-block">Nam Võ</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-cyan-400">
                About
              </a>
              <a href="#experience-education" className="transition-colors hover:text-cyan-400">
                Experience & Education
              </a>
              <a href="#projects" className="transition-colors hover:text-cyan-400">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-cyan-400">
                Skills
              </a>
            </nav>
          </div>
          <Button
            variant="outline"
            className="ml-auto"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/VoCongNam_Frontend_Intern_CV.pdf";
              link.setAttribute("download", "VoCongNam_Frontend_Intern_CV.pdf");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left column - Text */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    <span className="text-2xl sm:text-3xl md:text-4xl">Hi, It's</span> 
                    <span className="text-cyan-400"> Võ Công Nam</span>                    
                    </h1>
                    <h2 className="text-xl md:text-2xl">
                      I'm a <TypeAnimation words={["Front-End Developer", "Web Developer", "UI/UX Developer"]} />
                    </h2>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    I am a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React.js,
                    and modern web technologies. My true interest lies in creating seamless, interactive web
                    experiences.
                  </p>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href="https://github.com/NamVo17"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-cyan-400 hover:text-black hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/v%C3%B5-c%C3%B4ng-nam-00a192326/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-cyan-400 hover:text-black hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:vocongnam172@gmail.com"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-cyan-400 hover:text-black hover:scale-110"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/namvo1701/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all hover:bg-cyan-400 hover:text-black hover:scale-110"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Right column - Image */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-80 group-hover:opacity-100 transition-all duration-300 blur-md group-hover:blur-lg"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black group-hover:scale-105 transition-all duration-300">
                      <img
                        src="/21166180.jpg?height=400&width=400"
                        alt="Nam Võ"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto w-full">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a href="mailto:vocongnam172@gmail.com" className="hover:text-cyan-400 transition-colors">
                  vocongnam172@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>0347587212</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>Tam Phu Ward, Thu Duc City, HCM City</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-400" />
                <a
                  href="https://github.com/NamVo17"
                  target="_blank"
                  className="hover:text-cyan-400 transition-colors"
                  rel="noreferrer"
                >
                  github.com/NamVo17
                </a>
              </div>
            </div>
          </div>
        </div>
        <section id="experience-education" className="py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex rounded-md shadow-sm mb-8">
                <button
                  type="button"
                  className={cn(
                    "px-6 py-3 text-lg font-medium rounded-l-md border",
                    activeTab === "experience"
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-transparent text-white border-gray-700 hover:bg-gray-800",
                  )}
                  onClick={() => setActiveTab("experience")}
                  aria-pressed={activeTab === "experience"}
                >
                  WORK EXPERIENCE
                </button>
                <button
                  type="button"
                  className={cn(
                    "px-6 py-3 text-lg font-medium rounded-r-md border border-l-0",
                    activeTab === "education"
                      ? "bg-cyan-400 text-black border-cyan-400"
                      : "bg-transparent text-white border-gray-700 hover:bg-gray-800",
                  )}
                  onClick={() => setActiveTab("education")}
                  aria-pressed={activeTab === "education"}
                >
                  EDUCATION
                </button>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              {activeTab === "experience" && (
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">Intern, VIỆN CÔNG NGHỆ THÔNG TIN BQP CƠ SỞ 2</h3>
                    <span className="text-gray-400">Oct 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>
                      Developed a tool using Python and PyQGIS to allow users to draw and edit symbols freely on the map
                      without QGIS.
                    </li>
                    <li>
                      Worked in a team to design and implement the user interface for loading and interacting with maps.
                    </li>
                    <li>
                      Coded the UI and functionalities for symbol manipulation, including drawing and editing tools.
                    </li>
                    <li>Completed 90% of the project compared to the initial requirements.</li>
                  </ul>
                </div>
              )}

              {activeTab === "education" && (
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">
                      Bachelor of Information Systems, Nong Lam University - Ho Chi Minh City
                    </h3>
                  </div>
                  <span className="flex text-gray-200 italic mb-6">Expected Graduation: August 2025</span>
                  <div className="text-gray-400 space-y-4">
                    <p> Relevant coursework: Web Application Development, Database Systems.</p>
                    <p>
                       Thesis on "Designing an E-Commerce Website for Selling Cakes and Tea with Integrated Customer
                      Support Chatbot and Recommendation System".
                    </p>
                    <ul className="list-disc pl-16 space-y-4">
                      <li>Developed the Front-End using modern UI frameworks (Bootstrap, Tailwind CSS).</li>
                      <li>Implemented a PHP & MySQL back-end for product management and user authentication.</li>
                      <li>
                        Integrated an AI-powered chatbot for customer support. Built a Product Recommendation System.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Chatbot, Recommendation System."
                image="/giaodienweb.png?height=400&width=600 "
                link="https://github.com/NamVo17/doantotnghiep2025"
                tags={["PHP", "Python", "Bootstrap"]}
              />
              <ProjectCard
                title="Profile"
                description="This is my personal profile website."
                image="/profile.png?height=400&width=600"
                link="https://github.com/NamVo17/profile"
                tags={["React", "TailwindCSS"]}
              />
              <ProjectCard
                title="Tool symbols on the map"
                description="Using python and libraries to build a toolkit for manipulating symbols on maps"
                image="/VienCNTT.jpg?height=400&width=600 " A
                link="https://github.com/NamVo17/thuctapVi-nCNTT"
                tags={["Python"]}
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500">© 2024 Nam Võ. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:text-cyan-400 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:text-cyan-400 transition-colors" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}


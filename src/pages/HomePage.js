"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail, Twitter, Phone, MapPin, Globe } from "lucide-react"
import { Button } from "../components/ui/button"
import ProjectCard from "../components/ProjectCard"
import TechStack from "../components/TechStack"
import { cn } from "../lib/utils"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="hidden font-bold sm:inline-block">Nam Võ</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#about" className="transition-colors hover:text-foreground/80">
                About
              </a>
              <a href="#experience-education" className="transition-colors hover:text-foreground/80">
                Experience & Education
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </a>
              <a href="#skills" className="transition-colors hover:text-foreground/80">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left column - Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src="/21166180.jpg?height=400&width=400"
                    alt="Nam Võ"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Middle and right columns - Personal information */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2 text-center md:text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    VÕ CÔNG NAM
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-primary">FRONT-END DEVELOPER</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <a href="mailto:vocongnam172@gmail.com" className="hover:underline">
                        vocongnam172@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>0347587212</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Tam Phu Ward, Thu Duc City, HCM City</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <a href="https://github.com/NamVo17" target="_blank" className="hover:underline" rel="noreferrer">
                        github.com/NamVo17
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 pt-4">
                  <a href="https://github.com/NamVo17" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/v%C3%B5-c%C3%B4ng-nam-00a192326/" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a href="https://zalo.me/0347587212" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon">
                        <img src="/zalo.svg" alt="Zalo" className="h-6 w-6" />
                      <span className="sr-only">Zalo</span>
                    </Button>
                  </a>
                  <a href="mailto:vocongnam172@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="summary" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">SUMMARY</h2>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                I am a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, React.js, and
                modern web technologies. While I previously interned as a GIS Developer at the Institute of Information
                Technology, my true interest lies in creating seamless, interactive web experiences. I am currently
                developing an E-Commerce Website as my thesis project, integrating a Customer Support Chatbot and
                Recommendation System. I am eager to contribute my skills and grow in a professional Front-End role.
              </p>
            </div>
          </div>
        </section>

        <section id="experience-education" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex rounded-md shadow-sm mb-8">
                <button
                  type="button"
                  className={cn(
                    "px-6 py-3 text-lg font-medium rounded-l-md border",
                    activeTab === "experience"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-muted",
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
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-muted",
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
                    <span className="text-muted-foreground">Oct 2024 – Dec 2024</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
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
                  <span className=" text-muted-foreground italic mb-8 block">Expected Graduation: August 2025</span>
                  <div className="text-gray-500 dark:text-gray-400 space-y-4">
                    <p> Relevant coursework: Web Application Development, Database Systems.</p>
                    <p>
                       Thesis on "Designing an E-Commerce Website for Selling Cakes and Tea with Integrated Customer
                      Support Chatbot and Recommendation System".
                    </p>
                    <ul className="list-disc pl-10 space-y-2">
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
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center ">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
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
                image="/VienCNTT.jpg?height=400&width=600 "A
                link="https://github.com/NamVo17/thuctapVi-nCNTT"
                tags={[ "Python"]}
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
            <TechStack />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Nam Võ. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}


"use client"

import { Card, CardContent, CardFooter } from "./ui/card"
import { Github } from "lucide-react"
import { useState } from "react"

export default function ProjectCard({ title, description, image, link, tags }) {
  const [isHoveringImage, setIsHoveringImage] = useState(false)

  return (
    <Card
      className={`overflow-hidden bg-gray-900 border-gray-800 transition-all duration-500 
        ${!isHoveringImage ? "hover:border-cyan-400 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20" : ""}
      `}
    >
      <div
        className="relative aspect-video overflow-hidden"
        onMouseEnter={() => setIsHoveringImage(true)}
        onMouseLeave={() => setIsHoveringImage(false)}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full  object-fill transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </CardFooter>
    </Card>
  )
}


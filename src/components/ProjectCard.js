import { Card, CardContent, CardFooter } from "./ui/card"
import { Github } from "lucide-react"

export default function ProjectCard({ title, description, image, link, tags }) {
  return (
    <Card className="overflow-hidden">
      <div className="border-2 border-gray-5000 rounded-lg p-1">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="absolute inset-0 w-full h-full object-fill transition-transform duration-700 group-hover:delay-500 hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
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
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </a>
      </CardFooter>
    </Card>
  )
}


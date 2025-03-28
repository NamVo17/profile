import { Card } from "./ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["React", "Bootstrap", "TailwindCSS", "Redux", "Ant Design", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["PHP", "Python", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Git", "GitHub"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 bg-gray-900 border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-white">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-sm font-medium text-cyan-400 ring-1 ring-inset ring-gray-700 hover:bg-cyan-400 hover:text-black transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}


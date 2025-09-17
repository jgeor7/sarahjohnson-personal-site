import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Store",
      description:
        "A modern, responsive online store with payment integration, inventory management, and customer analytics.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      title: "Restaurant Website",
      description: "An elegant restaurant website featuring online reservations, menu showcase, and customer reviews.",
      image: "/restaurant-website.png",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    },
    {
      title: "Portfolio Blog",
      description: "A personal blog platform with content management, SEO optimization, and social media integration.",
      image: "/clean-blog-website-interface.jpg",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-balance">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Coming Soon",
      description: "Currently working on exciting AI/ML projects. Will be updated with my latest work as I continue learning and building innovative solutions.",
      technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/Avneesh-Chaurasia",
      category: "AI/ML"
    }
  ];

  const categories = ["All", "AI/ML", "Computer Vision", "Data Science", "Deep Learning", "IoT"];

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my AI/ML projects and software development work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Avneesh-Chaurasia" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

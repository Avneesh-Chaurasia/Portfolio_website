import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-blue-100 text-blue-800";
      case "Research": return "bg-green-100 text-green-800";
      case "Freelance": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="experience" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional experience and hands-on learning in AI/ML and software development
          </p>
        </div>

        <div className="text-center py-16">
          <div className="bg-gray-100 rounded-full p-8 w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <Briefcase className="h-16 w-16 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Building My Experience</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            As a third-year student, I'm currently focused on building strong foundations in AI/ML through coursework and projects. 
            I'm actively seeking internship opportunities to gain hands-on experience in the field.
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              Seeking Internships
            </Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              Open to Opportunities
            </Badge>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Looking for Opportunities</h3>
              <p className="text-blue-100 mb-6">
                I'm actively seeking full-time positions in AI/ML engineering, software development, 
                or data science roles where I can contribute to innovative projects and continue growing my skills.
              </p>
              <div className="flex justify-center">
                <Badge className="bg-white text-primary px-4 py-2">
                  Available for Full-time Roles
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

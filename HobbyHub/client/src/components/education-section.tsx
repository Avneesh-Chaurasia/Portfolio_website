import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning in computer science and AI/ML
          </p>
        </div>

        <div className="mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary rounded-full p-3">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Bachelor of Engineering in Computer Science (AI/ML)
                  </h3>
                  <p className="text-primary font-semibold mb-2">Mumbai University</p>
                  <p className="text-gray-600 mb-3">2023 - 2027 (Expected)</p>
                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800">CGPA: 7.85/10</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Specialization in Artificial Intelligence and Machine Learning. Relevant coursework includes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "Deep Learning",
                      "Data Structures & Algorithms",
                      "Computer Vision",
                      "Natural Language Processing",
                      "Database Systems",
                      "Software Engineering"
                    ].map((course, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Higher Secondary School (11th & 12th)
                  </h3>
                  <p className="text-primary font-semibold mb-2">Wilson College</p>
                  <p className="text-gray-600 mb-3">Science Stream | Passed February 2023</p>
                  <div className="mb-4">
                    <Badge className="bg-blue-100 text-blue-800">12th Grade: 404/600 (67.33%)</Badge>
                  </div>
                  <p className="text-gray-600">
                    Completed higher secondary education in Science stream, building foundation 
                    in mathematics, physics, and computer science that prepared me for engineering studies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 rounded-full p-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Secondary School (10th)
                  </h3>
                  <p className="text-primary font-semibold mb-2">Marwari Vidyalaya High School</p>
                  <p className="text-gray-600 mb-3">Passed March 2021</p>
                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800">10th Grade: 428/500 (85.60%)</Badge>
                  </div>
                  <p className="text-gray-600">
                    Achieved strong academic performance in secondary education, establishing 
                    solid fundamentals across all subjects with particular strength in mathematics and science.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Online Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Introduction to AI",
                provider: "LinkedIn Learning",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Artificial Intelligence Foundations: Machine Learning",
                provider: "LinkedIn Learning",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Introduction to Deep Learning",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Introduction to NLP",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Prompt Engineering",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Computer Vision 101",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Introduction to Data Science",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              },
              {
                title: "Introduction to OpenAI GPT Model",
                provider: "Infosys Springboard",
                year: "2024",
                icon: <BookOpen className="h-5 w-5" />
              }
            ].map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{cert.title}</h4>
                      <p className="text-xs text-gray-600">{cert.provider}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

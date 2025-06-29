import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "HTML", "CSS", "SQL"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "AI/ML Frameworks",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "AWS", "Google Cloud", "Jupyter", "VS Code", "Linux"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "AI/ML Specializations",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Data Science", "Neural Networks", "CNN", "RNN"],
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and robust applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className={category.color}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">75%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Python & AI/ML</h4>
              <p className="text-gray-600">Good foundation in Python programming and basic machine learning concepts</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">70%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Science</h4>
              <p className="text-gray-600">Learning data analysis and visualization with NumPy, Pandas, and Matplotlib</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

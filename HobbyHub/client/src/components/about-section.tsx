import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Computer Science Engineering student specializing in AI/ML. As a beginner in this exciting field, I'm passionate about learning artificial intelligence and machine learning fundamentals to solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Currently pursuing my Bachelor's degree in Computer Science Engineering with a specialization in AI/ML from Mumbai University. I'm building a strong foundation in programming fundamentals, with Python as my primary language, and exploring data manipulation with NumPy and Pandas.
            </p>
            <p className="text-gray-600 mb-6">
              I'm particularly interested in deep learning, natural language processing, and computer vision. As a beginner, I'm currently learning the fundamentals through online courses and hands-on practice with libraries like Scikit-learn and TensorFlow.
            </p>
            <p className="text-gray-600">
              When I'm not studying, you can find me exploring new AI/ML concepts through online courses, practicing data science techniques, and staying updated with the latest developments in artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">AI/ML Focus</h4>
                <p className="text-sm text-gray-600">Specialized in machine learning algorithms and neural networks</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Full Stack</h4>
                <p className="text-sm text-gray-600">Proficient in both frontend and backend development</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Always exploring new technologies and methodologies</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Problem Solver</h4>
                <p className="text-sm text-gray-600">Focused on creating practical solutions to real problems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

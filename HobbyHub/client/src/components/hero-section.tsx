import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, User } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-06-28 at 10.26.30 PM_1751174805926.jpeg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-blue-700 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-300">Avneesh Chaurasia</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
              AI/ML Enthusiast & Computer Science Student
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Passionate about learning artificial intelligence and machine learning. Currently exploring data science fundamentals and building strong foundations in AI technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Avneesh-Chaurasia" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/avneesh-chaurasia/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:chaurasiaavneesh1@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full mx-auto opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={profileImage} 
                  alt="Avneesh Chaurasia"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-200" />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // h-16 = 64px
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // This would typically link to an actual resume file
    alert("Resume download would be implemented with an actual PDF file");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900">Avneesh Chaurasia</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Education</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={downloadResume} className="hidden md:flex">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Education</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
              <Button variant="outline" size="sm" onClick={downloadResume} className="w-full mt-2">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

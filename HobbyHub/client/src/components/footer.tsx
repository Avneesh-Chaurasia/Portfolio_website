import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Avneesh Chaurasia</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              AI/ML Enthusiast and Computer Science student passionate about learning artificial intelligence and machine learning fundamentals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Avneesh-Chaurasia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/avneesh-chaurasia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:chaurasiaavneesh1@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      const headerHeight = 64;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) {
                      const headerHeight = 64;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) {
                      const headerHeight = 64;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('experience');
                    if (element) {
                      const headerHeight = 64;
                      const elementPosition = element.offsetTop - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>chaurasiaavneesh1@gmail.com</li>
              <li>Mumbai, Maharashtra, India</li>
              <li>Available for internships</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Avneesh Chaurasia. Made with 
            <Heart className="h-4 w-4 text-red-500" />
            and lots of learning.
          </p>
        </div>
      </div>
    </footer>
  );
}


import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Book, Search, FileText, Video, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background border-b border-border py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-primary">Job</span>
          <span className="text-primary">Genie</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1">
          <Link 
            to="/job-search" 
            className="px-3 py-2 hover:bg-secondary rounded-md transition-colors"
          >
            Job Search
          </Link>
          <Link 
            to="/resume-optimizer" 
            className="px-3 py-2 hover:bg-secondary rounded-md transition-colors"
          >
            Resume Optimizer
          </Link>
          <Link 
            to="/cover-letter" 
            className="px-3 py-2 hover:bg-secondary rounded-md transition-colors"
          >
            Cover Letter
          </Link>
          <Link 
            to="/interview-prep" 
            className="px-3 py-2 hover:bg-secondary rounded-md transition-colors"
          >
            Interview Prep
          </Link>
          <Link 
            to="/career-guidance" 
            className="px-3 py-2 hover:bg-secondary rounded-md transition-colors"
          >
            Career Guidance
          </Link>
          <div className="ml-4 flex items-center space-x-2">
            <Link to="/login">
              <Button variant="outline" size="sm">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-background border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              to="/job-search" 
              className="flex items-center px-3 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="mr-2 h-5 w-5" />
              Job Search
            </Link>
            <Link 
              to="/resume-optimizer" 
              className="flex items-center px-3 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="mr-2 h-5 w-5" />
              Resume Optimizer
            </Link>
            <Link 
              to="/cover-letter" 
              className="flex items-center px-3 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book className="mr-2 h-5 w-5" />
              Cover Letter
            </Link>
            <Link 
              to="/interview-prep" 
              className="flex items-center px-3 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video className="mr-2 h-5 w-5" />
              Interview Prep
            </Link>
            <Link 
              to="/career-guidance" 
              className="flex items-center px-3 py-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Career Guidance
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

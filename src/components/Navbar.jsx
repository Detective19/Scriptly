import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <BookOpen className="navbar-icon" color="#2563eb" size={32} />
            <span className="navbar-logo-text">Scriptly</span>
          </Link>
        </div>
        
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/javascript">JavaScript</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="navbar-menu">
          <button 
            onClick={toggleMenu}
            className="navbar-menu-button"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>
      
      
      {isMenuOpen && (
        <div className="navbar-mobile-menu open">
          <div className="navbar-mobile-container">
            <Link 
              to="/" 
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/javascript" 
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              JavaScript
            </Link>
            <Link 
              to="/quiz" 
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              Quiz
            </Link>
            <Link 
              to="/about" 
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
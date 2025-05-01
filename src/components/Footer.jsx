import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <BookOpen size={32} color="#fbbf24" />
              <span className="footer-logo-text">Scriptly</span>
            </Link>
            <p className="footer-tagline">
              Helping you master JavaScript one concept at a time.
            </p>
          </div>
          
          <div className="footer-grid">
            <div>
              <h3 className="footer-heading">Navigation</h3>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/javascript" className="footer-link">JavaScript</Link></li>
                <li><Link to="/quiz" className="footer-link">Quiz</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-links">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-links">
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="footer-link" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
                <li><a href="https://javascript.info/" className="footer-link" target="_blank" rel="noopener noreferrer">JavaScript.info</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Scriptly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

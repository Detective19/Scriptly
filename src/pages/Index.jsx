import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, HelpCircle, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";

const Index = () => {
  const featuredCode = `// JavaScript Welcome Example
function greet(name) {
  return \`Hello, \${name}! Welcome to JS Learn.\`;
}

console.log(greet('Developer'));`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
       
       
        <section className="hero">
          <div className="page-container">
            <div className="hero-container">
              <div className="hero-content animate-fade-in">
                <h1 className="hero-title">Master JavaScript The Right Way</h1>
                <p className="hero-text">Learn JavaScript from basics to advanced concepts with our interactive lessons and quizzes.</p>
                <div className="hero-buttons">
                  <Link to="/javascript" className="button button-primary">
                    Start Learning <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </Link>
                  <Link to="/quiz" className="button button-outline">
                    Try a Quiz
                  </Link>
                </div>
              </div>
              <div className="hero-code animate-slide-in">
                <div className="hero-code-container">
                  <CodeBlock code={featuredCode} />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        <section className="features">
          <div className="page-container">
            <h2 className="features-title">Why Learn With Us?</h2>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <BookOpen size={32} color="#2563eb" />
                  </div>
                </div>
                <h3 className="feature-title">Structured Learning</h3>
                <p className="feature-text">Our curriculum is designed to take you from beginner to advanced, step by step.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <HelpCircle size={32} color="#2563eb" />
                  </div>
                </div>
                <h3 className="feature-title">Interactive Quizzes</h3>
                <p className="feature-text">Test your knowledge with our quizzes and get immediate feedback.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    <Users size={32} color="#2563eb" />
                  </div>
                </div>
                <h3 className="feature-title">Community Support</h3>
                <p className="feature-text">Join our community of learners and get help whenever you need it.</p>
              </div>
            </div>
          </div>
        </section>
        

        <section className="cta">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Start Your JavaScript Journey?</h2>
            <p className="cta-text">Join thousands of developers who have mastered JavaScript with our platform.</p>
            <Link to="/javascript" className="button button-primary">Get Started Now</Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
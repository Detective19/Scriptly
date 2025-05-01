import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BookOpen, Radius } from 'lucide-react';
import anuragImg from '../assets/Anurag.jpeg';
import word from "../assets/word.jpeg" ;
import alex from "../assets/Alex.jpg" ;

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="about-container">
          <h1 className="page-title">About JS Learn</h1>
          
          <div className="about-section">
            <div className="about-flex">
              <div className="about-icon-container">
                <BookOpen size={80} color="white" />
              </div>
              <div className="about-content">
                <h2 className="about-title">Our Mission</h2>
                <p className="about-text">
                  At JS Learn, our mission is to make JavaScript education accessible to everyone. We believe that 
                  programming skills should be available to all, regardless of background or previous experience.
                </p>
                <p className="about-text">
                  We've created a platform that simplifies complex JavaScript concepts and presents them in an 
                  easy-to-understand manner, complemented by interactive examples and quizzes to reinforce learning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="page-section">
            <h2 className="about-subtitle">Why We Started</h2>
            <div style={{ backgroundColor: 'var(--color-gray-50)', padding: '2rem', borderRadius: '0.5rem' }}>
              <p className="about-text">
                JS Learn was founded in 2025 by a group of passionate JavaScript developers who recognized 
                a gap in the educational resources available online. While there were plenty of technical 
                documentation sites and scattered tutorials, there wasn't a single platform that offered a 
                structured, beginner-friendly approach to learning JavaScript.
              </p>
              <p className="about-text" style={{ marginBottom: 0 }}>
                Our team set out to create a comprehensive learning platform that would take students from 
                the very basics to advanced JavaScript concepts, using modern teaching methodologies and 
                interactive elements to enhance the learning experience.
              </p>
            </div>
          </div>
          
          <div className="page-section">
            <h2 className="about-subtitle">Our Team</h2>
            <div className="about-grid">
              <div className="about-card">
                <div className="about-card-image">
                <img className="about-card-image" src = {alex}/>
                </div>
                <h3 className="about-card-title">Alex Johnson</h3>
                <p className="about-card-role">Lead Instructor</p>
                <p className="about-card-description">
                  Full-stack developer with 10+ years of experience in JavaScript and web development.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-card-image">
                  <img className="about-card-image" src = {anuragImg}/>
                </div>
      

                <h3 className="about-card-title">Anurag Tomar</h3>
                <p className="about-card-role">Content Developer</p>
                <p className="about-card-description">
                  Educator and JavaScript expert focused on creating accessible learning materials.
                </p>
              </div>
              
              <div className="about-card">
                <div className="about-card-image">
                <img className="about-card-image" src = {word}/>
                </div>
                <h3 className="about-card-title">John Smith</h3>
                <p className="about-card-role">Quiz Master</p>
                <p className="about-card-description">
                  Educational psychologist specializing in assessment and knowledge retention.
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-values">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Our Values</h2>
            <div className="about-values-grid">
              <div className="about-value">
                <div className="about-value-number">
                  <span>1</span>
                </div>
                <div>
                  <h3 className="about-value-title">Accessibility</h3>
                  <p>We believe education should be accessible to everyone, regardless of their background or circumstances.</p>
                </div>
              </div>
              
              <div className="about-value">
                <div className="about-value-number">
                  <span>2</span>
                </div>
                <div>
                  <h3 className="about-value-title">Practicality</h3>
                  <p>We focus on practical, real-world applications of JavaScript that you can use in your projects.</p>
                </div>
              </div>
              
              <div className="about-value">
                <div className="about-value-number">
                  <span>3</span>
                </div>
                <div>
                  <h3 className="about-value-title">Community</h3>
                  <p>We foster a supportive community where learners can help each other grow and develop.</p>
                </div>
              </div>
              
              <div className="about-value">
                <div className="about-value-number">
                  <span>4</span>
                </div>
                <div>
                  <h3 className="about-value-title">Excellence</h3>
                  <p>We strive for excellence in our content, ensuring it's accurate, up-to-date, and of the highest quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

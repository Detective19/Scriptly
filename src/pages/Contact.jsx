import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage({
        type: 'success',
        text: "We've received your message and will get back to you soon."
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="contact-container">
          <h1 className="page-title">Contact Us</h1>
          
          {submitMessage && (
            <div className={`form-message ${submitMessage.type}`} style={{
              padding: '1rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
              backgroundColor: submitMessage.type === 'success' ? '#dcfce7' : '#fee2e2',
              color: submitMessage.type === 'success' ? '#166534' : '#b91c1c',
              textAlign: 'center'
            }}>
              {submitMessage.text}
            </div>
          )}
          
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-title">Get In Touch</h2>
              <p className="contact-text">
                Have a question about JavaScript, our content, or want to provide feedback? 
                We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div style={{ marginTop: '1.5rem' }}>
                <div className="contact-method">
                  <Mail className="contact-icon" size={24} />
                  <div>
                    <h3 className="contact-method-title">Email</h3>
                    <p className="contact-method-detail">anuragtomar919@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <Phone className="contact-icon" size={24} />
                  <div>
                    <h3 className="contact-method-title">Phone</h3>
                    <p className="contact-method-detail">+91  7415048631</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <MessageSquare className="contact-icon" size={24} />
                  <div>
                    <h3 className="contact-method-title">Social Media</h3>
                    <div className="contact-social">
                      <a href="#">Twitter</a>
                      <a href="https://www.linkedin.com/in/anurag-tomar-4802b8346/">LinkedIn</a>
                      <a href="https://github.com/Detective19">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    className="form-input"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="form-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">Is all content free?</h3>
                <p className="faq-answer">Yes, all tutorials, examples, and quizzes on JS Learn are completely free to use.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Do you offer certificates?</h3>
                <p className="faq-answer">We don't currently offer certificates, but this is a feature we're considering for the future.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">How often is content updated?</h3>
                <p className="faq-answer">We regularly update our content to ensure it stays current with the latest JavaScript developments.</p>
              </div>
              
              <div className="faq-item">
                <h3 className="faq-question">Can I suggest new content?</h3>
                <p className="faq-answer">Absolutely! Use the contact form above to send us your suggestions for new topics or improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
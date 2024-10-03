import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';

    // If there are any errors, display them
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear errors if validation passes
    setFormErrors({});
    alert('Form submitted successfully!');

    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true); // Set submitted to true to show success message
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${formErrors.name ? 'error-input' : ''}`}
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${formErrors.email ? 'error-input' : ''}`}
          />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-input ${formErrors.message ? 'error-input' : ''}`}
          />
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {submitted && (
        <div className="success-popup">
          <p>Your message has been successfully sent!</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

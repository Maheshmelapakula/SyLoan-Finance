import React from 'react'
import style from './Contact.module.css'

export const ContactUs = () => {
  return (
    // <div className="contact-container">
    // Anand working on issues
    
    <div className={style.container}>
    
      <h1>Contact Us for more Details</h1>
      <h3>Contact us for any query</h3>
      <p>
       Get in touch with us to find answers to your queries related to loans, investments, cards, insurance and other services.
       <br />
       You can contact us for any assistance through the channels listed below.

      </p>

      {/* <div className="contact-info"> */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street
        </p>
      </div>

      <div className={style.contactForm}>
        {/* div.container */}
        <h2>Send us a Message</h2>
        <div className="form">
          <form>
            <label htmlFor="name">Name:-</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        
      </div>
      
    </div>
  );
};
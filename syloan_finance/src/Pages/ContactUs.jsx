import React, { useState } from 'react'
import style from './Contact.module.css'
import Footer from '../Components/Footer'

export const ContactUs = () => {
  const [email,setEmail]=useState({

  })

  const handleChange=(e)=>{
      console.log(e.target)
      const {name,value}=e.target;
      console.log(name,value)
      setEmail({...email,[name]:value})
  }
  console.log(email)
  return (
    <div>
      <div className={style.ContactUsContainer}>
        <div className={style.info}>
          <h1 className={style.title}>Contact Us</h1>
          <h3>Contact us for any query</h3>
          <p>
            Get in touch with us to find answers to your queries related to loans, investments, cards, insurance and other services.
          <br />
          </p>
        </div>

        <div className={style.contactInfo}>
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




        <div className={style.formContainer}>

          <div className={style.contactForm}>
            {/* div.container */}
            <h2>Send us a Email</h2>
            <div className="form">
              <form>
                <label htmlFor="name">Name:-</label>
                <input type="text" id="name" name="name" required onChange={handleChange}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required onChange={handleChange}></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
            
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
      </div>
      <Footer/>
      
    </div>
  );
};
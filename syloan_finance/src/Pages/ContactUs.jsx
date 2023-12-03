import React, { useState } from 'react'
import style from './Contact.module.css'
import Footer from '../Components/Footer'
import { app,database } from '../firebaseConfig';
import {collection,addDoc,getDocs,doc,updateDoc,deleteDoc,onSnapshot} from 'firebase/firestore';
  

export const ContactUs = () => {
    const [mail,setMail]=useState({})
    const [msg,setMsg]=useState({});
    const collectionRef=collection(database,'mail');
    const collectionRefMsg=collection(database,'message')
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setMail({...mail,[name]:value})
    }
    // console.log(mail);

    const handleChangeMsg=(e)=>{
      const {name,value}=e.target;
      setMsg({...msg,[name]:value});
    }


    const handleSubmitMail=(e)=>{
      e.preventDefault();
      // firebase ADD data
      addDoc(collectionRef,{
        name:mail.name,
        email:mail.email,
        message:mail.message
      }).then(()=>{
          alert('Msg send')
      }).catch(()=>{
          alert('Msg not send')
      })
    }

    const handleSubmitMsg=(e)=>{
      e.preventDefault();
      // firebase ADD data
      addDoc(collectionRefMsg,{
        name:msg.name,
        phone:msg.phone,
        message:msg.message
      }).then(()=>{
          alert('Mail send')
      }).catch(()=>{
          alert('Mail not send')
      })
    }
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
              <form onSubmit={handleSubmitMail}>
                <label htmlFor="name">Name:-</label>
                <input type="text" id="name" name="name" required onChange={handleChange}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required onChange={handleChange}></textarea>

                <button type="submit">Send Mail</button>
              </form>
            </div>
            
          </div>
          <div className={style.contactForm}>
            {/* div.container */}
            <h2>Send us a Message</h2>
            <div className="form">
              <form onSubmit={handleSubmitMsg}>
                <label htmlFor="name">Name:-</label>
                <input type="text" id="name" name="name" required onChange={handleChangeMsg}/>

                {/* <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required /> */}

                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Enter a 10-digit phone number" onChange={handleChangeMsg}/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required onChange={handleChangeMsg}></textarea>

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
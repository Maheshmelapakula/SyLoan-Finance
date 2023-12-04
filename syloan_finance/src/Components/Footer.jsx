import React from 'react'
import'./Components.css'
import logo from "./Assets/logo.jpg"
import facebook from "./Assets/facebook.png"
import instagram from "./Assets/instagram.jpg"
import twitter from "./Assets/twitter.jpg"
import location from "./Assets/location.png"
import mail from "./Assets/mail.png"
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-1'>
                    <p>Growth <span>Your Business</span>,</p>
                    <p>Take Your Step with Us</p>
                </div>
                <div className='footer-top-2'>
                    <button>Contact Us</button>
                </div>
            </div>
            <hr /><hr />
            <div className='footer-bottom'>
                <div>
                    <img src={logo} alt="1422211" />
                    <p>No matter how your customers want pay, we can help you find the right</p>
                    <ul class="social-icons">
            <li><a href="#" target="_blank"><img src={facebook} alt="Instagram"/></a></li>
            <li><a href="#" target="_blank"><img src={instagram }alt="Twitter"/></a></li>
            <li><a href="#" target="_blank"><img src={twitter} alt="Facebook"/></a></li>
        </ul>
                </div>
    
    


                <div className='quickmenu-container'>
                    <h3 id='quickmenu'>Quick Menu</h3>
                    <div>
                        <ul className=''>
                            <li className=''>
                                <a href="#">UseCases</a>
                                <Link to={'/product'}><a href="#">Product</a></Link>
                                
                                <a href="#">Company</a>
                                <Link to={'/ContactUs'}><a href="#">Support</a></Link>
                                
                            </li>
                        </ul>
 

                    </div>

                </div>
                <div>
    <ul>
        <li>
            <a href="#" target="_blank">
                <img src={location} alt="Location" />
            </a>
            <p>8502 Preston Rd. Inglewood, Maine 98380, USA</p>
        </li>
        <li>
            <a href="#" target="_blank">
                <img src={mail} alt="Mail" />
            </a>
            <p>info@syloan.co</p>
        </li>
    </ul>
</div>

            </div>
        </div>
    )
}

export default Footer;
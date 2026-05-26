import React from 'react'
import "./ContactInfo.css"
import { FaInstagram, FaWpforms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function ContactInfo() {
    return (
        <div id='TopContainer'>
            <div id='SecondContainer' >
                <h2>Contact Info</h2>
                <a href='https://www.instagram.com/tortilloninfo?igsh=NmQ5amZlcjBiam4z' target='_blank' rel='noopener noreferrer'> <FaInstagram /> tortilloninfo</a>
                <p> <MdEmail /> tortilloninfo@gmail.com</p>
                <div className='Pcontainer'> <FaWpforms /> Business Enquiry?
                    <a href='https://forms.gle/XEoEPzXETgbJG9pL8' target='_blank' rel='noopener noreferrer'>Click here</a></div>
            </div>
        </div>
    )
}
export default ContactInfo;

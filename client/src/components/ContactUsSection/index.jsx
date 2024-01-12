import React from 'react'
import './contactUsSection.scss'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function ContactUsSection() {
  return (
    <section id='contactUsSection'>
      <h1>Contact Us</h1>
      <div className="middleBox">
        <div className="littleBox">
          <FaLocationDot />
          <p style={{ color: 'gray' }}>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className="littleBox">
          <FaPhoneAlt />
          <p>+1 232 3235 324</p>
        </div>
        <div className="littleBox">
          <CiMail />
          <p>youremail@domain.com</p>
        </div>
        <div className="downBox">
<form action="">
  <h2>Contact Form</h2>
<div className="namesBox">
  <div>
  <label htmlFor="">First Name</label>
  <input type="text" />
  </div>
 <div>
 <label htmlFor="">Last  Name</label>
  <input type="text" />
 </div>
</div>
<label htmlFor="">Email</label>
  <input type="text" />
  <label htmlFor="">Subject</label>
  <input type="text" />
  <label htmlFor="">Message</label>
  <input type="text" />
</form>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
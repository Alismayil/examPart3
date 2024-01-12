import React from 'react'
import './ourServicesSection.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function OurServicesSection() {
  return (
    <section id='ourServicesSection'>
<h1>Our Team</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
<div className="imagesBox">
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_5.jpg" alt="" />
  </div>
  <div className="text">
    <p>Kaiara Spencer</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_6.jpg" alt="" />
  </div>
  <div className="text">
    <p>Dave Simpson</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_7.jpg" alt="" />
  </div>
  <div className="text">
    <p>Ben Thompson</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_8.jpg" alt="" />
  </div>
  <div className="text">
    <p>Kyla Stewart</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_1.jpg" alt="" />
  </div>
  <div className="text">
    <p>Kaiara Spencer</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_2.jpg" alt="" />
  </div>
  <div className="text">
    <p>Dave Simpson</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_3.jpg" alt="" />
  </div>
  <div className="text">
    <p>Ben Thompson</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>
<div className="card">
  <div className="image">
    <div className="imageHoverBox">
    <FaFacebookF style={{cursor:"pointer"}} />
    <FaTwitter style={{cursor:"pointer"}} />
    <FaLinkedinIn style={{cursor:"pointer"}} />
    <FaInstagram style={{cursor:"pointer"}} />
    </div>
    <img src="https://preview.colorlib.com/theme/nitro/images/person_4.jpg" alt="" />
  </div>
  <div className="text">
    <p>Chris Stewart</p>
    <span>PRODUCT MANAGER</span>
  </div>
</div>

</div>
    </section>
  )
}

export default OurServicesSection
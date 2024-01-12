import React from 'react'
import './aboutPage.scss'
import {Helmet} from "react-helmet";
import { SiVerizon } from "react-icons/si";

function AboutPage() {
  return (
<>
    <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <section id="AboutSection">
        <h1>About Us</h1>
        <div className="aboutBox">
    <div className="imgBox">
      {/* <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" /> */}
    </div>
    <div className="textBox">
      <h2>For the next great business</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
      <div className="ticeBox">
        <SiVerizon style={{color:"green"}} />
     <p> Officia quaerat eaque neque</p>
      </div>
      <div className="ticeBox">
        <SiVerizon style={{color:"green"}} />
     <p> Possimus aut consequuntur incidunt</p>
      </div>
      <div className="ticeBox">
        <SiVerizon style={{color:"green"}} />
     <p> Lorem ipsum dolor sit amet</p>
      </div>
      <div className="ticeBox">
        <SiVerizon style={{color:"green"}} />
     <p> Consectetur adipisicing elit
</p>
      </div>
    </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
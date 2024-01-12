import React from 'react'
import './homePage.scss'
import {Helmet} from "react-helmet";
import WelcomeSection from '../../components/WelcomeSection';
import AboutPage from '../AboutPage';
import OurServicesSection from '../../components/OurServicesSection';
import ContactUsSection from '../../components/ContactUsSection';
import OurteamSection from '../../components/OurteamSection';

function HomePage() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <WelcomeSection/>
      <OurteamSection/>
      <AboutPage/>
      <OurServicesSection/>
      <ContactUsSection/>
    </>
  )
}

export default HomePage
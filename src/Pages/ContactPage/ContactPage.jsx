import React from 'react';
import './ContactPage.css';
import { Navbar, HeroBanner, ContactOverviewSection, FooterSection } from '../../Components';
import { bannerInformationContact } from '../../Constants';

const ContactPage = () => {
  return (
    <>
        <Navbar page='Contact' />
        <HeroBanner bannerInformation={bannerInformationContact} />
        <ContactOverviewSection />
        <FooterSection />
    </>
  )
}

export default ContactPage
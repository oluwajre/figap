import React from 'react';
import './HomePage.css';
import { HeroSection, ServicesSection, AboutSection, TestimonialSection, PartnerSection, GetInTouch, FooterSection } from '../../Components';
import { CarouselClick } from '../../utils';

const HomePage = () => {

  return (
    <>
        {/* <Navbar page='home' /> */}
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialSection />
        {/* <PartnerSection text={true}/> */}
        <section className="getin-touch py-5">
          <div className="container">
            <GetInTouch isFormComplete={false} />
          </div>
        </section>
        <FooterSection />
        <CarouselClick />
    </>
  )
}

export default HomePage
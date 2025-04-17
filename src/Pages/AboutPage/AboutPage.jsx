import React from 'react';
import './AboutPage.css';
import { Navbar, HeroBanner, AboutOveriewSection, PartnerSection, CounterSection, VideoSection, TeamSection, FooterSection } from '../../Components';
import { bannerInformationAbout } from '../../Constants';
import { banner_2 } from '../../assets/images';
import { contactdata } from '../../Constants';
import { CarouselClick } from '../../utils';

const AboutPage = () => {

  return (
    <>
      <Navbar page='About' />
      <HeroBanner bannerInformation={bannerInformationAbout} />
      <AboutOveriewSection />
      <PartnerSection text={false}/>
      <div className='container text-center mt-4 mb-5 appear'>
          <h1 className="display-1 text-primary component-title p-0 m-0">. Just like us</h1>
          <p className='lead fw-normal p-0 m-0'>Creating technology is always based on perfect relationships.</p>
      </div>
      <VideoSection imageSrc={banner_2} youtubeSrc={contactdata.youtube_presentation}/>
      <CounterSection backgroundColor='#f8f9fa' alternate={true}/>
      <TeamSection />
      <FooterSection />
      <CarouselClick />
    </>
  )
}

export default AboutPage
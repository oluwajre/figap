import React from 'react';
import './AboutOveriewSection.css';
// import Counter from '../Counter/Counter';

const AboutOveriewSection = () => {
  return (
    <section className="about mb-5">
        <div className="container mt-5">
            <div className="row align-items-center justify-content-between text-left about-text-container py-5">
                <div className="col-lg-4 bg-primary align-self-stretch d-flex flex-column justify-content-center position-relative appear">
                    <div className="col-9 col-sm-8 col-lg-12">
                        <p className='text-uppercase section-title-p text-light pt-3 pt-lg-0'>About</p>
                        <h1 className='display-6 fw-bold mb-4 text-white' style={{maxWidth: '400px'}}><span className='text-white'>.</span> Welcome to Our <span className='text-white'>TriniTwin Company</span></h1>
                    </div>
                </div>

                <div className="col-lg-7 py-3 appear">
                    <p className='mb-2 mb-lg-4 component-sub-title'>We provide future of energy</p>
                    <p>
                        TriniTwin is committed to providing reliable solar energy installations, advanced security systems, and expert electrical wiring services. Led by Mr. Anthony Abereoje, our company focuses on delivering sustainable, efficient solutions that power homes and businesses while promoting a greener future.
                    </p>
                    <p>
                        With a strong partnership with top industry brands, we ensure the highest quality and performance in every project. Our goal is to help you reduce energy costs, improve security, and create safer, more efficient environments for your home or business.
                    </p>
                    {/* <a href="" className='fw-bold explore-more'>Explore More<span className='align-middle ms-3' /></a> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutOveriewSection
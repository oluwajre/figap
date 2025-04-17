import React from 'react';
import './ContactOverviewSection.css';
import GetInTouch from '../GetInTouch/GetInTouch';
import { contactdata } from '../../Constants';
import GoogleMap from '../GoogleMap/GoogleMap';

const ContactOverviewSection = () => {
  return (
    <section className="contact-overview pt-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-5 bg-primary py-5 px-4 text-light contact appear">
                    <h1 className='display-6 fw-bold mb-4'>. Contact Us</h1>
                    <p className="lead fw-normal">{contactdata.address}</p>
                    <p className="lead fw-normal"><a href={`tel:${contactdata.phone_1}`}>{contactdata.phone_1}</a></p>
                    <p className="lead fw-normal"><a href={`mailto:${contactdata.email}`}>{contactdata.email}</a></p>
                    {/* Use smooth scroll when clicking */}
                    <a 
                      className="map-btn btn d-block btn-padding border-0 mt-5" 
                      href="#map" 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor link behavior
                        document.getElementById("map").scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      See Google Map
                    </a>
                </div>
                <div className="col-lg-7">
                    <GetInTouch isFormComplete={true} />
                </div>
            </div>
        </div>
        <div className="map mt-5" id='map'>
            <GoogleMap />
        </div>
    </section>
  );
}

export default ContactOverviewSection;

import React from 'react';
import './ServicesOverviewSection.css';
import { logo } from '../../assets/images';
import ServiceColumn from '../ServiceColumn/ServiceColumn';
import { servicecolumndata } from '../../Constants';

const ServicesOverviewSection = () => {
  return (
    <section className="services pb-0" id="services">
            <div className="container">
    
                <div className="row align-items-center appear">
                    <p className='text-uppercase section-title-p text-primary'>Services</p>
                    <div className="col-lg-7 mb-4 appear">
                        <div className="row">
                            <div className="col-9 col-lg-7"><h1 className='display-6 fw-bold mb-0'>Welcome to TriniTwin Services</h1></div>
                            <div className="col-3 col-lg-5 align-right">
                                <img src={logo} alt="logo-black" className='img-fluid logo'/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-5">
                        <p className='mb-1'>
                        TriniTwin Energy offers expert solutions in solar energy installation, advanced security systems, and professional electrical wiring. Our services are designed to enhance sustainability, security, and efficiency for homes and businesses alike.
                        </p>
                    </div>
                </div>

                <div className="row text-center justify-content-center mt-5">
                    <div className="col-12 appear">
                        {/* <p className='text-uppercase section-title-p text-primary m-0 mb-3 p-0'>SERVICES</p> */}
                        <h1 className='display-6 fw-bold mx-auto mb-3 p-0'><span className='text-primary'>.</span> We provide <span className='text-primary'>Creative Services</span></h1>
                        <p className='mx-auto mt-4' style={{maxWidth: '700px'}}>We deliver innovative, customized solutions designed to meet your unique needs with precision and excellence. Below, you’ll discover a range of services we proudly provide to help you achieve your goals.</p>
                    </div>
                </div>
    
                <div className="row align-items-center justify-content-center justify-content-lg-between g-4 mt-5">
                    {servicecolumndata.map((element, index) => {
                        return <ServiceColumn data={element} key={index} />
                    })}
                </div>


            </div>
        </section>
  )
}

export default ServicesOverviewSection
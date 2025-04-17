import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import './AboutSection.css'
import Counter from '../Counter/Counter';
import { counter_homes, counter_buildings, counter_hospitals, counter_states } from '../../assets/images';
import SectionHeader from '../SectionHeader/SectionHeader';

const AboutSection = () => {
  return (
    <section className="about mb-5" id="about">
        <img src="https://zolar.wpengine.com/wp-content/uploads/2025/02/zolar-h2-filler-img.jpg" alt="" className='z-n1 position-absolute top-0 start-0 w-100 h-100 object-fit-cover' style={{filter: 'brightness(30%)'}} />
        {/* <div className='position-absolute z-1 top-0 start-0 w-100 h-100' style={{backgroundColor: '#000', opacity: 0.5}}></div> */}
        <div className="container position-relative z-2 text-white py-5">
            <SectionHeader 
                subheading={'About'} 
                heading={'Empowering Your Future with Cutting-Edge Solutions'} 
                text={'Welcome to Figap! We specialize in providing top-notch satellite cable installation, solar energy solutions, advanced security systems, and expert electrical wiring services. Under the leadership of Mr. Ajiroba Feyisayo, our company is dedicated to delivering innovative, sustainable, and reliable solutions that meet the diverse needs of our clients.'} 
                showButton={false}
                color={'#fff'}
            />

            <div className="row mt-5 p-5 justify-content-between">
                <Counter text='Installations' target='100'  imgSrc={counter_states} alternate={false}/>
                <Counter text='Commercial Projects' target='18'  imgSrc={counter_hospitals} alternate={false}/>
                <Counter text='Happy Customers' target='154'  imgSrc={counter_buildings} alternate={false}/>
                <Counter text='Industry Experience' target='15'  imgSrc={counter_homes} alternate={false}/>
            </div>

            <div className='text-center'>
                <Link to="/services" className='button-primary-learn-more btn border border-primary border-2 d-inline-flex align-items-center btn-padding fw-medium text-white'>
                    Learn More
                    <FontAwesomeIcon icon={faArrowUpLong} className='icon ms-3' />
                </Link>
            </div>
            
        </div>
    </section>
  )
}

export default AboutSection
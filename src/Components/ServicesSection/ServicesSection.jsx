import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './ServicesSection.css';
// import { logo } from '../../assets/images';
import ServiceColumn from '../ServiceColumn/ServiceColumn';
import { servicecolumndata } from '../../Constants';
import SectionHeader from '../SectionHeader/SectionHeader';

const ServicesSection = () => {
  useEffect(() => {
    const columns = document.querySelectorAll('.services-columns');

    if (columns.length > 0) {
      columns[0].classList.add('active');
    }

    columns.forEach(column => {
      column.addEventListener('mouseenter', () => {
        columns.forEach(c => c.classList.remove('active'));
        column.classList.add('active');
      });
    });

    return () => {
      columns.forEach(column => {
        column.removeEventListener('mouseenter', () => {});
      });
    };
  }, []);

  return (
    <section className="services" id="services">
      <div className="container-fluid px-4 text-black">

        <SectionHeader 
            subheading={'Services'} 
            heading={'Smart Power Solutions'} 
            text={'Figap offers expert solutions in solar energy installation, advanced security systems, and professional electrical wiring. Our services are designed to enhance sustainability, security, and efficiency for homes and businesses alike.'} 
            showButton={true}
            color={'#000'}
        />

        <div className="row align-items-center justify-content-center justify-content-lg-between g-4 mt-5">
          {servicecolumndata.slice(0, 3).map((element, index) => {
            return <ServiceColumn data={element} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection;

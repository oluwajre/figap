import React, { useEffect } from 'react';
import './PartnerSection.css';
import { felicitysolar_logo, restarsolar_logo, sms_logo } from '../../assets/images';

const PartnerSection = ({ text }) => {

  useEffect(() => {
    const logosContainer = document.querySelector('.logos');

    if (logosContainer) {
        const logosSlide = document.querySelector('.logos-slide');

        if (logosSlide) {
            // Clone the children of logosSlide twice and append them
            const children = Array.from(logosSlide.children);

            // Create two cloned containers
            const clonedLogosSlide1 = logosSlide.cloneNode(false); // First empty clone
            const clonedLogosSlide2 = logosSlide.cloneNode(false); // Second empty clone

            children.forEach((child) => {
                const cloneChild1 = child.cloneNode(true); // Clone for first slide
                const cloneChild2 = child.cloneNode(true); // Clone for second slide

                clonedLogosSlide1.appendChild(cloneChild1); // Append to first clone
                clonedLogosSlide2.appendChild(cloneChild2); // Append to second clone
            });

            // Add the animation class to all slides
            logosSlide.classList.add('infiniteslider');
            clonedLogosSlide1.classList.add('infiniteslider');
            clonedLogosSlide2.classList.add('infiniteslider');

            // Append both cloned logos slides to the logosContainer
            logosContainer.appendChild(clonedLogosSlide1);
            logosContainer.appendChild(clonedLogosSlide2);
        }
    }
}, []);






  return (
    <section className={`partners ${text? 'mt-5': null}`} id="partners" style={text? {backgroundColor: '#e9ecef'}: {backgroundColor: 'inherit'}}>
      <div className={`container ${text? 'py-5': 'pb-5'}`}>
        {text? (
          <div className="row text-center align-items-center pt-5">
            <div className="col-12">
              <p className='text-uppercase section-title-p text-primary'>Some of our Partners</p>
            </div>
            <div className="col-12">
              <h1 className='display-6 fw-bold mb-4'><span className='text-primary'>.</span> TriniTwin <span className='text-primary'>Brands</span></h1>
            </div>
        </div>
        ): null}
        

        <div className="mt-3 logos">

          <div className="logos-slide">
            <img src={felicitysolar_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
            <img src={restarsolar_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
            <img src={sms_logo} alt="felicity" className='img-fluid brand-image mx-4'/>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PartnerSection
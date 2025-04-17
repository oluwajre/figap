import React from 'react';
import './TestimonialSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialSection = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container appear">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

          <div className="heading-section">
            <div className="colored-icon-box">
              <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
            </div>

            <div className='d-flex flex-column justify-content-between ms-5 me-4'>
              <p className='text-uppercase section-title-p text-primary mb-0'>Testimonials</p>
              <div className='display-6 fw-bold' style={{maxWidth: '400px'}}><span className='text-primary'>.</span> People <span className='text-primary'>Says</span></div>
            </div>

            <div className="carousel-indicators position-relative m-0 ms-md-auto mt-4 mt-sm-0">
              <div className="slick-dot-border me-5 text-center">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="slick-dot active" aria-current="true" aria-label="Slide 1"></button>
              </div>

              <div className="slick-dot-border me-5 text-center">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="slick-dot next-carousel-click" aria-label="Slide 2"></button>
              </div>

              <div className="slick-dot-border text-center">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="slick-dot" aria-label="Slide 3"></button>
              </div>          
            </div>
          </div>
          
          <div className="carousel-inner testimonial-inner mt-4 ms-auto" style={{maxWidth: '1000px'}}>

            <div className="carousel-item active">
              <div>
                <p className='lead fw-normal'>TriniTwin Energy transformed our business with their solar installation. We’ve seen a significant reduction in energy costs and are proud to use sustainable energy. Their team was professional and efficient throughout the entire process.</p>
                {/* <p className="lead fw-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor quod, blanditiis cum architecto vel velit aliquam facere nobis pariatur et fugiat quos inventore laborum porro quam autem eius assumenda hic? Minus optio inventore laudantium laborum fugit perspiciatis saepe voluptatum!</p> */}
                <p className='fw-bold mt-4'> <span className='align-middle quote-line bg-primary me-1 me-sm-3'/> <span className='align-middle'>Micheal A.</span> <span className='align-middle text-primary ms-1'>Business Owner</span></p>
              </div>
            </div>

            <div className="carousel-item">
              <div>
                <p className='lead fw-normal'>The CCTV system installed by TriniTwin Energy has provided us with peace of mind knowing our property is secure 24/7. The team was knowledgeable, and the installation was seamless.</p>
                {/* <p className="lead fw-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor quod, blanditiis cum architecto vel velit aliquam facere nobis pariatur et fugiat quos inventore laborum porro quam autem eius assumenda hic? Minus optio inventore laudantium laborum fugit perspiciatis saepe voluptatum!</p> */}
                <p className='fw-bold mt-4'> <span className='align-middle quote-line bg-primary me-1 me-sm-3'/> <span className='align-middle'>Sarah O.</span> <span className='align-middle text-primary ms-1'>Homeowner</span></p>
              </div>
            </div>

            <div className="carousel-item">
              <div>
                <p className='lead fw-normal'>TriniTwin Energy’s electrical wiring services were top-notch. They ensured everything was done safely and efficiently, and the work complied with all industry standards. Highly recommend them for both residential and commercial projects!</p>
                {/* <p className="lead fw-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor quod, blanditiis cum architecto vel velit aliquam facere nobis pariatur et fugiat quos inventore laborum porro quam autem eius assumenda hic? Minus optio inventore laudantium laborum fugit perspiciatis saepe voluptatum!</p> */}
                <p className='fw-bold mt-4'> <span className='align-middle quote-line bg-primary me-1 me-sm-3'/> <span className='align-middle'>David T.</span> <span className='align-middle text-primary ms-1'>Property Manager</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
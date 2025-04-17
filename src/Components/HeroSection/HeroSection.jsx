import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { banner_1, banner_2, banner_3 } from '../../assets/images';
import { contactdata } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faArrowUpLong} from '@fortawesome/free-solid-svg-icons';
import VideoOverlay from '../VideoOverlay/VideoOverlay';
import Navbar from '../Navbar/Navbar';


const HeroSection = () => {
    const [slideNumber, setSlideNumber] = useState(1);
    const [closeVideo, setCloseVideo] = useState(true);

    const HandleVideo = () => {
        setCloseVideo(!closeVideo);
    }

    useEffect(() => {
        const carouselElement = document.getElementById('carouselExampleCaptions');
    
        const handleSlideChange = (event) => {
          // Update the slideNumber based on the active slide index
          const newSlideNumber = parseInt(event.to, 10) + 1; // event.to is 0-based
          setSlideNumber(newSlideNumber);
        };

        carouselElement.addEventListener('slid.bs.carousel', handleSlideChange);
    
        return () => {
          carouselElement.removeEventListener('slid.bs.carousel', handleSlideChange);
        };
      }, []);

  return (
    <section className="hero" id="hero">
        <div className="contact-box d-flex align-items-center justify-content-between py-3 px-3 z-2 text-black">
            <div className='d-none d-xl-inline-flex'>{contactdata.address}</div>
            <div className='position-relative'><a href={`tel:${contactdata.phone_1}`}>{contactdata.phone_1}</a></div>
            <div className='position-relative d-none d-sm-inline-flex'><a href={`mailto:${contactdata.email}`}>{contactdata.email}</a></div>
            <div className="contact-box__socials">
                <span className='fw-semibold me-3'>We are Social:</span>
                <a href={contactdata.facebook} className='me-4'><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
                <a href={contactdata.instagram}><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            </div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
            <Navbar page='home' />
            <div className="carousel-indicators mx-0 mb-3 d-flex align-items-start justify-content-end gap-3 gap-md-0">

                {/* <div className="position-relative video-container shadow-lg order-2 order-md-1">
                    <FontAwesomeIcon icon={faPlay} className='video-icon' onClick={HandleVideo} />
                </div> */}

                <div className='d-flex align-items-center mx-3 order-1 order-md-2'>
                    <div className='slick-dot-border me-2 text-center'>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="slick-dot active" aria-current="true" aria-label="Slide 1" onClick={()=> setSlideNumber(1)}></button>
                    </div>

                    <div className="slick-dot-border me-2 text-center">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='slick-dot next-carousel-click' aria-label="Slide 2" onClick={()=> setSlideNumber(2)}></button>
                    </div>
                    
                    <div className="slick-dot-border me-2 text-center">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='slick-dot' aria-label="Slide 3" onClick={()=> setSlideNumber(3)}></button>
                    </div>

                    <div className="indicator-divider mx-4" />

                    <div className="carousel-number text-light align-self-center">{slideNumber}/3</div>
                </div>
                
            </div>


            <div className="carousel-inner">

                <div className="carousel-item active banner-item">
                    <img src={banner_1} alt="banner 1" />
                    <div className='container-sm banner-caption text-light text-center scale-up-center'>
                        <h1 className='display-1 banner-title'>Solar <span className='liner align-middle' /> Systems <FontAwesomeIcon icon={faPlay} className='inline-video-icon' onClick={HandleVideo} /></h1>
                    </div>
                </div>

                <div className="carousel-item banner-item">
                    <img src={banner_2} alt="banner 2" className='z-n1' />
                    <div className="image-overlay z-1" />
                    <div className='container-sm banner-caption text-light text-center scale-down-center z-3'>
                        <h1 className='display-1 banner-sub-title'>Modern Technology in Sun Energy <FontAwesomeIcon icon={faPlay} className='inline-video-icon' onClick={HandleVideo} /></h1>
                        <p className='lead fw-normal mx-auto' style={{maxWidth: '550px'}}>Advancements in innovation have transformed renewable energy, offering smarter and more efficient solutions for a sustainable future.</p>
                        <Link to="/services/service_detail/solar_installation" className='button-primary-learn-more btn border border-primary border-2 d-inline-flex align-items-center btn-padding fw-medium'>
                            Learn More
                            <FontAwesomeIcon icon={faArrowUpLong} className='icon ms-3' />
                        </Link>
                    </div>
                </div>

                <div className="carousel-item banner-item">
                    <img src={banner_3} alt="banner 3" className='z-n1' />
                    <div className="image-overlay z-1" />
                    <div className='container-sm banner-caption text-light text-left slide-right z-3' id='banner-caption-left'>
                        <h1 className='display-1 banner-sub-title' style={{maxWidth: '700px'}}>Business Hand in Hand with New Technology <FontAwesomeIcon icon={faPlay} className='inline-video-icon' onClick={HandleVideo} /></h1>
                        <p className='lead fw-normal' style={{maxWidth: '550px'}}>Leveraging cutting-edge technology, we empower businesses with sustainable energy solutions and advanced security systems to drive progress and efficiency.</p>
                        <Link to="/about" className='button-primary-learn-more btn border border-primary border-2 d-inline-flex align-items-center btn-padding fw-medium'>
                            Learn More
                            <FontAwesomeIcon icon={faArrowUpLong} className='icon ms-3' />
                        </Link>
                    </div>
                </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
        {
            closeVideo?
            '':
            <VideoOverlay src={contactdata.youtube_hero} HandleVideo={HandleVideo}/>
        }
    </section>
  )
}

export default HeroSection
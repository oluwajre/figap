import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import { banner_1, banner_2, banner_3 } from '../../assets/images';
import { contactdata } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
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
        <div className="contact-box d-flex align-items-center justify-content-between py-1 px-sm-3 px-4 z-2">
            <div className='d-none d-xl-inline-flex gap-1 align-items-center text-black'>
                <span className='text-inherit'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor' style={{width: '1.1em'}}>
                        <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
                    </svg>
                </span>
                <span>{contactdata.address}</span>  
            </div>
            <div className='d-inline-flex gap-1 align-items-center'>
                <span className='text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor' style={{width: '1.1em'}}>
                        <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
                    </svg>
                </span>
                <span><a href={`tel:${contactdata.phone_1}`}>{contactdata.phone_1}</a></span>
            </div>
            <div className='d-none d-sm-inline-flex align-items-center gap-1'>
                <span className='text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='currentColor' style={{width: '1.1em'}}>
                        <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                    </svg>
                </span>
                <a href={`mailto:${contactdata.email}`}>{contactdata.email}</a>
            </div>
            <div className="contact-box__socials">
                <span className='fw-semibold me-2'>We are Social:</span>
                <a href={contactdata.facebook} className='me-3'><FontAwesomeIcon icon={faFacebookF} className='icon' title='Facebook'/></a>
                <a href={contactdata.instagram}><FontAwesomeIcon icon={faInstagram} className='icon me-3' title='Instagram'/></a>
                <a href={contactdata.tiktok}><FontAwesomeIcon icon={faTiktok} className='icon' title='Tiktok'/></a>
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
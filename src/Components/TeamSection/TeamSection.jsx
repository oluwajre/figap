import React, { useState } from 'react';
import './TeamSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { contactdata, teamdata } from '../../Constants';

const TeamSection = () => {
    const [textCollapse, setTextCollapse] = useState(true);

    const handleCollapse = () => {
        setTextCollapse(!textCollapse);
    }

  return (
    <section className="team my-5" id="team">
        <div className="container py-5">
            <div className="row text-center appear">
                <p className='text-uppercase section-title-p text-primary m-0 mb-3 p-0'>OUR FOUNDER</p>
                <h1 className='display-6 fw-bold m-0 mb-3 p-0'><span className='text-primary'>.</span> Meet the <span className='text-primary'>CEO</span></h1>
                <p className='mx-auto lead fw-bold' style={{maxWidth: '650px'}}>Anthony Abereoje: Innovator, Entrepreneur, and Visionary Leader</p>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-md-6 col-lg-4 appear">
                    <div id="carouselExample" className="ceo-section position-relative carousel slide" data-bs-ride="carousel" ride="carousel">
                        <div className="carousel-inner" style={{height: '100%', cursor: 'pointer'}}>
                            <div className="carousel-item active" style={{height: '100%'}}>
                            <img src={teamdata.owner.imgSrc1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" style={{height: '100%'}}> 
                            <img src={teamdata.owner.imgSrc2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item" style={{height: '100%'}}>
                            <img src={teamdata.owner.imgSrc3} className="d-block w-100" alt="..." />
                            </div>
                        </div>

                        <div className="image-overlay position-absolute top-0 start-0">
                            <ul className='slide-right-small'>
                                <li><a href={contactdata.linkedin}><FontAwesomeIcon icon={faLinkedinIn} className='icon' /></a></li>
                                <li><a href={contactdata.facebook}><FontAwesomeIcon icon={faFacebookF} className='icon' /></a></li>
                                <li><a href={contactdata.whatsapp}><FontAwesomeIcon icon={faWhatsapp} className='icon' /></a></li>
                                <li><a href={contactdata.instagram}><FontAwesomeIcon icon={faInstagram} className='icon' /></a></li>
                            </ul>
                        </div>

                        <div className="text-overlay-container">
                                <div className='text-overlay px-4 pt-4 pb-2'>
                                    <div className='d-flex align-items-start justify-content-center flex-column'>
                                        <h4 className='my-0'>{teamdata.owner.name}</h4>
                                        <p className='m-0 mt-1 py-0'>{teamdata.owner.title}</p>
                                    </div>
                                    <button type="button" className='btn btn-ouline-primary ps-0 next-carousel-click' data-bs-target="#carouselExample" data-bs-slide="next">
                                        <FontAwesomeIcon icon={faArrowRightLong} className='icon'/>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-8 appear">
                    <p className='lead fw-normal mb-3'><span className="writer-icon d-inline-block me-1"><FontAwesomeIcon icon={faQuoteLeft} className='icon' /></span>Anthony Abereoje is a distinguished entrepreneur and the founder of Trinitwin, a dynamic company dedicated to providing cutting-edge solar installations, CCTV solutions, and electrical wiring services. With a career defined by a passion for innovation and sustainable energy solutions, Mr. Abereoje has positioned Trinitwin as a trusted brand in the industry.</p>
                    {textCollapse? (
                        <a type="button" className='fw-bold explore-more' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handleCollapse}>
                            See more<span className='align-middle ms-2' />
                        </a>
                    ): null}
                    <div className="collapse" id="collapseExample">
                        <p className='lead fw-normal mb-3'>Born and raised in Nigeria, Anthony has always been driven by a deep commitment to solving everyday energy challenges. His academic and professional journey has been characterized by an unyielding determination to bring affordable and sustainable technology to homes and businesses.</p>
                        <p className='lead fw-normal'>Under his leadership, TriniTwin has collaborated with notable brands such as Felicity Solar, Rester Solar, Siwina, and Sun Mate Solar (SMS). These partnerships underscore his dedication to maintaining high standards and delivering quality services.</p>
                        {textCollapse? null: (
                            <a type="button" className='fw-bold explore-more' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={handleCollapse}>
                                See less<span className='align-middle ms-2' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default TeamSection
import React from 'react';
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = ({ bannerInformation }) => {
  return (
    <section className="hero-banner" id="hero-banner">
        <img src={bannerInformation.imageSrc} alt="page-banner" className='hero-banner-image z-n1'/>
        <div className="image-overlay z-1" />
        <div className="container position-relative z-2 text-white pt-5">
            <p className='text-uppercase section-title-p pt-5'>{bannerInformation.subTitle}</p>
            <h1 className="display-1 banner-sub-title m-0 p-0">{bannerInformation.title}</h1>
            <nav aria-label="breadcrumb" className='mt-3'>
                <ol className="breadcrumb text-white">
                    <li className="breadcrumb-item"><Link to={bannerInformation.previousLink.path}>{bannerInformation.previousLink.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{bannerInformation.currentLink}</li>
                </ol>
            </nav>
        </div>
    </section>
  )
}

export default HeroBanner
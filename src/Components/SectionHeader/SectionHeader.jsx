import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

const SectionHeader = ({ subheading, heading, text, showButton, color }) => {
  return (
    <div className="row align-items-center mb-3">
          <div className="col-12 text-center appear">
            <div className='d-flex align-items-center justify-content-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 12" style={{ enableBackground: 'new 0 0 42 12', width: '35px', fill: color}} xmlSpace="preserve">
                    <g>
                        <g>
    <path d="M36.9,1.1l-2,2v1.9l3.6-3.6l-0.6-1.3L36.9,1.1z" />
    <path d="M39.9,3.4H37l-1.3,1.3h5.1l0.5-1.3H39.9z" />
    <path d="M40.5,7.2l-2-2h-1.9l3.6,3.6l1.3-0.6L40.5,7.2z" />
    <path d="M38.2,10.3V7.4l-1.3-1.3v5.1l1.3,0.5V10.3z" />
    <path d="M34.4,10.9l2-2V6.9l-3.6,3.6l0.6,1.3L34.4,10.9z" />
    <path d="M31.3,8.6h2.9l1.3-1.3h-5.1l-0.5,1.3H31.3z" />
    <path d="M30.8,4.8l2,2h1.9l-3.6-3.6l-1.3,0.6L30.8,4.8z" />
    <path d="M33.1,1.7v2.9l1.3,1.3V0.8l-1.3-0.5V1.7z" />
                        </g>
                        <g><rect x="0.5" y="10.9" width="29.3" height="1" /></g>
                    </g>
                </svg>
                <p className='section-title-p mb-0'>{subheading}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 12" style={{ enableBackground: 'new 0 0 42 12', width: '35px', transform: 'ScaleX(-1)', fill: color}} xmlSpace="preserve">
                    <g>
                        <g>
    <path d="M36.9,1.1l-2,2v1.9l3.6-3.6l-0.6-1.3L36.9,1.1z" />
    <path d="M39.9,3.4H37l-1.3,1.3h5.1l0.5-1.3H39.9z" />
    <path d="M40.5,7.2l-2-2h-1.9l3.6,3.6l1.3-0.6L40.5,7.2z" />
    <path d="M38.2,10.3V7.4l-1.3-1.3v5.1l1.3,0.5V10.3z" />
    <path d="M34.4,10.9l2-2V6.9l-3.6,3.6l0.6,1.3L34.4,10.9z" />
    <path d="M31.3,8.6h2.9l1.3-1.3h-5.1l-0.5,1.3H31.3z" />
    <path d="M30.8,4.8l2,2h1.9l-3.6-3.6l-1.3,0.6L30.8,4.8z" />
    <path d="M33.1,1.7v2.9l1.3,1.3V0.8l-1.3-0.5V1.7z" />
                        </g>
                        <g><rect x="0.5" y="10.9" width="29.3" height="1" /></g>
                    </g>
                </svg>
            </div>
            <h1 className='display-6 fw-bold my-3'>{heading}</h1>
            <p className='mb-1 mx-auto' style={{maxWidth: '700px'}}>{text}</p>
            {
                showButton && (
                    <Link to="/services" className='button-primary-learn-more btn border border-primary border-2 d-inline-flex align-items-center btn-padding fw-medium text-white'>
                        Learn More
                        <FontAwesomeIcon icon={faArrowUpLong} className='icon ms-3' />
                    </Link>
                )
            }
            
          </div>
        </div>
  )
}

export default SectionHeader
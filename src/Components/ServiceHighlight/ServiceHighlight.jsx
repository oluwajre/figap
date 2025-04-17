import React from 'react';
import './ServiceHighlight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const ServiceHighlight = ({ identifier, data, collapseColumn }) => {
  return (
    <div className="col-12 service-highlight-column">
        <button
            type="button"
            className="btn service-highlight-btn text-start py-5 appear"
            data-bs-toggle="collapse"
            data-bs-target={`#${data.id}`}
            aria-expanded={identifier === data.id}
            aria-controls={data.id}
            onClick={() => collapseColumn(data.id)}
        >
            <div className="align-self-start d-flex align-items-start m-0">
                <h4 className="fw-normal d-inline-block m-0 mt-1">{data.number}</h4>
                <h2 className="fw-normal d-inline-block m-0 ms-3" style={{ maxWidth: '350px' }}>
                    {data.highlight_title}
                </h2>
            </div>

            <div className="align-self-start d-none d-md-inline-flex m-0">
                <p style={{ maxWidth: '450px' }} className="m-0 mt-1">
                    {data.highlight_subTitle}
                </p>
            </div>

            <FontAwesomeIcon icon={faArrowDown} className="direction-icon rounded-pill align-self-center ms-3" />
        </button>

        <div
            className={`collapse ms-2 ${identifier === data.id ? 'slide-down-small show' : ''}`}
            id={data.id}
        >
            <div>
                <p className="d-block d-md-none appear d-flex align-items-start">
                    <FontAwesomeIcon icon={faPlus} className='plus-icon me-2 mt-1' />
                    <span>{data.highlight_subTitle}</span>
                </p>
                {data.content.map((text, index) => {
                    return (
                        <p className='appear d-flex align-items-start' key={index}>
                            <FontAwesomeIcon icon={faPlus} className='plus-icon me-2 mt-1' />
                            <span>{text}</span>
                        </p>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default ServiceHighlight
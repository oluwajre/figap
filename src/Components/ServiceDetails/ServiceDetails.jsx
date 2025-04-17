import React, { useState } from 'react';
import './ServiceDetails.css';
import ServiceHighlight from '../ServiceHighlight/ServiceHighlight';

const ServiceDetails = ({ data }) => {
    const [identifier, setIdentifier] = useState('collapseExample');

    const collapseColumn = (id) => {
        setIdentifier((prev) => (prev === id ? '' : id));
    };

    return (
        <section className="service-details-section">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-10 col-sm-12 mb-2 mt-4">
                        <h1 className="display-6 fw-bold">
                            <span>{data.title_main}</span>
                            <span className='text-primary'>{data.title_primary}</span>
                        </h1>
                    </div>
                    <div className="col-12">
                        <p className="lead fw-normal appear">
                            {data.title_content}
                        </p>
                    </div>
                </div>

                <div className="row">
                    {data.service_highlights.map((highlight, index) => {
                        return <ServiceHighlight identifier={identifier} data={highlight} key={index} collapseColumn={collapseColumn} />
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;

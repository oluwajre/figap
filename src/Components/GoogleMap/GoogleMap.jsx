import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { contactdata } from '../../Constants';

const AnyReactComponent = ({ text }) => (
    <a href={contactdata.google_map_link} style={{textDecoration: 'none'}} target='blank'>
        <div className="map-marker">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            {text}
        </div>
    </a>
);

const GoogleMap = () => {

    const defaultProps = {
        center: {
            lat: 6.4340085,
            lng: 5.5979932,
        },
        zoom: 11,
    };


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                    text={contactdata.company_name}
                />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;

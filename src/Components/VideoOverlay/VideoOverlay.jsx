import React, { useState, useEffect } from 'react';
import './VideoOverlay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

const VideoOverlay = ({ src, HandleVideo }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTimeout = setTimeout(() => setIsLoading(false), 2500);

        return () => clearTimeout(loadTimeout);
    }, []);

    return (
        <div className="videoOverlay d-flex align-items-center justify-content-center position-fixed top-0 vw-100 vh-100">
            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <iframe
                    width="100%"
                    height="315"
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video shadow"
                    loading='lazy'
                ></iframe>
            )}

            <button
                className="btn btn-primary position-absolute top-0 end-0 me-3 mt-3 me-sm-5"
                type="button"
                onClick={HandleVideo}
            >
                <FontAwesomeIcon icon={faXmark} className="icon" />
            </button>
        </div>
    );
};

export default VideoOverlay
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
  return (
    <>
        {showButton && (
            <div
                className="z-3 position-fixed bottom-0 end-0 m-3 bg-primary rounded-circle text-white d-inline-flex justify-content-center align-items-center"
                style={{ cursor: 'pointer', width: '40px', height: '40px' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        )}
    </>
  )
}

export default ScrollToTop
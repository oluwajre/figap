import React, { useState, useEffect, useRef } from 'react';
import './Counter.css';

const Counter = ({ text, target, imgSrc, offset = 300, alternate }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null); // Ref to track the counter element's position

  // Effect to handle counting up to the target value
  useEffect(() => {
    const handleScroll = () => {
      const element = counterRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top - window.innerHeight <= offset;

      if (isVisible && count < target) {
        // Start counting when the element is close to being in view
        const interval = setInterval(() => {
          setCount(prevCount => {
            if (prevCount < target) {
              return prevCount + 1;
            } else {
              clearInterval(interval); // Clear interval when target is reached
              return prevCount;
            }
          });
        }, 1000); // Adjust the speed of counting

        // Cleanup function to clear the interval if the component unmounts
        return () => clearInterval(interval);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [count, target, offset]);

  return (
    <div ref={counterRef} className='col-12 col-sm-auto my-3 my-sm-0 text-center d-flex flex-column align-items-center justify-content-evenly appear'>
      {/* <img src={imgSrc} className='img-fluid mx-auto' style={{width: '70px'}} /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={{width: '70px', fill: '#fff', margin: '0 auto'}}>
        <g>
          <g><path d="M73.2,96c-0.7,0-1.3-0.6-1.3-1.3V83.8c0-0.4,0.1-0.7,0.4-0.9l16.4-16.4c0.1-0.1,2.3-2.5,2.3-7.3V31.9   c0-0.7-0.2-4.1-4.1-4.1c-3.9,0-4.1,3.5-4.1,4.1v19.8c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3V31.9c0-2.3,1.4-6.8,6.8-6.8   c5.4,0,6.8,4.4,6.8,6.8v27.3c0,5.9-3,9-3.1,9.1l-16,16v10.4C74.5,95.4,73.9,96,73.2,96z"></path></g>
          <g><path d="M54.1,96.7c-0.7,0-1.3-0.6-1.3-1.3V70.1c0-0.3,0.1-0.6,0.3-0.8l13.7-16.4c0,0,2.3-3.6,5.6-4.1c1.5-0.3,3.1,0.2,4.4,1.2   c1.8,1.4,2.6,3.1,2.5,5c-0.1,1.6-0.8,3.2-2.3,5.1l-8.2,10.9c-0.4,0.6-1.3,0.7-1.9,0.3c-0.6-0.4-0.7-1.3-0.3-1.9l8.2-10.9   c1.1-1.4,1.7-2.6,1.7-3.6c0-0.6-0.1-1.6-1.5-2.7c-0.8-0.6-1.5-0.8-2.3-0.7c-2.1,0.4-3.9,3.1-3.9,3.1L55.4,70.6v24.8   C55.4,96.1,54.8,96.7,54.1,96.7z"></path></g>
          <g><path d="M26.8,96c-0.7,0-1.3-0.6-1.3-1.3V84.3l-16-16c-0.1-0.1-3.1-3.2-3.1-9.1V31.9c0-2.3,1.4-6.8,6.8-6.8s6.8,4.4,6.8,6.8v19.8   c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3V31.9c0-0.7-0.2-4.1-4.1-4.1S9,31.2,9,31.9v27.3c0,4.8,2.3,7.2,2.3,7.3l16.4,16.4   c0.2,0.2,0.4,0.6,0.4,0.9v10.9C28.1,95.4,27.5,96,26.8,96z"></path></g>
          <g><path d="M45.9,96.7c-0.7,0-1.3-0.6-1.3-1.3V70.6l-13.3-16c-0.6-0.9-2.2-2.9-4-3.2c-0.8-0.1-1.6,0.1-2.3,0.7   c-1.5,1.2-2.5,2.8,0.2,6.3l8.2,10.9c0.4,0.6,0.3,1.4-0.3,1.9c-0.6,0.4-1.4,0.3-1.9-0.3L23,60c-3.9-5.1-2-8.2,0.2-10   c1.4-1.1,2.9-1.5,4.4-1.2c3.3,0.6,5.6,4.1,5.7,4.3l13.6,16.2c0.2,0.2,0.3,0.5,0.3,0.8v25.3C47.2,96.1,46.6,96.7,45.9,96.7z"></path></g>
          <g><path d="M45.9,60.5c-0.2,0-0.3,0-0.5-0.1c-0.6-0.2-0.9-0.8-0.8-1.4l2.5-25.3l-14.4,4.8c-0.5,0.2-1,0-1.4-0.4   c-0.4-0.4-0.5-0.9-0.3-1.4L44.7,4.1c0.3-0.7,1.1-1,1.7-0.7c0.7,0.3,1,1.1,0.7,1.7L34.6,35.2l13.6-4.5c0.4-0.1,0.9-0.1,1.2,0.2   c0.4,0.3,0.5,0.7,0.5,1.2l-2.3,22.6l13.5-18.1c0.4-0.6,1.3-0.7,1.9-0.3c0.6,0.4,0.7,1.3,0.3,1.9L47,60   C46.7,60.3,46.3,60.5,45.9,60.5z"></path></g>
          <g><path d="M65,33.2c-0.3,0-0.6-0.1-0.8-0.3c-0.6-0.4-0.7-1.3-0.3-1.9l6.3-8.4l-16,2.3c-0.5,0.1-0.9-0.1-1.2-0.5   c-0.3-0.4-0.4-0.9-0.2-1.3l7.4-17.3h-8.9c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3h10.9c0.4,0,0.9,0.2,1.1,0.6   c0.2,0.4,0.3,0.8,0.1,1.2l-7.3,17L73,19.7c0.5-0.1,1.1,0.2,1.3,0.6c0.3,0.5,0.2,1-0.1,1.5l-8.2,10.9C65.8,33,65.4,33.2,65,33.2z"></path></g>
        </g>
      </svg>
      <h1 className={`display-1 banner-title m-0 p-0 ${alternate? 'text-dark': 'text-white'}`}>{count}<span style={{fontSize: '0.6em'}}>+</span></h1>
      <h5 className={`fw-bold text-uppercase m-0 p-0 align-self-center ${alternate ? 'text-primary': 'text-light'}`} style={{maxWidth: '170px'}}>{text}</h5>
    </div>
  );
};

export default Counter;

import React, { useState } from 'react';
import './VideoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
import VideoOverlay from '../VideoOverlay/VideoOverlay';

const VideoSection = ({imageSrc, youtubeSrc}) => {
    const [closeVideo, setCloseVideo] = useState(true);
    
    const HandleVideo = () => {
        setCloseVideo(!closeVideo);
    }

  return (
    <section className="video-section">
        <div className="container position-relative appear">
            <img src={imageSrc} alt="" className='img-fluid' />
            <div>
                <FontAwesomeIcon icon={faPlay} className='video-icon' onClick={HandleVideo} />
                <p className='text-white p-0 m-0 lead fw-bold video-text'>Video Presentation</p>
            </div>
        </div>

        {
            closeVideo?
            '':
            <VideoOverlay src={youtubeSrc} HandleVideo={HandleVideo}/>
        }
    </section>
  )
}

export default VideoSection
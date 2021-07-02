import React, {useRef, useEffect}  from 'react';
import PropTypes from 'prop-types';
import {VIDEO_DELAY} from '../../const';

function VideoPlayer(props) {
  const {previewImage, previewVideo, isActive} = props;

  const videoRef = useRef(null);

  useEffect(() => {
    let timeout;
    if(isActive) {
      timeout = setTimeout(() => videoRef.current.play(), VIDEO_DELAY);
    } else {
      videoRef.current.pause();
    }

    return () => clearTimeout(timeout);
  }, [isActive]);
  return (
    <video muted className="small-film-card__image" poster={previewImage} ref={videoRef} >
      <source src={previewVideo} type="video/mp4"/>
    </video>
  );
}

VideoPlayer.propTypes = {
  previewVideo: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default VideoPlayer;

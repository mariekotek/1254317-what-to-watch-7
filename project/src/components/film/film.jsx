import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/videoplayer';


function Film(props) {
  const {id, name, previewImage, previewVideo, isActive, onMouseEnter, onMouseOut} = props;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      <div className="small-film-card__image">
        {isActive ?
          <VideoPlayer previewImage={previewImage} previewVideo={previewVideo} isActive={isActive} /> :
          <img src={previewImage} alt={name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

Film.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};

export default Film;

import React, {useState} from 'react';
import Film from '../film/film';
import propTypes from '../../common/types';

function FilmsList(props) {
  const {films} = props;
  const [hoveredFilm, setHoveredFilm] = useState( );
  return (
    <div className="catalog__films-list">
      {films.map((item) => (
        <Film
          key={item.id}
          id={item.id}
          name={item.name}
          previewImage={item.previewImage}
          previewVideo={item.previewVideo}
          videoLink={item.videoLink}
          isActive={item === hoveredFilm}
          onMouseEnter={() => setHoveredFilm(item)}
          onMouseOut={() => setHoveredFilm(null)}
        />
      ))}
    </div>
  );
}

FilmsList.propTypes = {
  films: propTypes.films,
};

export default FilmsList;

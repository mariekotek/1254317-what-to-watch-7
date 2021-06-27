import React, {useState} from 'react';
import Film from '../film/film';
import propTypes from '../../common/types';

function FilmsList(props) {
  const {films} = props;
  const [hoveredFilm, onHoveredFilm] = useState(null);

  return (
    <div className="catalog__films-list">
      {films.map((item) => (
        <Film
          key={item.id}
          id={item.id}
          name={item.name}
          previewImage={item.previewImage}
          previewVideo={item.previewVideo}
          isActive={item === hoveredFilm}
          onMouseOver={() => onHoveredFilm(item)}
          onMouseOut={() => onHoveredFilm(null)}
        />
      ))}
    </div>
  );
}

FilmsList.propTypes = {
  films: propTypes.films,
};

export default FilmsList;

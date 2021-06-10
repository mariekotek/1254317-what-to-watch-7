import React from 'react';
import PropTypes from 'prop-types';

function SmallFilmCard({film}) {
  const {title, filmPage, previewImg} = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={previewImg}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={filmPage}>{title}</a>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    filmPage: PropTypes.string.isRequired,
    previewImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallFilmCard;

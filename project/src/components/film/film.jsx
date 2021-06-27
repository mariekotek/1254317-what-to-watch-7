import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute} from '../../const.js';


function Film(props) {
  const {id, name, previewImage} = props;
  const history = useHistory();
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link" onClick={() => history.push(AppRoute.MY_LIST)}>{name}</Link>
      </h3>
    </article>
  );
}

Film.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default Film;

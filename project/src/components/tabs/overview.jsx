import React from 'react';
import propTypes from '../../common/types';

function Overview(props) {
  const {rating, director, starring, description} = props;

  return (
    <React.Fragment>
    <div class="film-rating">
      <div class="film-rating__score">{rating}</div>
      <p class="film-rating__meta">
        <span class="film-rating__level">Very good</span>
        <span class="film-rating__count">240 ratings</span>
      </p>
    </div>

  <div class="film-card__text">
    <p>{description}</p>
    <p class="film-card__director"><strong>Director: {director}</strong></p>

    <p class="film-card__starring"><strong>Starring: {starring}</strong></p>
  </div>

</React.Fragment>
      );
      }

      Details.propTypes = {
      films: propTypes.films.isRequired,
    };

      export default Overview;

import React from 'react';
import {AppRoute} from '../../const.js';
import propTypes from '../../common/types';
import Overview from './overview';
import Details from './details';
import Review from './review';
import reviews from '../../mocks/reviews';
import films from '../../mocks/films';

function FilmTabs({films}) {
  const currentTab = match.params.tab;
  let content;

  if (currentTab === 'overview') {
    content = <Overview films={films} />;
  } else if (currentTab === 'details') {
    content = <Details films={films} />;
  } else {
    content = <Review reviews={reviews}/>;
  }
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${currentTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${currentTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <Link className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import React from 'react';
import propTypes from '../../common/types';

function Review(props) {
  const {reviews}=props;

  return (
    <div className="film-card__reviews-col">
      {reviews.map((item) => (
        <div
          key={item.user.id}
          className="review"
        >
          <blockquote className="review__quote">
            <p className="review__text">
              {item.comment}
            </p>
            <footer className="review__details">
              <cite className="review__author">
                {item.user.name}
              </cite>
              <time
                className="review__date"
                dateTime="2016-12-24"
              >
                {item.date}
              </time>
            </footer>
          </blockquote>
          <div className="review__rating">
            {item.rating}
          </div>
        </div>
      ))}
    </div>);
}

Review.propTypes={
    reviews: propTypes.reviews,
};

export default Review;

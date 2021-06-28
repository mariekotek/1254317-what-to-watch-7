import React from 'react';
import {useState} from 'react';

function ReviewForm() {
  const [userData, setUserData] = useState({});
  const handleChange = (data) => {
    setUserData({
      ...userData,
      ...data,
    });
  };
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {(() => {
            const ratingInputs = [];
            for (let i = 0; i < 10; i++) {
              ratingInputs.push((
                <React.Fragment key={i}>
                  <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={`${i + 1}`} onChange={(event) => handleChange({rating: event.target.value})}/>
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </React.Fragment>
              ));
            }
            return ratingInputs;
          })()}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={(event) => handleChange({text: event.target.value})}>
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;

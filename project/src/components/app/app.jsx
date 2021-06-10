import React from 'react';
import Main from '../main-page-component/main-page-component';
import PropTypes from 'prop-types';

function App(props) {
  const {promoFilm, films} = props;
  return (
    <Main
      promoFilm = {promoFilm}
      films = {films}
    />
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      filmPage: PropTypes.string.isRequired,
      previewImg: PropTypes.string.isRequired,
    })).isRequired,
};

export default App;

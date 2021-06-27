import React from 'react';
import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import {SignIn} from '../sign-in/sign-in';
import {MyList} from '../my-list/my-list';
import Film from '../film/film';
import {AddReview} from '../add-reiew/add-review';
import {Player} from '../player/player';
import {Page404} from '../page-404/page-404';
import propTypes from '../../common/types';

function App(props) {
  const {promoFilm, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            promoFilm = {promoFilm}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.FILM_DETAILS}>
          <AddReview
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player
            films={films}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: propTypes.promoFilm,
  films: propTypes.films,
  // reviews: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   user: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }).isRequired,
  //   rating: PropTypes.number.isRequired,
  //   comment: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  // })).isRequired,
};

export default App;

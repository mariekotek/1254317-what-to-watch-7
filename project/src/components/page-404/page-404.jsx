import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

export function Page404() {
  return (
    <React.Fragment>
      <h1>404 Page not found</h1>
      <Link to={AppRoute.MAIN}>back to main page</Link>
    </React.Fragment>
  );
}

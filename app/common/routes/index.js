import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from 'containers/layouts/App';
import Main from 'containers/layouts/Main';

import HomePage from 'containers/pages/HomePage';

export const configureRoutes = ({ store }) => { // eslint-disable-line
  return (
    <Route component={App}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePage} />
      </Route>
      <Redirect from="*" to="/" />
    </Route>
  );
};

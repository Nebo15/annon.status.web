import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/layouts/App';
import Main from 'containers/layouts/Main';

export const configureRoutes = ({ store }) => { // eslint-disable-line
  return (
    <Route component={App}>
      <Route path="/" component={Main}>
        <IndexRoute component={() => <h1>Hello</h1>} />
      </Route>
    </Route>
  );
};

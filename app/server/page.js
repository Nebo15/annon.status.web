import Set from 'core-js/library/fn/set';
import arrayFrom from 'core-js/library/fn/array/from';
import CookieDough from 'cookie-dough';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import useRouterHistory from 'react-router/lib/useRouterHistory';
import RouterContext from 'react-router/lib/RouterContext';
import match from 'react-router/lib/match';
import Router from 'react-router/lib/Router';

import Helmet from 'react-helmet';

import { I18nextProvider } from 'react-i18next';
import { triggerHooks } from 'react-router-redial';
import { syncHistoryWithStore } from 'react-router-redux';

import Provider from 'react-redux/lib/components/Provider';

import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';

import { configureStore } from '../common/store';

import { configureRoutes } from '../common/routes';
import WithStylesContext from '../common/WithStylesContext';

export default () => (req, res, next) => {
  if (__DEV__) {
    return res.render('index', {
      html: null,
      reduxState: null,
      inlineCss: null,
      helmet: Helmet.rewind(),
    });
  }

  const memoryHistory = useRouterHistory(useQueries(createMemoryHistory))();
  const store = configureStore({
    history: memoryHistory,
    cookies: new CookieDough(req),
    i18n: req.i18n,
  });
  const history = syncHistoryWithStore(memoryHistory, store);
  const routes = configureRoutes({
    store,
  });
  const router = <Router history={history}>{ routes }</Router>;
  const historyLocation = history.createLocation(req.url);

  const { dispatch, getState } = store;

  return match({ routes: router, location: historyLocation }, (error, redirectLocation, renderProps) => { //eslint-disable-line
    if (redirectLocation) {
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      return res.status(500).send(error.message);
    } else if (renderProps == null) {
      return res.status(404).send('Not found');
    }

    const route = renderProps.routes[renderProps.routes.length - 1];
    const locals = {
      // Allow lifecycle hooks to dispatch Redux actions:
      dispatch,
      getState,
    };

    // Wait for async data fetching to complete, then render:
    return triggerHooks({
      renderProps,
      locals,
      hooks: ['fetch', 'server', 'done'],
    }).then(() => {
      const reduxState = escape(JSON.stringify(getState()));
      const css = new Set();
      /* eslint-disable no-underscore-dangle */
      let html;
      try {
        html = ReactDOMServer.renderToString(
          <I18nextProvider i18n={req.i18n}>
            <WithStylesContext
              onInsertCss={styles => styles._getCss && css.add(styles._getCss())}
            >
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            </WithStylesContext>
          </I18nextProvider>
        );
      } catch (e) {
        console.log('render error');
        console.error(e);
        html = null;
      }

      const helmet = Helmet.rewind();

      res.status(route.status || 200);
      res.render('index', {
        html,
        reduxState,
        helmet,
        inlineCss: arrayFrom(css).join(''),
      });
    })
    .catch(err => next(err));
  });
};

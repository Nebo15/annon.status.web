import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { denormalize } from 'normalizr';
import * as schemas from 'schemas';

import loading from 'redux/loading';

import apisStatuses from 'redux/apisStatuses';

const data = combineReducers({
  apisStatuses,
});

export default combineReducers({
  data,
  // external libraries
  form,
  routing,
  loading,
});

export const getLocation = state => state.routing.locationBeforeTransitions;
export const getForm = (state, formName) => state.form[formName];

export const getApisStatuses = (state, ids) => denormalize(ids, [schemas.apisStatus], state.data);
export const getAllApisStatuses = state =>
  getApisStatuses(state, Object.keys(state.data.apisStatuses));

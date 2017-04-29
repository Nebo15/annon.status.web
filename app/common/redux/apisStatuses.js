import { handleAction, combineActions } from 'redux-actions';
import { API_URL } from 'config';
import { normalize } from 'normalizr';
import { createUrl } from 'helpers/url';
import { apisStatus } from 'schemas';
import { invoke } from './api';

export const fetchApisStatuses = options => invoke({
  endpoint: createUrl(`${API_URL}/apis_status`, options),
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['apisStatuses/FETCH_LIST_REQUEST', {
    type: 'apisStatuses/FETCH_LIST_SUCCESS',
    payload: (action, state, res) => res.json().then(
      json => normalize(json.data, [apisStatus])
    ),
  }, 'apisStatuses/FETCH_LIST_FAILURE'],
});

export default handleAction(
  combineActions(
    'apisStatuses/FETCH_LIST_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.apisStatuses,
  }),
  {}
);

require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'
import json_files from '../json_files.js'

export const INIT = 'INIT'
export const REQUEST_MATCHES = 'REQUEST_MATCHES'
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES'

const requestMatches = () => {
  return {
    type: REQUEST_MATCHES
  }
}

const receiveMatches = (json) => {
  return {
    type: RECEIVE_MATCHES,
    data: json
  }
}

export const initStorage = () => {
  return dispatch => {
    dispatch({
      type: INIT,
      data: 'Redux storage Initialized'
    })
  }
}

export const fetchMatches = () => {
  return dispatch => {
    dispatch(requestMatches())
    return dispatch(receiveMatches(json_files))
  }
}
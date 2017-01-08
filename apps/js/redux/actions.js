require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

export const INIT = 'INIT'

export const initStorage = () => {
  return dispatch => {
    dispatch({
      type: INIT,
      data: 'Redux storage Initialized'
    })
  }
}

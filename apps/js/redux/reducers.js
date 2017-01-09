import { combineReducers } from 'redux'
import { GetSessionStorageState, StateToSessionStorage } from '../storages/session-storage'

import {
  INIT,
  REQUEST_MATCHES, RECEIVE_MATCHES
} from './actions'

export function init(state={
  initialized: false,
  data: null
}, action) {
  switch (action.type){
    case INIT:
      state = {...state,
        initialized: true,
        data: action.data
      }
      StateToSessionStorage(state, 'init')
      return state
    default:
      return GetSessionStorageState(state, 'init')
  }
}

export function matches(state={
  fetching: false,
  matches: []
}, action) {
  switch (action.type){
    case REQUEST_MATCHES:
      state = {...state,
        fetching: true,
        matches: []
      }
      StateToSessionStorage(state, 'matches')
      return state
    case RECEIVE_MATCHES:
      state = {...state,
        fetching: false,
        matches: action.data
      }
      StateToSessionStorage(state, 'matches')
      return state
    default:
      return GetSessionStorageState(state, 'matches')
  }
}
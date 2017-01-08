import { combineReducers } from 'redux'
import { GetSessionStorageState, StateToSessionStorage } from '../storages/session-storage'

import {
  INIT
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
      StateToSessionStorage(state, 'eiiki_homepage')
      return state
    default:
      return GetSessionStorageState(state, 'eiiki_homepage')
  }
}
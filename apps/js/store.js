import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from './redux/reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger()

var finalCreateStore = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = finalCreateStore(combineReducers(reducers));

module.exports = store

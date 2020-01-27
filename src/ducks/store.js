import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './budgetReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  budget: reducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
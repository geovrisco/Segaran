import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import {ArticleReducer, UserReducer} from './reducers'

const reducers = combineReducers({
  ArticleReducer,
  UserReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store



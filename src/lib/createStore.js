import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import ReduxThunk from 'redux-thunk'

export default function configureStore(initialState, history) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ))

  return store
}

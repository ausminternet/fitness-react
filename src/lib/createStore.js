import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import ReduxThunk from 'redux-thunk'
import firebaseConfig from '../data/firebaseConfig'
import * as firebase from 'firebase'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)

export default function configureStore(initialState, history) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk.withExtraArgument(firebase))
  ))

  return store
}

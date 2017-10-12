import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import firebaseConfig from '../data/firebaseConfig'
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import rootReducer from '../reducers'

const api = firebase.initializeApp(firebaseConfig)
api.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() =>
  console.log('persistant auth!')
).catch((err) => {
  console.log('not persistant')
  console.log(err.code)
  console.log(err.message)
})

const db = firebase.firestore()
db.enablePersistence().then(console.log('enabled'))

export default function makeStore(initialState, history) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(ReduxThunk.withExtraArgument({api, db}))
  ))

  return store
}

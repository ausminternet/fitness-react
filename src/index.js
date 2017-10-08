import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './views/App'
// import firebaseConfig from './data/firebaseConfig'
// import * as firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'
import registerServiceWorker from './registerServiceWorker'
import createStore from './lib/createStore'
import 'akwa-themes/dist/css/fitness.css'
import 'akwa-themes/dist/js/fitness.js'

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const createStoreWithFirestore = compose(
//   reduxFirestore(firebaseApp, reduxFirebaseConfig),
// )(createStore)

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStoreWithFirestore(rootReducer, composeEnhancers(
//   applyMiddleware(ReduxThunk)
// ))

const store = createStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

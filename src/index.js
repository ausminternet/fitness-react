import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import workoutApp from './reducers'
import App from './views/App'
// import registerServiceWorker from './registerServiceWorker'
import 'akwa-themes/dist/css/fitness.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(workoutApp, composeEnhancers(
  applyMiddleware(ReduxThunk)
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker()

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'akwa-themes/dist/css/fitness.css'
// import App from './App'
import workoutApp from './reducers'
import createInitialState from './reducers/createInitialState'

import registerServiceWorker from './registerServiceWorker'

let store = createStore(
  workoutApp,
  createInitialState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({type: 'SET_EFFORT', effort: 100})
store.dispatch({type: 'SET_NEXT_EXERCISE'})
store.dispatch({type: 'DO_CURRENT_EXERCISE'})

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
registerServiceWorker()

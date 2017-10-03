import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import 'akwa-themes/dist/css/fitness.css'
import App from './App'
// import workoutApp from './reducers'

import registerServiceWorker from './registerServiceWorker'

// let store = createStore(workoutApp)

render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

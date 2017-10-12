import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import makeStore from './lib/createStore'
import App from './app/App'

import 'akwa-themes/dist/css/fitness.css'
import 'akwa-themes/dist/js/fitness.js'

const store = makeStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

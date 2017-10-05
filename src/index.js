import React from 'react'
import { render } from 'react-dom'
import 'akwa-themes/dist/css/fitness.css'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()

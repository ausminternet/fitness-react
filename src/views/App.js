import { connect } from 'react-redux'
import React from 'react'
import ChooseEffort from './ChooseEffort'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'
import LoginView from './LoginView'
import TopBar from '../components/TopBar'

let App = ({appState}) => {
  let view
  let topbar = <TopBar />
  switch (appState) {
    case 'workoutStarted':
      view = <ActiveWorkout />
      break
    case 'workoutFinished':
      view = <FinishedWorkout />
      break
    case 'initial':
      view = <ChooseEffort />
      break
    default:
      view = <LoginView />
      topbar = null
  }

  return (
    <div className="App">
      {topbar}
      {view}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    appState: state.app.appState,
  }
}

App = connect(
  mapStateToProps,
)(App)

export default App

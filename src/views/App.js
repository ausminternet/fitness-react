import { connect } from 'react-redux'
import React from 'react'
import ChooseEffort from './ChooseEffort'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'

let App = ({appState}) => {
  switch (appState) {
    case 'workoutStarted':
      return <ActiveWorkout />
    case 'workoutFinished':
      return <FinishedWorkout />
    default:
      return <ChooseEffort />
  }
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

import { connect } from 'react-redux'
import React from 'react'
import ChooseEffort from './ChooseEffort'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'

let App = ({appState}) => {
  let view
  switch (appState) {
    case 'workoutStarted':
      view = <ActiveWorkout />
      break
    case 'workoutFinished':
      view = <FinishedWorkout />
      break
    default:
      view = <ChooseEffort />
  }

  return (
    <div className="App">
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

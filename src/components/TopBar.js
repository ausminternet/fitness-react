import React from 'react'
import { connect } from 'react-redux'
import RestartWorkoutButton from './RestartWorkoutButton'
import CancelWorkoutButton from './CancelWorkoutButton'
import ClearWorkoutButton from './ClearWorkoutButton'

let TopBar = ({appState}) => {
  let leftButton
  switch (appState) {
    case 'workoutStarted':
      leftButton = <CancelWorkoutButton />
      break
    default:
      leftButton = <ClearWorkoutButton />
      break
  }

  return (
    <div className="TopBar">
      {leftButton}
      <RestartWorkoutButton />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    appState: state.app.appState
  }
}

TopBar = connect(
  mapStateToProps
)(TopBar)

export default TopBar

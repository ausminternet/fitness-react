import React from 'react'
import { connect } from 'react-redux'
import RestartWorkoutButton from './RestartWorkoutButton'
import CancelWorkoutButton from './CancelWorkoutButton'
import DismissLastWorkoutButton from './DismissLastWorkoutButton'
import ClearWorkoutButton from './ClearWorkoutButton'
import PauseWorkoutButton from './PauseWorkoutButton'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'
import UserButton from './UserButton'

let TopBar = ({appState}) => {
  let left, right
  switch (appState) {
    case 'workoutStarted':
      left = <CancelWorkoutButton />
      right = <div className="right">
        <PauseWorkoutButton />
        <RestartWorkoutButton />
      </div>
      break
    case 'workoutFinished':
      left = <ClearWorkoutButton />
      break
    case 'noUser':
      left = null
      right = <LoginButton />
      break
    default:
      left = <UserButton />
      right = <LogoutButton />
  }

  return (
    <div className="TopBar">
      {left}
      {right}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    appState: state.app.appState,
  }
}

TopBar = connect(
  mapStateToProps
)(TopBar)

export default TopBar

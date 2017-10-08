import React from 'react'
import RestartIcon from '../icons/restart.png'
import { connect } from 'react-redux'
import { restartWorkout } from '../actions/workout'

let RestartWorkoutButton = ({onClick}) => {
  return (
    <button
      className="RestartWorkoutButton"
      onClick={onClick}
    >
      <img src={RestartIcon} alt="Restart workout"/>
      {/* Restart */}
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(restartWorkout())
  }
}

RestartWorkoutButton = connect(
  null,
  mapDispatchToProps,
)(RestartWorkoutButton)

export default RestartWorkoutButton

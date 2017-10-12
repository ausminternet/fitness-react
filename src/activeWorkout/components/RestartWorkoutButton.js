import React from 'react'
import RestartIcon from '../../icons/restart.png'
import { connect } from 'react-redux'
import { restartWorkout } from '../actions'

let RestartWorkoutButton = ({onClick}) => {
  return (
    <button
      className="RestartWorkoutButton"
      onClick={onClick}
    >
      <img src={RestartIcon} alt="Restart workout"/>
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

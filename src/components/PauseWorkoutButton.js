import React from 'react'
import { connect } from 'react-redux'
import { toggleWorkout } from '../actions/workout'
import PauseIcon from '../icons/pause.png'
import ResumeIcon from '../icons/resume.png'

let PauseWorkoutButton = ({workoutState, onClick}) => {
  const toggleIcon = (workoutState === 'paused') ? ResumeIcon : PauseIcon
  return (
    <button
      className="PauseWorkoutButton"
      onClick={onClick}
    >
      <img src={toggleIcon} alt="toggle workout"/>
      {/* Restart */}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    workoutState: state.workout.workoutState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(toggleWorkout())
  }
}

PauseWorkoutButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PauseWorkoutButton)

export default PauseWorkoutButton

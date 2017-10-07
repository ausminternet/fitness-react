import React from 'react'
import BackIcon from '../icons/back.png'
import { connect } from 'react-redux'
import { clearWorkout } from '../actions/workout'

let ClearWorkoutButton = ({onClick}) => {
  return (
    <button
      className="ClearWorkoutButton"
      onClick={onClick}
    >
      <img src={BackIcon} alt="Cancel workout"/>
      Back
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(clearWorkout())
  }
}

ClearWorkoutButton = connect(
  null,
  mapDispatchToProps,
)(ClearWorkoutButton)

export default ClearWorkoutButton

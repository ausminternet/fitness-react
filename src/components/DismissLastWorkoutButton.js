import React from 'react'
import DismissIcon from '../icons/dismiss.png'
import { connect } from 'react-redux'
import { cancelWorkout } from '../actions/workout'

let DismissLastWorkoutButton = ({onClick}) => {
  return (
    <button
      className="DismissLastWorkoutButton"
      onClick={onClick}
    >
      <img src={DismissIcon} alt="Back"/>
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(cancelWorkout())
  }
}

DismissLastWorkoutButton = connect(
  null,
  mapDispatchToProps,
)(DismissLastWorkoutButton)

export default DismissLastWorkoutButton

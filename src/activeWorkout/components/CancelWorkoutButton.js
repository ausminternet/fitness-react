import React from 'react'
import CancelIcon from '../../icons/cancel.png'
import { connect } from 'react-redux'
import { cancelWorkout } from '../actions'

let CancelWorkoutButton = ({onClick}) => {
  return (
    <button
      className="CancelWorkoutButton"
      onClick={onClick}
    >
      <img src={CancelIcon} alt="Back"/>
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(cancelWorkout())
  }
}

CancelWorkoutButton = connect(
  null,
  mapDispatchToProps,
)(CancelWorkoutButton)

export default CancelWorkoutButton

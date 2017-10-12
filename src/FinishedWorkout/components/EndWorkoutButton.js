import React from 'react'
import { connect } from 'react-redux'
import { endWorkout } from '../actions'

let EndWorkoutButton = ({onClick}) => {
  return (
    <button
      className="EndWorkoutButton"
      onClick={onClick}
    >
      <span>Close</span>
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(endWorkout())
  }
}

EndWorkoutButton = connect(
  null,
  mapDispatchToProps,
)(EndWorkoutButton)

export default EndWorkoutButton

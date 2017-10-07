import React from 'react'
import { tick } from '../actions/workout'
import { connect } from 'react-redux'

let CurrentExercise = ({
  currentExerciseId,
  currentRepeats,
  onClick
}) => {
  return (
    <div
      className="CurrentExercise"
      onClick={onClick}
    >
      <div className="name">{currentExerciseId}</div>
      <div className="repeats">{currentRepeats}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentExerciseId: state.workout.CurrentExercise,
    currentRepeats: state.workout.currentRepeats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(tick())
  }
}

CurrentExercise = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentExercise)

export default CurrentExercise

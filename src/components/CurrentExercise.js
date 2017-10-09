import React from 'react'
import { tick } from '../actions/workout'
import { connect } from 'react-redux'

let CurrentExercise = ({
  currentExercise,
  currentRepeats,
  workoutState,
  onClick
}) => {
  return (
    <div
      className={'CurrentExercise ' + workoutState}
      onClick={onClick}
    >
      <div className="name">{currentExercise}</div>
      <div className="repeats">{currentRepeats}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentExercise: state.workout.currentExercise,
    currentRepeats: state.workout.currentRepeats,
    workoutState: state.workout.workoutState
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

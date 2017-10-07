import { connect } from 'react-redux'
import { start } from '../actions/workout'
import React from 'react'

let ChooseWorkoutButton = ({effort, children, isActive, onClick}) => {
  return (
    <button onClick={onClick} disabled={isActive}>
      {effort}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    effort: ownProps.effort,
    children: [ownProps.text, ownProps.effort],
    isActive: ownProps.effort === state.workout.effort,
    exercises: state.exercises
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(start(ownProps.effort))
  }
}

ChooseWorkoutButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseWorkoutButton)

export default ChooseWorkoutButton

import { connect } from 'react-redux'
import { start } from '../actions/workout'
import React from 'react'

let ChooseWorkoutButton = ({effort, text, isActive, onClick}) => {
  return (
    <button className="ChooseWorkoutButton" onClick={onClick} disabled={isActive}>
      <span>{text}</span>
      <span>{effort}</span>
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

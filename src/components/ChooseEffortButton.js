import { connect } from 'react-redux'
import { prepareRandomWorkout } from '../actions/workout'
import React from 'react'

let ChooseEffortButton = ({effort, onClick}) => {
  return (
    <button className="ChooseEffortButton" onClick={onClick}>
      <span className="effort">{effort}%</span>
    </button>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    effort: ownProps.effort,
    exercises: state.exercises
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(prepareRandomWorkout(ownProps.effort))
  }
}

ChooseEffortButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseEffortButton)

export default ChooseEffortButton

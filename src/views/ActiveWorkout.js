import React from 'react'
import CurrentExercise from '../components/CurrentExercise'
import WorkoutStats from '../components/WorkoutStats'
import Timer from '../components/Timer'
import { connect } from 'react-redux'

let ActiveWorkout = ({startTime}) => {
  return (
    <div className="ActiveWorkout">
      <CurrentExercise />
      <Timer startTime={startTime} />
      <WorkoutStats />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    startTime: state.workout.startTime
  }
}

ActiveWorkout = connect(
  mapStateToProps
)(ActiveWorkout)

export default ActiveWorkout

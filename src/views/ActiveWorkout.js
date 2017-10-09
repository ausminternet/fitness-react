import React from 'react'
import CurrentExercise from '../components/CurrentExercise'
import WorkoutStats from '../components/WorkoutStats'
import Timer from '../components/Timer'
import { connect } from 'react-redux'

let ActiveWorkout = ({start, paused}) => {
  return (
    <div className="ActiveWorkout">
      <CurrentExercise />
      <Timer start={start} paused={paused} />
      <WorkoutStats />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    start: state.workout.startTime,
    paused: state.workout.workoutState === 'paused'
  }
}

ActiveWorkout = connect(
  mapStateToProps
)(ActiveWorkout)

export default ActiveWorkout

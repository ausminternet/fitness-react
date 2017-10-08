import React from 'react'
import CurrentExercise from '../components/CurrentExercise'
import WorkoutStats from '../components/WorkoutStats'
import Timer from '../components/Timer'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'

let ActiveWorkout = ({startTime}) => {
  return (
    <div className="ActiveWorkout">
      <TopBar />
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
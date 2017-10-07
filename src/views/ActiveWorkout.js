import React from 'react'
import CurrentExercise from '../components/CurrentExercise'
import WorkoutStats from '../components/WorkoutStats'
import Timer from '../components/Timer'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import config from '../data/config.json'

let ActiveWorkout = () => {
  return (
    <div className="ActiveWorkoutView">
      <TopBar />
      <CurrentExercise />
      <Timer />
      <WorkoutStats />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    exercises: config.exercises,
    effort: state.workout.effort
  }
}

ActiveWorkout = connect(
  mapStateToProps
)(ActiveWorkout)

export default ActiveWorkout

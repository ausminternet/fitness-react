import React from 'react'
import CurrentExercise from './components/CurrentExercise'
import WorkoutStats from './components/WorkoutStats'
import Timer from './components/Timer'
import { connect } from 'react-redux'
import CancelWorkoutButton from './components/CancelWorkoutButton'
import PauseWorkoutButton from './components/PauseWorkoutButton'
import RestartWorkoutButton from './components/RestartWorkoutButton'
import { TopBar, TopBarLeft, TopBarRight } from '../components/TopBar'

let ActiveWorkout = (props) => {
  return (
    <div className="ActiveWorkoutView">
      <TopBar asSheet={true}>
        <TopBarLeft>
          <CancelWorkoutButton/>
        </TopBarLeft>
        <TopBarRight>
          <PauseWorkoutButton/>
          <RestartWorkoutButton/>
        </TopBarRight>
      </TopBar>
      <CurrentExercise />
      <Timer {...props} />
      <WorkoutStats />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    startTime: state.workout.startTime,
    isPaused: state.workout.workoutState === 'paused'
  }
}

ActiveWorkout = connect(
  mapStateToProps
)(ActiveWorkout)

export default ActiveWorkout

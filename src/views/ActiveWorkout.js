import React from 'react'
import CurrentExercise from '../components/CurrentExercise'
import WorkoutStats from '../components/WorkoutStats'
import Timer from '../components/Timer'
import { connect } from 'react-redux'
import CancelWorkoutButton from '../components/CancelWorkoutButton'
import PauseWorkoutButton from '../components/PauseWorkoutButton'
import RestartWorkoutButton from '../components/RestartWorkoutButton'
import { TopBar, TopBarLeft, TopBarRight } from '../components/TopBar'

let ActiveWorkout = ({start, paused}) => {
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

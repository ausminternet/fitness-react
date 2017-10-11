import React from 'react'
import WorkoutRecap from '../components/WorkoutRecap'
import FinishedMessage from '../components/FinishedMessage'
import { TopBar, TopBarLeft, TopBarRight } from '../components/TopBar'
import EndWorkoutButton from '../components/EndWorkoutButton'
import RestartWorkoutButton from '../components/RestartWorkoutButton'

const FinishedWorkout = () => {
  return (
    <div className="FinishedWorkoutView">
      <TopBar>
        <TopBarLeft>
          <EndWorkoutButton/>
        </TopBarLeft>
        <TopBarRight>
          <RestartWorkoutButton/>
        </TopBarRight>
      </TopBar>
      <FinishedMessage />
      <WorkoutRecap />
    </div>
  )
}

export default FinishedWorkout

import React from 'react'
import WorkoutRecap from './components/WorkoutRecap'
import FinishedMessage from './components/FinishedMessage'
import { TopBar, TopBarLeft } from '../components/TopBar'
import EndWorkoutButton from './components/EndWorkoutButton'

const FinishedWorkout = () => {
  return (
    <div className="FinishedWorkoutView">
      <TopBar>
        <TopBarLeft>
          <EndWorkoutButton/>
        </TopBarLeft>
      </TopBar>
      <FinishedMessage />
      <WorkoutRecap />
    </div>
  )
}

export default FinishedWorkout

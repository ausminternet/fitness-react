import React from 'react'
import WorkoutRecap from '../components/WorkoutRecap'
import FinishedMessage from '../components/FinishedMessage'
import TopBar from '../components/TopBar'
import ClearWorkoutButton from '../components/ClearWorkoutButton'

const FinishedWorkout = () => {
  return (
    <div className="FinishedWorkoutView">
      <TopBar
        left={[<ClearWorkoutButton key={0}/>]}
      />
      <FinishedMessage />
      <WorkoutRecap />
    </div>
  )
}

export default FinishedWorkout

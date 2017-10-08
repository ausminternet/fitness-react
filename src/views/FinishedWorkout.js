import React from 'react'
import WorkoutRecap from '../components/WorkoutRecap'
import FinishedMessage from '../components/FinishedMessage'

const FinishedWorkout = () => {
  return (
    <div className="FinishedWorkout">
      <FinishedMessage />
      <WorkoutRecap />
    </div>
  )
}

export default FinishedWorkout

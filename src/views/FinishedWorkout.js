import React from 'react'
import WorkoutStats from '../components/WorkoutStats'
import FinishedMessage from '../components/FinishedMessage'
import TopBar from '../components/TopBar'

const FinishedWorkout = () => {
  return (
    <div className="FinishedWorkout">
      <TopBar />
      <FinishedMessage />
      <WorkoutStats />
    </div>
  )
}

export default FinishedWorkout

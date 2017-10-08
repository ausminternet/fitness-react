import React from 'react'
import ChooseWorkoutButton from '../components/ChooseWorkoutButton'

const ChooseEffort = () => {
  return (
    <div className="ChooseEffort">
      <h1>Choose your workout:</h1>
      <ChooseWorkoutButton text="Wake me up" effort={30} />
      <ChooseWorkoutButton text="Daily workout" effort={60} />
      <ChooseWorkoutButton text="Sweat hard" effort={100} />
    </div>
  )
}

export default ChooseEffort

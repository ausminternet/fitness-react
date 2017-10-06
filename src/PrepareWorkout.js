import React from 'react'
import StartWorkoutButton from './StartWorkoutButton'

function PrepareWorkout(props) {
  return (
    <div className="PrepareWorkout">
      <h1>Choose your workout:</h1>
      <StartWorkoutButton text="Wake me up" effort={30} onClickHandler={props.onClickHandler} />
      <StartWorkoutButton text="Daily workout" effort={60} onClickHandler={props.onClickHandler} />
      <StartWorkoutButton text="Sweat hard" effort={100} onClickHandler={props.onClickHandler} />
    </div>
  )
}

export default PrepareWorkout

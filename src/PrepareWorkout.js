import React from 'react'
import StartWorkoutButton from './StartWorkoutButton'

function PrepareWorkout(props) {
  return (
    <div className="PrepareWorkout">
      <StartWorkoutButton effort={30} onClickHandler={props.onClickHandler} />
      <StartWorkoutButton effort={60} onClickHandler={props.onClickHandler} />
      <StartWorkoutButton effort={100} onClickHandler={props.onClickHandler} />
    </div>
  )
}

export default PrepareWorkout

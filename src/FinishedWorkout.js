import React from 'react'
import Stats from './Stats'
import TopBar from './TopBar'
import FinishedMessage from './FinishedMessage'

function FinishedWorkout(props) {
  console.log(props)
  return (
    <div className="FinishedWorkout">
      <TopBar
        onRestartClickHandler={props.onRestartClickHandler}
        onCancelClickHandler={props.onCancelClickHandler}
        workoutDone="true"
      />
      <FinishedMessage />
      <Stats exercises={props.exercises} />
    </div>
  )
}

export default FinishedWorkout

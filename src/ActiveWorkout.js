import React from 'react'
import CurrentExercise from './CurrentExercise'
import Stats from './Stats'
import Timer from './Timer'
import TopBar from './TopBar'

function ActiveWorkout(props) {
  return (
    <div className="ActiveWorkout">
      <TopBar
        onRestartClickHandler={props.onRestartClickHandler}
        onCancelClickHandler={props.onCancelClickHandler}
      />
      <CurrentExercise
        className="CurrentExercise"
        currentExercise={props.currentExercise}
        onNextClickHandler={props.onNextClickHandler}
      />
      <Timer />
      <Stats exercises={props.exercises} />
    </div>
  )
}

export default ActiveWorkout

import React from 'react'

function CurrentExercise(props) {
  return (
    <div
      className="CurrentExercise"
      onClick={props.onNextClickHandler}
    >
      <div className="name">{props.currentExercise.type}</div>
      <div className="repeats">{props.currentExercise.currentRepeats}</div>
    </div>
  )
}

export default CurrentExercise

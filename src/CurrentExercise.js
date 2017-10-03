import React from 'react'

function CurrentExercise(props) {
  console.log(props)
  return (
    <div className="CurrentExercise">
      <div className="name">{props.exercise.type}</div>
      <div className="repeats">{props.exercise.nextRepeats()}</div>
    </div>
  )
}

export default CurrentExercise

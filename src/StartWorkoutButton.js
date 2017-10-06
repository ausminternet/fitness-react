import React from 'react'

function StartWorkoutButton(props) {
  return (
    <button
      className="StartWorkoutButton"
      onClick={() => props.onClickHandler(props.effort)}
    >
      <span>{props.text}</span>
      <span>{props.effort}%</span>
    </button>
  )
}

export default StartWorkoutButton

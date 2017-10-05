import React from 'react'

function StartWorkoutButton(props) {
  return (
    <button
      className="StartWorkoutButton"
      onClick={() => props.onClickHandler(props.effort)}
    >
      {props.effort}%
    </button>
  )
}

export default StartWorkoutButton

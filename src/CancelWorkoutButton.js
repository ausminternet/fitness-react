import React from 'react'

function CancelWorkoutButton(props) {
  return (
    <button
      className="CancelWorkoutButton"
      onClick={props.onClickHandler}
    >
      {/* <img src={clear} alt="Cancel workout"/> */}
      {props.text}
    </button>
  )
}

export default CancelWorkoutButton

import React from 'react'
import LeftIcon from './left.png'

function CancelWorkoutButton(props) {
  return (
    <button
      className="CancelWorkoutButton"
      onClick={props.onClickHandler}
    >
      <img src={LeftIcon} alt="Cancel workout"/>
      {props.text}
    </button>
  )
}

export default CancelWorkoutButton

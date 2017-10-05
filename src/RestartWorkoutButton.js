import React from 'react'
import replay from './replay.svg'

function RestartWorkoutButton(props) {
  return (
    <button
      className="RestartWorkoutButton"
      onClick={props.onClickHandler}
    >
      <img src={replay} alt="Restart workout"/>
      Restart
    </button>
  )
}

export default RestartWorkoutButton

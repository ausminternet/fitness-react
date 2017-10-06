import React from 'react'
import RestartIcon from './restart.png'

function RestartWorkoutButton(props) {
  return (
    <button
      className="RestartWorkoutButton"
      onClick={props.onClickHandler}
    >
      <img src={RestartIcon} alt="Restart workout"/>
      Restart
    </button>
  )
}

export default RestartWorkoutButton

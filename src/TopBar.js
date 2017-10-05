import React from 'react'
import RestartWorkoutButton from './RestartWorkoutButton'
import CancelWorkoutButton from './CancelWorkoutButton'

function TopBar(props) {
  const cancelButtonText = (props.workoutDone) ? 'New' : 'Cancel'

  return (
    <div className="TopBar">
      <CancelWorkoutButton
        onClickHandler={props.onCancelClickHandler}
        text={cancelButtonText}
      />
      <RestartWorkoutButton onClickHandler={props.onRestartClickHandler} />
    </div>
  )
}

export default TopBar

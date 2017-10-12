import React from 'react'
import done from '../../icons/done.svg'

function FinishedMessage(props) {
  return (
    <div className="FinishedMessage">
      <div className="message">Workout done!</div>
      <img src={done} alt="All Done!"/>
    </div>
  )
}

export default FinishedMessage

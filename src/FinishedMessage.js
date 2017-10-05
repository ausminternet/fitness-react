import React from 'react'
import done from './done.svg'

function FinishedMessage(props) {
  return (
    <div className="FinishedMessage">
      <div className="message">Done!</div>
      <img src={done} alt="All Done!"/>
    </div>
  )
}

export default FinishedMessage

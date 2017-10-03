import React from 'react'

function Stat(props) {
  return (
    <div className="Stat">
      <div className="data">
        <div className="name">
          {props.exercise.type}
        </div>
        <div className="stats">
          <div className="repeats">
            {props.exercise.repeatsDone}/{props.exercise.maxRepeats()}
          </div>
          <div className="percentage">
            {props.exercise.percentageDone()}%
          </div>
        </div>
      </div>
      <div className="progressbar">
        <div
          className="progress"
          style={{width: props.exercise.percentageLeft() + '%'}}
        ></div>
      </div>
      {/* <div>left: {props.exercise.repeatsLeft()}</div> */}
    </div>
  )
}

export default Stat

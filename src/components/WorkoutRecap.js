import React from 'react'
import { connect } from 'react-redux'

let WorkoutRecap = ({exercises, elapsedTime}) => {
  return (
    <div className="WorkoutRecap">
      <div className="ElapsedTime">
        <div className="text">Elapsed time</div>
        <div className="time">{elapsedTime}</div>
      </div>
      <div className="DoneWorkouts">
        {exercises.map((e, index) => {
          return (
            <div key={index} className="DoneWorkout">
              <div className="type">{e.id}</div>
              <div className="repeats">{e.repeatsDone}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const elapsed = state.workout.finishTime - state.workout.startTime
  const date = new Date(elapsed)
  // const seconds = (elapsed / 10).toFixed(1)
  // date.setSeconds(seconds)
  const elapsedTime = date.toISOString().substr(11, 8)

  return {
    exercises: state.exercises,
    elapsedTime
  }
}

WorkoutRecap = connect(
  mapStateToProps
)(WorkoutRecap)

export default WorkoutRecap

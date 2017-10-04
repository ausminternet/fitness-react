import React from 'react'
import { connect } from 'react-redux'
import { startWorkout } from '../actions'

let StartWorkout = ({ dispatch }) => {
  return (
    <div>
      <h2>anfangen?</h2>
      <button onClick={() => dispatch(startWorkout(100))}>start 100</button>
      <button onClick={() => dispatch(startWorkout(60))}>start 60</button>
      <button onClick={() => dispatch(startWorkout(30))}>start 30</button>
    </div>
  )
}
StartWorkout = connect()(StartWorkout)

export default StartWorkout

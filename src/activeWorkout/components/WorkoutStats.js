import { connect } from 'react-redux'
import React from 'react'
import Stat from './Stat'

let WorkoutStats = ({ exercises }) => (
  <div className="Stats">
    {exercises.map(e => (
      <Stat key={e.id} {...e} />
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    exercises: state.workout.exercises
  }
}

WorkoutStats = connect(
  mapStateToProps,
)(WorkoutStats)

export default WorkoutStats

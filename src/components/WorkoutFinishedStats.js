import { connect } from 'react-redux'
import React from 'react'
import Stat from './Stat'

let WorkoutFinishedStats = ({ exercises }) => (
  <div className="StatsFinished">
    {exercises.map(e => (
      <Stat key={e.id} {...e} />
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}

WorkoutFinishedStats = connect(
  mapStateToProps,
)(WorkoutStats)

export default WorkoutFinishedStats

import React from 'react'
import PropTypes from 'prop-types'
import Stat from './Stat'

const Stats = ({ exercises }) => (
  <div className="Stats">
    {exercises.map(e => (
      <Stat key={e.id} {...e} />
    ))}
  </div>
)

Stats.propTypes = {
  exercises: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      repeatsMax: PropTypes.number.isRequired,
      repeatsDone: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
}

export default Stats

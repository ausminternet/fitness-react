import React from 'react'
import Stat from './Stat'

const Stats = ({ exercises }) => (
  <div className="Stats">
    {exercises.map(e => (
      <Stat key={e.id} {...e} />
    ))}
  </div>
)

export default Stats

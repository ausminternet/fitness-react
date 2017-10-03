import React from 'react'
import Stat from './Stat'

function Stats(props) {
  const exercises = props.exercises.map(e => {
    return <Stat exercise={e} key={e.type} />
  })

  return <div className="Stats">{exercises}</div>
}

export default Stats

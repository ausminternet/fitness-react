import React from 'react'
import PropTypes from 'prop-types'

const Stat = ({id, repeatsDone, repeatsMax}) => {
  const percentDone = Math.floor((repeatsDone / repeatsMax) * 100)
  const percentLeft = 100 - percentDone

  return (
    <div className="Stat">
      <div className="data">
        <div className="name">
          {id}
        </div>
        <div className="stats">
          <div className="repeats">
            {repeatsDone}/{repeatsMax}
          </div>
          <div className="percentage">
            {percentDone}%
          </div>
        </div>
      </div>
      <div className="progressbar">
        <div
          className="progress"
          style={{width: percentLeft + '%'}}
        ></div>
      </div>
    </div>
  )
}

Stat.propTypes = {
  id: PropTypes.string.isRequired,
  repeatsDone: PropTypes.number.isRequired,
  repeatsMax: PropTypes.number.isRequired,
}

export default Stat

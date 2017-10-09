import React from 'react'
import PropTypes from 'prop-types'
import DoneIcon from '../icons/done.svg'

const Stat = ({id, repeatsDone, repeatsMax}) => {
  const percentDone = Math.floor((repeatsDone / repeatsMax) * 100)
  const repeatsLeft = repeatsMax - repeatsDone
  const repeats = (repeatsLeft === 0) ? <img src={DoneIcon} /> : repeatsLeft

  return (
    <div className="Stat">
      <div className="data">
        <div className="name">
          {id}
        </div>
        <div className="repeatsLeft">
          {repeats}
        </div>
        {/* <div className="stats">
           <div className="repeats">
           {repeatsDone}/{repeatsMax}
          </div> 
           <div className="percentage">
            {percentDone}%
          </div> 
        </div> */}
      </div>
      <div className="progressbar">
        <div
          className="progress"
          style={{width: percentDone + '%'}}
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

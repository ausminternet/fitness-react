import React from 'react'
import DoneIcon from '../../icons/done.svg'

const Stat = ({name, repeatsDone = 0, repeatsMax}) => {
  const percentDone = Math.floor((repeatsDone / repeatsMax) * 100)
  const repeatsLeft = repeatsMax - repeatsDone
  const repeats = (repeatsLeft === 0) ? <img src={DoneIcon} /> : repeatsLeft

  return (
    <div className="Stat">
      <div className="data">
        <div className="name">
          {name}
        </div>
        <div className="repeatsLeft">
          {repeats}
        </div>
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

export default Stat

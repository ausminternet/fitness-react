import React from 'react'
import ChooseEffortButton from '../components/ChooseEffortButton'

const ChooseEffort = () => {
  return (
    <div className="ChooseEffort">
      <h1>Random workout</h1>
      <div className="buttons">
        <ChooseEffortButton effort={1} />
        <ChooseEffortButton effort={30} />
        <ChooseEffortButton effort={60} />
        <ChooseEffortButton effort={100} />
      </div>
    </div>
  )
}

export default ChooseEffort

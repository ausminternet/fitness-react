import React from 'react'

const Loader = ({text}) => {
  return (
    <div className="Loader">
      <a-loader />
      <p className="text">{text}</p>
    </div>
  )
}

export default Loader

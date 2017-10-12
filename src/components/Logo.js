import React from 'react'
import LogoIcon from '../logo.png'
import LogoName from '../logoName.png'

const Logo = () => {
  return (
    <div className="Logo">
      <img className="LogoIcon" src={LogoIcon} alt="Logo"/>
      <img className="LogoName" src={LogoName} alt="Logo Name"/>
    </div>
  )
}

export default Logo

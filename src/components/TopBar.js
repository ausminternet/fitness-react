import React from 'react'

let TopBar = ({left = [], right = []}) => {
  return (
    <div className="TopBar">
      <div className="left">
        {left.map(c => {
          return c
        })}
      </div>
      <div className="right">
        {right.map(c => {
          return c
        })}
      </div>
    </div>
  )
}

export default TopBar

import React from 'react'
import { connect } from 'react-redux'
import { goto } from '../app/actions'

let GotoButton = ({view, text, icon, onClick}) => {
  icon = icon ? <img src={icon} alt="Back"/> : null
  return (
    <button
      className="GotoButton"
      onClick={() => onClick(view)}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (view) => {
      dispatch(goto(view))
    }
  }
}

GotoButton = connect(
  null,
  mapDispatchToProps,
)(GotoButton)

export default GotoButton

import React from 'react'
import { connect } from 'react-redux'
import { loginButtonClicked } from '../actions/user'

let LogoutButton = ({onClick}) => {
  return (
    <button
      className="LoginButton"
      onClick={onClick}
    >
      Login
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(loginButtonClicked())
  }
}

LogoutButton = connect(
  null,
  mapDispatchToProps,
)(LogoutButton)

export default LogoutButton

import React from 'react'
import LogoutIcon from '../icons/logout.png'
import { connect } from 'react-redux'
import { logout } from '../actions/user'

let LogoutButton = ({onClick}) => {
  return (
    <button
      className="LogoutButton"
      onClick={onClick}
    >
      <img src={LogoutIcon} alt="Logout"/>
      Logout
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(logout())
  }
}

LogoutButton = connect(
  null,
  mapDispatchToProps,
)(LogoutButton)

export default LogoutButton

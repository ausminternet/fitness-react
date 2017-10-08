import React from 'react'
import UserIcon from '../icons/user.png'
import { connect } from 'react-redux'

let UserButton = ({displayName}) => {
  return (
    <button className="UserButton">
      <img src={UserIcon} alt="Logout"/>
      {displayName}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    displayName: state.user.displayName
  }
}

UserButton = connect(
  mapStateToProps
)(UserButton)

export default UserButton

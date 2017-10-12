import React from 'react'
import UserIcon from '../icons/user.png'
import { connect } from 'react-redux'
import { goto } from '../app/actions'

let UserButton = ({displayName, onClick}) => {
  return (
    <button className="UserButton" onClick={() => onClick()}>
      <img src={UserIcon} alt="Avatar"/>
      {displayName}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    displayName: state.user.displayName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(goto('USER'))
  }
}

UserButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserButton)

export default UserButton

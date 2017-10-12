import React from 'react'
import LogoutButton from '../components/LogoutButton'
import GotoButton from '../components/GotoButton'
import {
  TopBar,
  TopBarLeft,
  TopBarCenter,
  TopBarRight
} from '../components/TopBar'
import BackIcon from '../icons/back.png'

const User = () => {
  return (
    <div className="UserView">
      <TopBar>
        <TopBarLeft>
          <GotoButton
            view='index'
            text="Back"
            icon={BackIcon}
          />
        </TopBarLeft>
        <TopBarCenter>Profile</TopBarCenter>
        <TopBarRight>
          <LogoutButton/>
        </TopBarRight>
      </TopBar>
    </div>
  )
}

export default User

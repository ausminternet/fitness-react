import React from 'react'
import ChooseEffort from '../components/ChooseEffort'
import GotoButton from '../components/GotoButton'
import UserIcon from '../icons/user.png'
import { TopBar, TopBarCenter, TopBarRight } from '../components/TopBar'

const Index = () => {
  return (
    <div className="IndexView">
      <TopBar>
        <TopBarCenter>Choose Workout</TopBarCenter>
        <TopBarRight>
          <GotoButton view="user" icon={UserIcon} />
        </TopBarRight>
      </TopBar>
      <ChooseEffort />
    </div>
  )
}

export default Index

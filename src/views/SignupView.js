import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/SignupForm'
import { TopBar, TopBarLeft } from '../components/TopBar'
import GotoButton from '../components/GotoButton'
import Logo from '../components/Logo'
import BackIcon from '../icons/back.png'

class SignupView extends Component {
  constructor({userState, checkSignup}) {
    super()
    this.state = {userState}
  }

  componentWillReceiveProps({userState}) {
    this.setState({userState})
  }

  render() {
    return (
      <div className="SignupView">
        <TopBar>
          <TopBarLeft>
            <GotoButton
              view="login"
              text="Login"
              icon={BackIcon}
            />
          </TopBarLeft>
        </TopBar>
        <Logo />
        <SignupForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userState: state.user.userState
  }
}

export default connect(
  mapStateToProps,
)(SignupView)

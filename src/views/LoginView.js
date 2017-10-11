import React, { Component } from 'react'
import { goto } from '../actions/app'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { TopBar, TopBarRight } from '../components/TopBar'
import Logo from '../components/Logo'
import GotoButton from '../components/GotoButton'
import RegisterIcon from '../icons/register.png'

class LoginView extends Component {
  constructor({userState, gotoSignup}) {
    super()
    this.state = {userState}
    this.gotoSignup = gotoSignup
  }

  handleGotoSignupClick = (e) => {
    this.gotoSignup()
    e.preventDefault()
  }

  componentWillReceiveProps({userState}) {
    this.setState({userState})
  }

  render() {
    return (
      <div className="LoginView">
        <TopBar>
          <TopBarRight>
            <GotoButton
              view="SIGNUP"
              text="Sign up"
              icon={RegisterIcon}/>
          </TopBarRight>
        </TopBar>
        <Logo />
        <LoginForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userState: state.user.userState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotoSignup: () => dispatch(goto('SIGNUP'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)

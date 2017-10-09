import React, { Component } from 'react'
import { checkLogin } from '../actions/user'
import { goto } from '../actions/app'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import Loader from '../components/Loader'
import TopBar from '../components/TopBar'
import Logo from '../components/Logo'
import GotoButton from '../components/GotoButton'
import RegisterIcon from '../icons/register.png'

class LoginView extends Component {
  constructor({userState, checkLogin, gotoSignup}) {
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
        <TopBar right={[
          <GotoButton
            view="SIGNUP"
            text="Create Account"
            icon={RegisterIcon}
            key={0} />
        ]}/>
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
    checkLogin: () => dispatch(checkLogin()),
    gotoSignup: () => dispatch(goto('SIGNUP'))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)

import React, { Component } from 'react'
import { checkLogin } from '../actions/user'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import Loader from '../components/Loader'
import TopBar from '../components/TopBar'
import Logo from '../logo.png'
import LogoName from '../logoName.png'

class LoginView extends Component {
  constructor({userState, checkLogin}) {
    super()
    checkLogin()
    this.state = {userState}
  }

  componentWillReceiveProps({userState}) {
    this.setState({userState})
  }

  render() {
    console.log(this.state.userState)
    let loader = (this.state.userState === 'checkingLogin')
      ? <Loader />
      : null

    return (
      <div className="LoginView">
        {/* <TopBar /> */}
        <div className="LogoContainer">
          <img className="Logo" src={Logo} alt="Logo"/>
          <img className="LogoName" src={LogoName} alt="Logo Name"/>
        </div>
        <LoginForm />
        {loader}
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
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)

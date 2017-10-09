import React, { Component } from 'react'
import { login } from '../actions/user'
import { connect } from 'react-redux'

class LoginForm extends Component {
  constructor({handleLogin}) {
    super()
    this.handleLogin = handleLogin
    this.state = {
      email: '',
      password: '',
      loginText: 'Login',
      disableSubmit: true
    }
  }

  componentWillReceiveProps({userState, handleLogin}) {
    switch (userState) {
      // case 'loginButtonClicked':
      //   handleLogin(this.state.email, this.state.password)
      //   break
      case 'loginFailed':
        this.setState({
          showError: true,
          disableForm: false,
          loginText: 'Login',
          email: '',
          password: ''
        })
        break
      case 'loggingIn':
        this.setState({
          disableForm: true,
          loginText: 'Logging you in...'
        })
        break
    }
  }

  render() {
    const error = this.state.showError
      ? <div className="ErrorMessageContainer">
        <p className="ErrorMessage">Login failed! Try again...</p>
      </div>
      : null

    return (
      <form className="LoginForm" onSubmit={this.handleFormSubmit}>
        {error}
        <input
          className="LoginName"
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="off"
          value={this.state.email}
          onChange={this.handleInputChange}
          disabled={this.state.disableForm}
        />
        <hr className="Divider" />
        <input
          className="LoginPassword"
          name="password"
          type="password"
          required
          autoComplete="off"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleInputChange}
          disabled={this.state.disableForm}
        />
        <button
          extend="a-button"
          className="LoginButton"
          type="submit"
          disabled={this.state.disableForm || this.state.disableSubmit}
        >{this.state.loginText}</button>
      </form>
    )
  }

  handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })

    if (this.readyToSubmit()) {
      console.log('enable')
      console.log('password: ', this.state.password)
      this.setState({disableSubmit: false})
    } else {
      console.log('disable')
      this.setState({disableSubmit: true})
    }
  }

  readyToSubmit() {
    if (this.validateEmail(this.state.email) && this.state.password) {
      return true
    }
    return false
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (this.readyToSubmit()) {
      this.handleLogin(this.state.email, this.state.password)
    }
  }

  validateEmail = email => {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(email)
  }
}

const mapStateToProps = state => {
  return {
    userState: state.user.userState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: (email, password) => dispatch(login(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)

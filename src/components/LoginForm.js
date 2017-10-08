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
      loginText: 'Login'
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
      ? <p className="ErrorMessage">Login failed! Try again...</p>
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
          disabled={this.state.disableForm}
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
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.handleLogin(this.state.email, this.state.password)
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

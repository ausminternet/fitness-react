import React, { Component } from 'react'
import { checkSignup } from '../actions/user'
import { connect } from 'react-redux'

class SignupForm extends Component {
  constructor({handleSignUp}) {
    super()
    this.handleSignUp = handleSignUp
    this.state = {
      email: '',
      password: '',
      name: '',
      loginText: 'Create account',
      disableSubmit: true
    }
  }

  componentWillReceiveProps({userState}) {
    switch (userState) {
      case 'signUpFailed':
        this.setState({
          showError: true,
          disableForm: false,
          loginText: 'Create account',
          email: '',
          password: ''
        })
        break
      case 'signingUp':
        this.setState({
          disableForm: true,
          loginText: 'Creating your account...'
        })
        break
    }
  }

  render() {
    const error = this.state.showError
      ? <div className="ErrorMessageContainer">
        <p className="ErrorMessage">Signup failed! Try again...</p>
      </div>
      : null

    return (
      <form className="SignupForm" onSubmit={this.handleFormSubmit}>
        {error}
        <input
          className="LoginName"
          name="name"
          type="text"
          placeholder="Name"
          required
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleInputChange}
          disabled={this.state.disableForm}
        />
        <hr className="Divider" />
        <input
          className="LoginEmail"
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
      this.setState({disableSubmit: false})
    } else {
      this.setState({disableSubmit: true})
    }
  }

  readyToSubmit() {
    if (
      this.validateEmail(this.state.email) &&
      this.state.password &&
      this.state.name
    ) {
      return true
    }
    return false
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (this.readyToSubmit()) {
      this.handleSignUp(this.state.email, this.state.password, this.state.name)
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
    handleSignUp:
      (email, password, name) => dispatch(checkSignup(email, password, name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm)

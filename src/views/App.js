import { connect } from 'react-redux'
import React, { Component } from 'react'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'
import Login from './LoginView'
import Signup from './SignupView'
import { checkLogin } from '../actions/user'
import Loader from '../components/Loader'
import Index from './Index'
import User from './User'

class App extends Component {
  constructor({show, checkLogin}) {
    super()
    this.state = {show}
    this.checkLogin = checkLogin
  }

  componentDidMount() {
    this.checkLogin()
  }

  componentWillReceiveProps({show}) {
    this.setState({
      show
    })
  }

  render() {
    switch (this.state.show) {
      case 'activeWorkout':
        return <ActiveWorkout />
      case 'workoutFinished':
        return <FinishedWorkout />
      case 'index':
        return <Index />
      case 'signup':
        return <Signup />
      case 'login':
        return <Login />
      case 'user':
        return <User />
      default:
        return <Loader />
    }
  }
}

const mapStateToProps = state => {
  return {
    show: state.app.show,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLogin: () => dispatch(checkLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

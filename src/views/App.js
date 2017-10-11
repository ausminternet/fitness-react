import { connect } from 'react-redux'
import React, { Component } from 'react'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'
import Login from './LoginView'
import Signup from './SignupView'
import { checkLogin } from '../actions/user'
import Loader from '../components/Loader'
import Sheet from '../components/Sheet'
import Index from './Index'
import User from './User'

class App extends Component {
  constructor({view, showLoader, loaderText, sheet, sheetState, checkLogin}) {
    super()
    this.state = {view, showLoader, loaderText, sheet, sheetState}
    checkLogin()
  }

  componentWillReceiveProps({view, showLoader, loaderText, sheet, sheetState}) {
    this.setState({view, showLoader, loaderText, sheet, sheetState})
  }

  render() {
    let view, sheet
    switch (this.state.view) {
      // case 'activeWorkout':
      //   view = <ActiveWorkout />
      //   sheet = true
      //   break
      case 'workoutFinished':
        view = <FinishedWorkout />
        sheet = true
        break
      case 'index':
        view = <Index />
        break
      case 'signup':
        view = <Signup />
        break
      case 'login':
        view = <Login />
        break
      case 'user':
        view = <User />
        break
      default:
        view = <Login />
    }
    switch (this.state.sheet) {
      case 'activeWorkout':
        sheet = <ActiveWorkout />
        break
      // case 'workoutFinished':
      //   view = <FinishedWorkout />
      //   sheet = true
      //   break
      // case 'index':
      //   view = <Index />
      //   break
      // case 'signup':
      //   view = <Signup />
      //   break
      // case 'login':
      //   view = <Login />
      //   break
      // case 'user':
      //   view = <User />
      //   break
      default:
        sheet = null
    }

    const loader = this.state.showLoader
      ? <Loader text={this.state.loaderText} />
      : null

    const sheetView = (this.state.sheetState !== 'closed')
      ? <Sheet>{sheet}</Sheet>
      : null

    return (
      <div className="App">
        {view}
        {sheetView}
        {loader}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    view: state.app.view,
    sheet: state.app.sheet,
    sheetState: state.app.sheetState,
    showLoader: state.app.showLoader,
    loaderText: state.app.loaderText
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

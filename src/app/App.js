import { connect } from 'react-redux'
import React, { Component } from 'react'
import Login from '../views/LoginView'
import Signup from '../views/SignupView'
import { checkLogin } from '../actions/login'
import Loader from '../components/Loader'
import Sheet from './components/Sheet'
import Index from '../views/Index'
import User from '../views/User'

class App extends Component {
  constructor({view, showLoader, loaderText, sheet, sheetState, checkLogin}) {
    super()
    this.state = {view, showLoader, loaderText, sheet, sheetState}
    checkLogin()
  }

  componentWillReceiveProps({view, showLoader, loaderText, sheet, sheetState}) {
    this.setState({view, showLoader, loaderText, sheet, sheetState})
    // console.log('sheet: ', sheet)
  }

  render() {
    // console.log('sheet: ', this.state.sheet)
    let view
    switch (this.state.view) {
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

    const loader = this.state.showLoader
      ? <Loader text={this.state.loaderText} />
      : null

    return (
      <div className="App">
        {view}
        <Sheet />
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

import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActiveWorkout from '../views/ActiveWorkout'
import FinishedWorkout from '../views/FinishedWorkout'

class Sheet extends Component {
  constructor({ sheetState, children }) {
    super()
    this.state = {sheetState, children}
  }

  componentWillReceiveProps({sheetState, sheet}) {
    this.setState({sheetState, sheet})
  }

  render() {
    let child
    switch (this.state.sheet) {
      case 'activeWorkout':
        child = <ActiveWorkout />
        break
      case 'finishedWorkout':
        child = <FinishedWorkout />
        break
      default:
        child = null
    }

    let addClass
    switch (this.state.sheetState) {
      case 'opening':
        addClass = 'open opening'
        break
      case 'closing':
        addClass = 'open closing'
        break
      case 'open':
        addClass = 'open'
        break
      default:
        addClass = ''
    }

    return (
      <div className={'Sheet ' + addClass }>

        {child}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sheetState: state.app.sheetState,
    sheet: state.app.sheet
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onClick: () => dispatch(goto('USER'))
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Sheet)

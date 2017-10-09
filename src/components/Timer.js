import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timer extends Component {
  constructor({startTime}) {
    super()
    this.state = {
      elapsed: 0,
      startedAt: startTime,
      isPaused: false,
      pauseText: 'Pause',
      offset: 0
    }
  }

  componentWillReceiveProps({startTime, workoutState}) {
    if (startTime === this.state.startedAt) {
      if (workoutState === 'paused') {
        this.setState({
          isPaused: true,
          pauseText: 'Weiter',
          pausedAt: Date.now()
        })
      } else {
        this.setState({
          isPaused: false,
          pauseText: 'Pause',
          offset: new Date() - this.state.pausedAt + this.state.offset
        })
      }
    } else {
      this.setState({
        startedAt: startTime,
        offset: 0,
      })
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    if (!this.state.isPaused) {
      this.setState({
        elapsed: new Date() - this.state.startedAt - this.state.offset
      })
      this.calcTime()
    }
  }

  calcTime() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    var date = new Date(null)
    date.setSeconds(seconds)
    this.time = date.toISOString().substr(11, 8)
  }

  render() {
    const show = (this.state.isPaused) ? 'Workout paused.' : this.time
    return (
      <div className="Timer">
        {show}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    workoutState: state.workout.workoutState
  }
}

export default connect(
  mapStateToProps
)(Timer)

import React, { Component } from 'react'

class Timer extends Component {
  constructor({startTime, isPaused}) {
    super()
    this.state = {
      elapsed: 0,
      startTime,
      isPaused,
      pauseText: 'Pause',
      offset: 0
    }
  }

  componentWillReceiveProps({startTime, isPaused}) {
    if (startTime === this.state.startTime) {
      if (isPaused) {
        this.setState({
          isPaused,
          pauseText: 'Weiter',
          pausedAt: Date.now()
        })
      } else {
        this.setState({
          isPaused,
          pauseText: 'Pause',
          offset: new Date() - this.state.pausedAt + this.state.offset
        })
      }
    } else {
      this.setState({
        startTime,
        offset: 0,
        isPaused
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
        elapsed: new Date() - this.state.startTime - this.state.offset
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

export default Timer

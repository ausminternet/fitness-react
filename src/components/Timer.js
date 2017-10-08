import React, { Component } from 'react'

class Timer extends Component {
  constructor({startTime}) {
    super()
    this.state = {
      elapsed: 0,
      start: startTime
    }
  }

  componentWillReceiveProps({startTime}) {
    this.setState({start: startTime})
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({elapsed: new Date() - this.state.start})
    this.calcTime()
  }

  calcTime() {
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    var date = new Date(null)
    date.setSeconds(seconds)
    this.time = date.toISOString().substr(11, 8)
  }

  render() {
    return <div className="Timer">{this.time}</div>
  }
}

export default Timer

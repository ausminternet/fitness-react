import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.start = Date.now()
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({elapsed: new Date() - this.start})
  }

  render() {
    var elapsed = Math.round(this.props.elapsed / 100)
    var seconds = (elapsed / 10).toFixed(1)
    return <p><b>{seconds} seconds</b></p>
  }
}

export default Timer

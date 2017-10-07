import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.start = Date.now()
    this.state = {
      elapsed: 0
    }
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
    let elapsed = Math.round(this.state.elapsed / 100)
    let seconds = (elapsed / 10).toFixed(1)
    // let minutes = Math.floor(elapsed / 60)
    // let seconds = elapsed - minutes * 60
    // let hours = Math.floor(time / 3600);
    // time = time - hours * 3600;
    var date = new Date(null)
    date.setSeconds(seconds)
    var time = date.toISOString().substr(11, 8)
    return <div className="Timer">{time}</div>
  }
}

export default Timer

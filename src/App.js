import React, { Component } from 'react'
import CurrentExercise from './CurrentExercise'
import Stats from './Stats'
import Workout from './lib/workout'
import config from './data/config.json'
// import StartWorkout from './containers/StartWorkout'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isStarted: false,
      currentExercise: undefined,
      isDone: false
    }

    this.tick = this.tick.bind(this)
    this.start = this.start.bind(this)
    this.restart = this.restart.bind(this)
    this.next = this.next.bind(this)
  }

  tick() {
    this.workout.currentExercise.do()
    this.workout.done() ? this.finish() : this.next()
  }

  start(effort) {
    this.workout = new Workout(config.exercises, effort)
    this.workout.start()
    this.setState({
      isStarted: true,
      currentExercise: this.workout.currentExercise
    })
  }

  restart() {
    this.workout = undefined
    this.setState({
      isStarted: false,
      isDone: false,
      currentExercise: undefined
    })
  }

  next() {
    this.workout.next()
    this.setState({
      currentExercise: this.workout.currentExercise
    })
  }

  finish() {
    this.setState({
      isDone: true
    })
  }

  render() {
    if (!this.state.isStarted) {
      return (
        <div>
          <h2>anfangen?</h2>
          <button onClick={() => this.start(100)}>start 100</button>
          <button onClick={() => this.start(60)}>start 60</button>
          <button onClick={() => this.start(30)}>start 30</button>
        </div>
      )
    }

    if (this.state.isDone) {
      return (
        <div>
          <h2>fertig!</h2>
          <button class="a-button" onClick={this.restart}>restart</button>
          <h2>Stats:</h2>
          <Stats exercises={this.workout.exercises} />
        </div>
      )
    }

    return (
      <div className="App">
        <CurrentExercise exercise={this.state.currentExercise} />
        <button
          className="NextButton"
          onClick={this.tick}
          disabled={this.state.isDone}
        >
          next
        </button>
        <Stats exercises={this.workout.exercises} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'
import PrepareWorkout from './PrepareWorkout'
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
    this.cancel = this.cancel.bind(this)
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
      isDone: false,
      effort,
      currentExercise: this.workout.currentExercise
    })
  }

  restart() {
    this.start(this.state.effort)
  }

  cancel() {
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
        <PrepareWorkout onClickHandler={(effort) => this.start(effort)} />
      )
    }

    if (this.state.isDone) {
      return (
        <FinishedWorkout
          exercises={this.workout.exercises}
          onRestartClickHandler={this.restart}
          onCancelClickHandler={this.cancel}
        />
      )
    }

    return (
      <ActiveWorkout
        exercises={this.workout.exercises}
        currentExercise={this.state.currentExercise}
        onNextClickHandler={this.tick}
        onRestartClickHandler={this.restart}
        onCancelClickHandler={this.cancel}
      />
    )
  }
}

export default App

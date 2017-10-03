import React, { Component } from 'react'
import CurrentExercise from './CurrentExercise'
import Stats from './Stats'
import Workout from './lib/workout'
import config from './data/config.json'

class WorkoutActive extends Component {
  constructor(props) {
    super()
    this.state = {
      currentExercise: undefined,
      isDone: false,
    }
    this.effort = props.effort
  }

  componentWillMount() {
    this.start(this.effort)
  }

  tick = () => {
    this.workout.currentExercise.do()
    this.workout.done() ? this.handleFinish() : this.next()
  }

  start(effort) {
    this.workout = new Workout(config.exercises, effort)
    this.workout.start()
    this.setState({
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

  handleFinish() {
    this.setState({isDone: true})
    this.props.onFinish()
  }

  render() {
    return (
      <div>
        <h2>exercise:</h2>
        <CurrentExercise exercise={this.state.currentExercise} />
        <button className="a-button" onClick={this.tick} disabled={this.state.isDone}>next</button>
        <h2>Stats:</h2>
        <Stats exercises={this.workout.exercises} />
      </div>
    )
  }
}

export default WorkoutActive

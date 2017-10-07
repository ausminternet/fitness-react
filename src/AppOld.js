import React, { Component } from 'react'
import ActiveWorkout from './ActiveWorkout'
import FinishedWorkout from './FinishedWorkout'
import PrepareWorkout from './PrepareWorkout'
import Workout from './lib/workout'
import firebaseConfig from './data/firebaseConfig'
import * as firebase from 'firebase'
import 'firebase/firestore'
import config from './data/config.json'
// import StartWorkout from './containers/StartWorkout'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isStarted: false,
      currentExercise: undefined,
      isDone: false,
      ready: false
    }
    firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore()
    this.createExercises()
    this.prepareExercises()

    this.tick = this.tick.bind(this)
    this.start = this.start.bind(this)
    this.restart = this.restart.bind(this)
    this.cancel = this.cancel.bind(this)
    this.next = this.next.bind(this)
  }

  createExercises() {
    config.exercises.forEach(e => {
      this.db.collection('exercises')
        .doc(e.type).set({
          name: e.type,
          repeats: e.repeats
        })
    })
  }

  prepareExercises() {
    this.exercises = []
    this.db.collection('exercises').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.exercises.push({
          type: doc.id,
          ...doc.data()
        })
      })
      this.setState({ready: true})
    })
  }

  tick() {
    this.workout.doCurrentExercise()
    this.workout.done() ? this.finish() : this.next()
  }

  start(effort) {
    this.workout = new Workout(this.exercises, effort)
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
    if (!this.state.ready) {
      return <div className="PrepareWorkout">fetching...</div>
    }

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

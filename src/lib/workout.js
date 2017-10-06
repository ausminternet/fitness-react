const Exercise = require('./exercise')
const utils = require('./utils')

class Workout {
  constructor(exercises, effort = 100) {
    this.started = false
    this.effort = effort
    this.lastExercise = undefined
    this._createExercises(exercises)
  }

  _createExercises(exercises) {
    this.exercises = exercises.map(e => {
      return new Exercise(e, this.effort)
    })
    this.totalExercises = this.exercises.length
  }

  start() {
    this.started = true
    this.next()
  }

  next() {
    if (!this.done()) {
      this.setNextExercise()
      this.currentExercise.setNextRepeats()
    }
  }

  setNextExercise() {
    this.currentExercise = this._nextExercise()
  }

  _nextExercise() {
    const exercisesLeft = this.exercises.filter(e => !e.done())
    if (exercisesLeft.length === 1) return exercisesLeft[0]
    let exs = this._sortByPercentageDone(exercisesLeft)
    let iMax = (exercisesLeft.length === 2) ? 1 : 3
    let i = utils.randomNumber(1, exercisesLeft.length / iMax) - 1
    return (this._isDifferentExercise(exs[i]))
      ? exs[i]
      : this._nextExercise()
  }

  _sortByPercentageDone(exercises) {
    return exercises.sort((a, b) => {
      return a.percentageDone() === b.percentageDone()
        ? 0 : +(a.percentageDone() > b.percentageDone()) || -1
    })
  }

  _isDifferentExercise(exercise) {
    return this.currentExercise !== exercise
  }

  doCurrentExercise() {
    this.currentExercise.do()
  }

  done() {
    return this.exercises.every(e => e.done())
  }
}

module.exports = Workout

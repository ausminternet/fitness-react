const utils = require('./utils')

class Exercise {
  constructor(config, effort) {
    this.type = config.type
    this.maxRepeatsDefault = config.repeats.max
    this.maxRepeatsPerSet = config.repeats.setMax
    this.minRepeatsPerSet = config.repeats.setMin
    this.effort = effort
    this.repeatsDone = 0
  }

  maxRepeats() {
    return Math.ceil(this.maxRepeatsDefault / 100 * this.effort)
  }

  setNextRepeats() {
    let min = (this.minRepeatsPerSet <= this.repeatsLeft())
      ? this.minRepeatsPerSet : this.repeatsLeft()
    let max = (this.maxRepeatsPerSet <= this.repeatsLeft())
      ? this.maxRepeatsPerSet : this.repeatsLeft()

    this.currentRepeats = utils.randomNumber(min, max)
  }

  done() {
    return this.repeatsDone === this.maxRepeats()
  }

  repeatsLeft() {
    return this.maxRepeats() - this.repeatsDone
  }

  percentageDone() {
    return Math.floor((this.repeatsDone / this.maxRepeats()) * 100)
  }

  percentageLeft() {
    return 100 - this.percentageDone()
  }

  do() {
    this.repeatsDone += this.currentRepeats
  }
}

module.exports = Exercise

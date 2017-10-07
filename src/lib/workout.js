import {randomNumber} from './utils'

export const nextRepeats = (exercise) => {
  const min = (exercise.repeatsSetMin <= repeatsLeft(exercise))
    ? exercise.repeatsSetMin
    : repeatsLeft(exercise)
  const max = (exercise.repeatsSetMax <= repeatsLeft(exercise))
    ? exercise.repeatsSetMax
    : repeatsLeft(exercise)

  return randomNumber(min, max)
}

export const repeatsLeft = exercise => {
  return exercise.repeatsMax - exercise.repeatsDone
}

export const sortByPercentageDone = exercises => {
  return exercises.sort((a, b) => {
    return percentageDone(a) === percentageDone(b)
      ? 0 : +(percentageDone(a) > percentageDone(b)) || -1
  })
}

export const percentageDone = exercise => {
  return Math.floor((exercise.repeatsDone / exercise.repeatsMax) * 100)
}

export const nextExercise = state => {
  const exercisesLeft = state.exercises.filter(e => !e.isDone)
  if (exercisesLeft.length === 1) return exercisesLeft[0].id
  const sortedExercises = sortByPercentageDone(exercisesLeft)
  const iMax = (sortedExercises.length === 2) ? 1 : 3
  const i = randomNumber(1, sortedExercises.length / iMax) - 1
  return (state.workout.currentExercise === sortedExercises[i].id)
    ? nextExercise(state)
    : sortedExercises[i].id
}

export const done = exercises => {
  return exercises.every(e => e.isDone)
}

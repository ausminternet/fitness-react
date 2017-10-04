import utils from '../lib/utils'
// const next = (state) => {
//   exercisesLeft = state.exercises.filter(e => !e.done())
//   currentExercise = this.nextExercise()
//   this.currentExercise.currentRepeats = this.currentExercise.nextRepeats()
// }

const nextRepeats = (e, state) => {
  e = state.exercises.find((e, ex) => ex.type === e)
  let min = (e.repeats.setMin <= repeatsLeft(e))
    ? e.repeats.setMin : repeatsLeft(e)
  let max = (e.repeats.setMax <= repeatsLeft(e))
    ? e.repeats.setMax : repeatsLeft(e)

  return utils.randomNumber(min, max)
}

const repeatsLeft = (e) => {
  return maxRepeats(e) - e.repeats.done
}

const sortByPercentageDone = (exercises) => {
  return exercises.sort((a, b) => {
    return percentageDone(a) === percentageDone(b)
      ? 0 : +(percentageDone(a) > percentageDone(b)) || -1
  })
}

const percentageDone = (exercise) => {
  return Math.floor((exercise.repeatsDone / maxRepeats(exercise)) * 100)
}

const maxRepeats = (exercise, effort) => {
  return Math.ceil(exercise.repeats.max / 100 * effort)
}

const percentageLeft = (exercise) => {
  return 100 - percentageDone(exercise)
}

// isDifferentExercise(exercise) {
//   return this.currentExercise !== exercise
// }

const nextExercise = (state) => {
  const exercisesLeft = state.exercises.filter(e => !e.isDone)
  if (exercisesLeft.length === 1) return exercisesLeft[0].type
  let exs = sortByPercentageDone(exercisesLeft)
  let iMax = (exercisesLeft.length === 2) ? 1 : 2
  let i = utils.randomNumber(1, exercisesLeft.length / iMax) - 1
  return (state.currentExercise !== exs[i].type)
    ? exs[i].type
    : nextExercise(state)
}

const workout = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EFFORT':
      return {
        ...state,
        effort: action.effort,
        exercises: state.exercises.map((e) => {
          return {
            ...e,
            repeats: {
              effectiveMax: (e.repeats.max / 100 * action.effort)
            }
          }
        })
      }
    case 'DO_CURRENT_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.map((e) => {
          if (e.type === state.currentExercise) {
            let repeatsDone = e.repeats.done += e.repeats.current
            console.log(repeatsDone)
            let repeats = e.repeats
            return {...e, repeats: {...repeats, done: repeatsDone}}
          } else {
            return e
          }
        })
      }
    // case 'DO_CURRENT_EXERCISE':
    //   return state.exercises.map(e =>
    //     (e.type === state.currentExercise.type)
    //       ? {...e, repeatsDone: e.repeatsDone += e.currentRepeats}
    //       : e
    //   )
    case 'SET_NEXT_EXERCISE':
      let ex = nextExercise(state)
      let r = nextRepeats(ex, state)
      return {
        ...state,
        currentExercise: ex,
        exercises: state.exercises.map((e, ex, r) => {
          if (e.type === ex.type) {
            let repeats = e.repeats
            return {...e, repeats: {...repeats, current: r}}
          } else {
            return e
          }
        })
      }

    default:
      return state
  }
}

export default workout

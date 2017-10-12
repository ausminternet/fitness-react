import * as workoutLib from '../lib/workout'
import * as app from './app'

export const setEffort = effort => {
  return {
    type: 'SET_EFFORT',
    effort: effort
  }
}

const startWorkout = () => {
  return {
    type: 'START_WORKOUT',
    startTime: Date.now()
  }
}

const pauseWorkout = () => {
  return {
    type: 'PAUSE_WORKOUT',
  }
}

const resumeWorkout = () => {
  return {
    type: 'RESUME_WORKOUT',
  }
}

export const toggleWorkout = () => (dispatch, getState) => {
  if (getState().workout.workoutState === 'paused') {
    dispatch(resumeWorkout())
  } else {
    dispatch(pauseWorkout())
  }
}

export const restartWorkout = () => dispatch => {
  if (window.confirm('Restart workout?')) {
    dispatch({
      type: 'RESTART_WORKOUT',
      startTime: Date.now()
    })
    dispatch(prepareNextExercise())
    dispatch(app.setSheet('activeWorkout'))
  }
}

export const prepareRandomWorkout = (effort) => (dispatch, getState, {db}) => {
  dispatch(setEffort(effort))
  dispatch(prepareExercises(getState().exercises, effort))
  dispatch(prepareNextExercise())
  dispatch(startWorkout())
  dispatch(app.setSheet('activeWorkout'))
  dispatch(app.openSheet())
}

export const tick = () => (dispatch, getState) => {
  if (getState().workout.workoutState !== 'paused') {
    dispatch(doRepeats(
      getState().workout.currentExercise,
      getState().workout.currentRepeats
    ))
    if (workoutLib.done(getState().workout.exercises)) {
      dispatch(finishWorkout())
      dispatch(app.setSheet('finishedWorkout'))
    } else {
      dispatch(prepareNextExercise())
    }
  }
}

export const finishWorkout = () => {
  return {
    type: 'FINISH_WORKOUT',
    finishTime: Date.now()
  }
}

export const endWorkout = () => dispatch => {
  dispatch(app.closeSheet()).then(() => {
    dispatch(clearWorkout())
  })
}

export const clearWorkout = () => dispatch => {
  dispatch({
    type: 'CLEAR_WORKOUT'
  })
}

export const cancelWorkout = () => (dispatch) => {
  if (window.confirm('Cancel workout?')) {
    dispatch(app.closeSheet()).then(() => {
      dispatch(clearWorkout())
    })
  }
}

export const prepareNextExercise = () => (dispatch, getState) => {
  const exercises = getState().workout.exercises
  const currentExercise = getState().workout.currentExercise
  const nextExId = workoutLib.nextExercise(exercises, currentExercise)
  const nextEx = getState().workout.exercises.find(e => e.id === nextExId)
  dispatch({
    type: 'PREPARE_NEXT_EXERCISE',
    id: nextExId,
    repeats: workoutLib.nextRepeats(nextEx)
  })
}

export const prepareExercises = (exercises, effort) => (dispatch) => {
  exercises.forEach(e => {
    dispatch({
      type: 'ADD_EXERCISE_TO_WORKOUT',
      exercise: {
        id: e.id,
        name: e.name,
        repeatsMax: Math.ceil(e.repeatsMax / 100 * effort),
        repeatsSetMax: e.repeatsSetMax,
        repeatsSetMin: e.repeatsSetMin,
      }
    })
  })
}

export const doRepeats = (id, repeats) => {
  return {
    type: 'DO_REPEATS',
    id,
    repeats
  }
}

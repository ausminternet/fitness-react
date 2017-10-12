import * as workoutLib from '../lib/workout'
import * as app from '../app/actions'
import * as actions from './actionTypes'

export function toggleWorkout() {
  return (dispatch, getState) => {
    getState().workout.workoutState === 'paused'
      ? dispatch({type: actions.RESUME})
      : dispatch({type: actions.PAUSE})
  }
}

export function restartWorkout() {
  return (dispatch) => {
    if (window.confirm('Restart workout?')) {
      dispatch({type: actions.RESTART, payload: Date.now()})
      dispatch(setNextExercise())
      dispatch(app.setSheet('activeWorkout'))
    }
  }
}

export function prepareRandomWorkout(effort) {
  return (dispatch, getState, {db}) => {
    dispatch({type: actions.SET_EFFORT, payload: effort})
    dispatch(addExercisesToActiveWorkout(getState().exercises, effort))
    dispatch(setNextExercise())
    dispatch({type: actions.START, payload: Date.now()})
    dispatch(app.setSheet('activeWorkout'))
    dispatch(app.openSheet())
  }
}

export function tick() {
  return (dispatch, getState) => {
    if (getState().workout.workoutState !== 'paused') {
      dispatch({
        type: actions.DO_EXERCISE,
        payload: {
          id: getState().workout.currentExercise,
          repeats: getState().workout.currentRepeats
        }
      })
      if (workoutLib.done(getState().workout.exercises)) {
        dispatch({type: actions.FINISH, payload: Date.now()})
        dispatch(app.setSheet('finishedWorkout'))
      } else {
        dispatch(setNextExercise())
      }
    }
  }
}

export function cancelWorkout() {
  return async (dispatch) => {
    if (window.confirm('Cancel workout?')) {
      await dispatch(app.closeSheet())
      dispatch(clearWorkout())
    }
  }
}

export function clearWorkout() {
  return {type: actions.CLEAR}
}

export function setNextExercise() {
  return (dispatch, getState) => {
    const exercises = getState().workout.exercises
    const currentExercise = getState().workout.currentExercise
    const nextExId = workoutLib.nextExercise(exercises, currentExercise)
    const nextEx = getState().workout.exercises.find(e => e.id === nextExId)
    dispatch({
      type: actions.SET_NEXT_EXERCISE,
      payload: {
        id: nextExId,
        repeats: workoutLib.nextRepeats(nextEx)
      }
    })
  }
}

export function addExercisesToActiveWorkout(exercises, effort) {
  return (dispatch) => {
    exercises.forEach(e => {
      dispatch({
        type: actions.ADD_EXERCISE,
        payload: {
          id: e.id,
          name: e.name,
          repeatsMax: Math.ceil(e.repeatsMax / 100 * effort),
          repeatsSetMax: e.repeatsSetMax,
          repeatsSetMin: e.repeatsSetMin,
        }
      })
    })
  }
}

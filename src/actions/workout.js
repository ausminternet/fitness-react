import config from '../data/config.json'
import { nextExercise, nextRepeats, done } from '../lib/workout'
import { createExercises, doRepeats, resetExercises } from './exercises'
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

export const toggleWorkout = () => {
  return (dispatch, getState) => {
    if (getState().workout.workoutState === 'paused') {
      dispatch(resumeWorkout())
    } else {
      dispatch(pauseWorkout())
    }
  }
}

export const restartWorkout = () => {
  return dispatch => {
    if (window.confirm('Restart workout?')) {
      dispatch(resetExercises())
      dispatch({
        type: 'RESTART_WORKOUT',
        startTime: Date.now()
      })
      dispatch(prepareNextExercise())
    }
  }
}

export const start = (effort) => {
  return (dispatch, getState) => {
    dispatch(setEffort(effort))
    dispatch(createExercises(config.exercises))
    dispatch(startWorkout())
    dispatch(prepareNextExercise())
    dispatch(app.goto('ACTIVE_WORKOUT'))
  }
}

export const tick = () => {
  return (dispatch, getState) => {
    if (getState().workout.workoutState !== 'paused') {
      dispatch(doRepeats(
        getState().workout.currentExercise,
        getState().workout.currentRepeats
      ))
      if (done(getState().exercises)) {
        dispatch(finishWorkout())
        dispatch(app.goto('WORKOUT_FINISHED'))
      } else {
        dispatch(prepareNextExercise())
      }
    }
  }
}

export const finishWorkout = () => {
  return {
    type: 'FINISH_WORKOUT',
    finishTime: Date.now()
  }
}

export const clearWorkout = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_WORKOUT'
    })
    dispatch(app.goto('INDEX'))
  }
}

export const cancelWorkout = () => {
  return (dispatch) => {
    if (window.confirm('Cancel workout?')) {
      dispatch(clearWorkout())
      dispatch(app.goto('INDEX'))
    }
  }
}

export const prepareNextExercise = () => {
  return (dispatch, getState) => {
    const nextExId = nextExercise(getState())
    const nextEx = getState().exercises.find(e => e.id === nextExId)
    dispatch({
      type: 'PREPARE_NEXT_EXERCISE',
      id: nextExId,
      repeats: nextRepeats(nextEx)
    })
  }
}

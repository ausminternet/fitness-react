import config from '../data/config.json'
import { nextExercise, nextRepeats, done } from '../lib/workout'
import { createExercises, doRepeats, resetExercises } from './exercises'

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
  }
}

export const tick = () => {
  return (dispatch, getState) => {
    if (getState().workout.workoutState !== 'paused') {
      dispatch(doRepeats(
        getState().workout.currentExercise,
        getState().workout.currentRepeats
      ))
      done(getState().exercises)
        ? dispatch(finishWorkout())
        : dispatch(prepareNextExercise())
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
  return {
    type: 'CLEAR_WORKOUT'
  }
}

export const cancelWorkout = () => {
  return (dispatch) => {
    if (window.confirm('Cancel workout?')) {
      dispatch(clearWorkout())
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

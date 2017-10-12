import * as actions from './actionTypes'

const workout = (state = {exercises: []}, action) => {
  const payload = action.payload
  switch (action.type) {
    case actions.SET_EFFORT:
      return {
        ...state,
        effort: payload
      }
    case actions.START:
      console.log(payload)
      return {
        ...state,
        workoutState: 'active',
        startTime: payload
      }
    case actions.SET_NEXT_EXERCISE:
      return {
        ...state,
        currentExercise: payload.id,
        currentRepeats: payload.repeats
      }
    case actions.DO_EXERCISE:
      return {
        ...state,
        currentRepeats: state.currentRepeats - payload.repeats,
        exercises: state.exercises.map(e => {
          if (e.id === payload.id) {
            const done = e.repeatsDone + payload.repeats
            return {...e,
              repeatsDone: done,
              isDone: done === e.repeatsMax
            }
          }
          return e
        })
      }
    case actions.FINISH:
      return {
        ...state,
        workoutState: 'finished',
        isDone: true,
        finishTime: payload
      }
    case actions.PAUSE:
      return {
        ...state,
        workoutState: 'paused'
      }
    case actions.RESUME:
      return {
        ...state,
        workoutState: 'active'
      }
    case actions.CLEAR:
      return {
        ...state,
        workoutState: 'initial',
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        effort: undefined,
        startTime: undefined,
        exercises: []
      }
    case actions.RESTART:
      return {
        ...state,
        workoutState: 'active',
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        startTime: payload,
        exercises: state.exercises.map(e => {
          return {...e,
            repeatsDone: 0,
            isDone: false
          }
        })
      }
    case actions.ADD_EXERCISE:
      payload.repeatsDone = 0
      return {
        ...state,
        exercises: [
          ...state.exercises,
          payload
        ]
      }
    default:
      return state
  }
}

export default workout

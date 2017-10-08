const workout = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EFFORT':
      return {
        ...state,
        effort: action.effort
      }
    case 'START_WORKOUT':
      return {
        ...state,
        isStarted: true,
        startTime: action.startTime
      }
    case 'PREPARE_NEXT_EXERCISE':
      return {
        ...state,
        currentExercise: action.id,
        currentRepeats: action.repeats
      }
    case 'DO_REPEATS':
      return {
        ...state,
        currentRepeats: state.currentRepeats - action.repeats
      }
    case 'FINISH_WORKOUT':
      return {
        ...state,
        isStarted: false,
        isDone: true,
        finishTime: action.finishTime
      }
    case 'CLEAR_WORKOUT':
      return {
        ...state,
        isStarted: false,
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        effort: undefined,
        startTime: undefined
      }
    case 'RESTART_WORKOUT':
      return {
        ...state,
        isStarted: true,
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        startTime: action.startTime
      }
    default:
      return state
  }
}

export default workout

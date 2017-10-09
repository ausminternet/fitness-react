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
        workoutState: 'active',
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
        workoutState: 'finished',
        isDone: true,
        finishTime: action.finishTime
      }
    case 'PAUSE_WORKOUT':
      return {
        ...state,
        workoutState: 'paused'
      }
    case 'RESUME_WORKOUT':
      return {
        ...state,
        workoutState: 'active'
      }
    case 'CLEAR_WORKOUT':
      return {
        ...state,
        workoutState: 'initial',
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        effort: undefined,
        startTime: undefined
      }
    case 'RESTART_WORKOUT':
      return {
        ...state,
        workoutState: 'active',
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

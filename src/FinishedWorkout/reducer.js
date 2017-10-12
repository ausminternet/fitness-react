const workout = (state = {exercises: []}, action) => {
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
        currentRepeats: state.currentRepeats - action.repeats,
        exercises: state.exercises.map(e => {
          if (e.id === action.id) {
            const done = e.repeatsDone + action.repeats
            return {...e,
              repeatsDone: done,
              isDone: done === e.repeatsMax
            }
          }
          return e
        })
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
        startTime: undefined,
        exercises: []
      }
    case 'RESTART_WORKOUT':
      return {
        ...state,
        workoutState: 'active',
        isDone: false,
        currentRepeats: 0,
        currentExercise: undefined,
        startTime: action.startTime,
        exercises: state.exercises.map(e => {
          return {...e,
            repeatsDone: 0,
            isDone: false
          }
        })
      }
    case 'ADD_EXERCISE_TO_WORKOUT':
      const exercise = action.exercise
      exercise.repeatsDone = 0
      return {
        ...state,
        exercises: [
          ...state.exercises,
          exercise
        ]
      }
    default:
      return state
  }
}

export default workout

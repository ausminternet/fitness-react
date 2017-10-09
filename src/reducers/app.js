const app = (state = {}, action) => {
  switch (action.type) {
    case 'GOTO_INDEX':
      return {
        ...state,
        show: 'index'
      }
    case 'GOTO_ACTIVE_WORKOUT':
      return {
        ...state,
        show: 'activeWorkout'
      }
    case 'GOTO_WORKOUT_FINISHED':
      return {
        ...state,
        show: 'workoutFinished'
      }
    case 'GOTO_LOGIN':
      return {
        ...state,
        show: 'login'
      }
    case 'GOTO_SIGNUP':
      return {
        ...state,
        show: 'signup'
      }
    case 'GOTO_USER':
      return {
        ...state,
        show: 'user'
      }
    default:
      return state
  }
}

export default app

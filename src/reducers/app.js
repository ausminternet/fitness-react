const app = (state = {appState: 'noUser'}, action) => {
  switch (action.type) {
    case 'CLEAR_WORKOUT':
      return {
        ...state,
        appState: 'initial'
      }
    case 'RESTART_WORKOUT':
    case 'START_WORKOUT':
      return {
        ...state,
        appState: 'workoutStarted'
      }
    case 'SET_EFFORT':
      return {
        ...state,
        appState: 'effortChoosen'
      }
    case 'FINISH_WORKOUT':
      return {
        ...state,
        appState: 'workoutFinished'
      }
    case 'SET_USER':
      return {
        ...state,
        appState: 'initial'
      }
    case 'UNSET_USER':
      return {
        ...state,
        appState: 'noUser'
      }
    default:
      return state
  }
}

export default app

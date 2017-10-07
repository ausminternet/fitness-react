const app = (state = {appState: 'initial'}, action) => {
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
    default:
      return state
  }
}

export default app

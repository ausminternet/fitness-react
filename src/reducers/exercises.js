const exercises = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [
        ...state,
        action.exercise
      ]
    case 'RESET_EXERCISE':
      return state.map(e => {
        return {...e,
          repeatsDone: 0,
          isDone: false
        }
      })
    case 'REMOVE_EXERCISES':
      return []
    default:
      return state
  }
}

export default exercises

const exercises = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return [
        ...state,
        action.exercise
      ]
    case 'DO_REPEATS':
      return state.map(e => {
        if (e.id === action.id) {
          const done = e.repeatsDone + action.repeats
          return {...e,
            repeatsDone: done,
            isDone: done === e.repeatsMax
          }
        }
        return e
      })
    case 'RESET_EXERCISE':
      return state.map(e => {
        return {...e,
          repeatsDone: 0,
          isDone: false
        }
      })
    case 'CLEAR_WORKOUT':
      return []
    default:
      return state
  }
}

export default exercises

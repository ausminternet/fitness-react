import Workout from '../lib/workout'

const workout = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_WOKOUT':
      return new Workout(action.config, action.effort)
    case 'START_WORKOUT':
      state.start()
      return state
    default:
      return state
  }
}

export default workout

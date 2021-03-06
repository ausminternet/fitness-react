import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from '../app/reducer'
import workout from '../activeWorkout/reducer'
import exercises from './exercises'
import user from './user'

const workoutApp = combineReducers({
  app,
  workout,
  exercises,
  user,
  router: routerReducer
})

export default workoutApp

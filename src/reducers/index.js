import { combineReducers } from 'redux'
import app from './app'
import workout from './workout'
import exercises from './exercises'
import user from './user'

const workoutApp = combineReducers({
  app,
  workout,
  exercises,
  user
})

export default workoutApp

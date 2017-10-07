import { combineReducers } from 'redux'
import app from './app'
import workout from './workout'
import exercises from './exercises'

const workoutApp = combineReducers({
  app,
  workout,
  exercises
})

export default workoutApp

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import app from './app'
import workout from './workout'
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

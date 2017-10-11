import * as app from './app'

export const addExercise = (
  id,
  name,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax
) => {
  return {
    type: 'ADD_EXERCISE',
    exercise: {
      id,
      name,
      repeatsMax,
      repeatsSetMin,
      repeatsSetMax,
      repeatsDone: 0,
    }
  }
}

export const removeExercises = () => {
  return {
    type: 'REMOVE_EXERCISES'
  }
}

export const getExercises = () => (dispatch, getState, { db }) => {
  dispatch(app.showLoader())
  db.collection('users/' + getState().user.uid + '/exercises').get()
    .then((querySnapshot) => {
      querySnapshot.forEach(e => {
        const d = e.data()
        dispatch(addExercise(
          e.id,
          d.name,
          d.repeatsMax,
          d.repeatsSetMax,
          d.repeatsSetMin
        ))
      })
      dispatch(app.hideLoader())
    }).catch(error => {
      console.log(error.code)
      console.log(error.message)
    })
}

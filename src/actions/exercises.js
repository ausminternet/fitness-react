import * as app from '../app/actions'

export function addExercise(
  id,
  name,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax
) {
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

export function removeExercises () {
  return {
    type: 'REMOVE_EXERCISES'
  }
}

export function getExercises() {
  return async (dispatch, getState, { db }) => {
    dispatch(app.showLoader())
    try {
      const collection = 'users/' + getState().user.uid + '/exercises'
      const data = await db.collection(collection).get()
      data.forEach(e => {
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
    } catch (error) {
      console.log(error.code)
      console.log(error.message)
    }
  }
}

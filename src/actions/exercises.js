export const addExercise = (
  id,
  repeatsMax,
  repeatsSetMin,
  repeatsSetMax,
  effort
) => {
  return {
    type: 'ADD_EXERCISE',
    exercise: {
      id,
      repeatsMax: Math.ceil(repeatsMax / 100 * effort),
      repeatsSetMin,
      repeatsSetMax,
      repeatsDone: 0,
    }
  }
}

export const doRepeats = (id, repeats) => {
  return {
    type: 'DO_REPEATS',
    id,
    repeats
  }
}

export const resetExercises = (id) => {
  return (dispatch, getState) => {
    Array.from(getState().exercises).forEach(e => {
      dispatch({
        type: 'RESET_EXERCISE',
        id
      })
    })
  }
}

export const createExercises = (exercises) => {
  return (dispatch, getState) => {
    Array.from(exercises).forEach(e => {
      dispatch(addExercise(
        e.id,
        e.repeats.max,
        e.repeats.setMin,
        e.repeats.setMax,
        getState().workout.effort
      ))
    })
  }
}

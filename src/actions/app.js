import * as exercises from './exercises'

export const prepareAppAfterLogin = () => (dispatch) =>
  dispatch(exercises.getExercises())

export const cleanUpOnLogout = () => (dispatch) =>
  dispatch(exercises.removeExercises())

export const showLoader = (text) => {
  return {
    type: 'SHOW_LOADER',
    text
  }
}

export const hideLoader = () => {
  return {
    type: 'HIDE_LOADER'
  }
}

export const openSheet = () => (dispatch) => {
  dispatch({type: 'OPENING_SHEET'})
  return new Promise((resolve) => {
    window.setTimeout(() => {
      dispatch({type: 'OPEN_SHEET'})
      resolve()
    }, 300)
  })
}

export const closeSheet = () => (dispatch) => {
  dispatch({type: 'CLOSING_SHEET'})
  return new Promise((resolve) => {
    window.setTimeout(() => {
      dispatch({type: 'CLOSE_SHEET'})
      resolve()
    }, 300)
  })
}

export const setSheet = (sheet) => {
  return ({
    type: 'SET_SHEET',
    sheet
  })
}

export const goto = (view) => {
  return {
    type: 'GOTO_' + view
  }
}

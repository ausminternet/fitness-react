import * as exercises from '../actions/exercises'
import * as actions from './actionTypes'

export function prepareAppAfterLogin() {
  return (dispatch) => {
    dispatch(exercises.getExercises())
  }
}

export function cleanUpOnLogout() {
  return (dispatch) => {
    dispatch(exercises.removeExercises())
  }
}

export function showLoader(text) {
  return {type: actions.SHOW_LOADER, text}
}

export function hideLoader() {
  return {type: actions.HIDE_LOADER}
}

export function setSheet(sheet) {
  return {type: actions.SET_SHEET, sheet}
}

export function goto(view) {
  return {type: actions.GOTO_VIEW, view}
}

export function openSheet() {
  return (dispatch) => {
    dispatch({type: actions.OPEN_SHEET})
    return new Promise((resolve) => {
      window.setTimeout(() => {
        dispatch({type: actions.SHEET_OPENED})
        resolve()
      }, 300)
    })
  }
}

export function closeSheet() {
  return (dispatch) => {
    dispatch({type: actions.CLOSE_SHEET})
    return new Promise((resolve) => {
      window.setTimeout(() => {
        dispatch({type: actions.SHEET_CLOSED})
        resolve()
      }, 300)
    })
  }
}

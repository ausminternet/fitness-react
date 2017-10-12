import * as actions from './actionTypes'

const initialAppState = {
  view: 'login',
  showLoader: true,
  loaderText: '',
  sheetState: 'closed',
  sheet: ''
}

const app = (state = initialAppState, action) => {
  switch (action.type) {
    case actions.GOTO_VIEW:
      return {...state,
        view: action.view
      }
    case actions.SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
        loaderText: action.text
      }
    case actions.HIDE_LOADER:
      return {
        ...state,
        showLoader: false,
        loaderText: ''
      }
    case actions.SET_SHEET:
      return {
        ...state,
        sheet: action.sheet
      }
    case actions.OPEN_SHEET:
      return {
        ...state,
        sheetState: 'opening',
      }
    case actions.SHEET_OPENED:
      return {
        ...state,
        sheetState: 'open',
      }
    case actions.CLOSE_SHEET:
      return {
        ...state,
        sheetState: 'closing',
      }
    case actions.SHEET_CLOSED:
      return {
        ...state,
        sheet: '',
        sheetState: 'closed',
      }
    default:
      return state
  }
}

export default app

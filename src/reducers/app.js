const initialAppState = {
  view: 'login',
  showLoader: true,
  loaderText: '',
  sheetState: 'closed',
  sheet: ''
}

const app = (state = initialAppState, action) => {
  switch (action.type) {
    case 'GOTO_INDEX':
      return {
        ...state,
        view: 'index'
      }
    case 'GOTO_ACTIVE_WORKOUT':
      return {
        ...state,
        view: 'activeWorkout'
      }
    case 'GOTO_WORKOUT_FINISHED':
      return {
        ...state,
        view: 'workoutFinished'
      }
    case 'GOTO_LOGIN':
      return {
        ...state,
        view: 'login'
      }
    case 'GOTO_SIGNUP':
      return {
        ...state,
        view: 'signup'
      }
    case 'GOTO_USER':
      return {
        ...state,
        view: 'user'
      }
    case 'SHOW_LOADER':
      return {
        ...state,
        showLoader: true,
        loaderText: action.text
      }
    case 'OPENING_SHEET':
      console.log('opening sheet')
      return {
        ...state,
        sheetState: 'opening',
      }
    case 'OPEN_SHEET':
      console.log('open sheet')
      return {
        ...state,
        sheetState: 'open',
        sheet: action.sheet
      }
    case 'SET_SHEET':
      console.log('set sheet')
      return {
        ...state,
        sheet: action.sheet
      }
    case 'CLOSING_SHEET':
      console.log('closing sheet')
      return {
        ...state,
        sheetState: 'closing',
      }
    case 'CLOSE_SHEET':
      console.log('close sheet')
      return {
        ...state,
        sheet: '',
        sheetState: 'closed',
      }
    case 'HIDE_LOADER':
      return {
        ...state,
        showLoader: false,
        loaderText: ''
      }
    default:
      return state
  }
}

export default app

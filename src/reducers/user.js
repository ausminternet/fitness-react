const user = (state = {userState: 'loggedOut'}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        email: action.email,
        uid: action.uid,
        displayName: action.displayName,
      }
    case 'UNSET_USER':
      return {
        ...state,
        email: null,
        uid: null,
        displayName: null,
      }
    case 'LOGGING_IN':
      return {
        ...state,
        userState: 'loggingIn'
      }
    case 'LOGGED_IN':
      return {
        ...state,
        userState: 'loggedIn'
      }
    case 'LOGGING_OUT':
      return {
        ...state,
        userState: 'loggingOut'
      }
    case 'LOGGED_OUT':
      return {
        ...state,
        userState: 'loggedOut'
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        userState: 'loginFailed'
      }
    case 'CHECK_IF_LOGGED_IN':
      return {
        ...state,
        userState: 'checkingLogin'
      }
    case 'SIGNING_UP':
      return {
        ...state,
        userState: 'signingUp'
      }
    default:
      return state
  }
}

export default user

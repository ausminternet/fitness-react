const user = (state = {userState: 'loggedOut'}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        email: action.email,
        uid: action.uid,
        displayName: action.displayName,
        userState: 'loggedIn'
      }
    case 'LOGGING_IN':
      return {
        ...state,
        userState: 'loggingIn'
      }
    case 'LOGGING_OUT':
      return {
        ...state,
        userState: 'loggingOut'
      }
    case 'UNSET_USER':
      return {
        userState: 'loggedOut'
      }
    case 'LOGIN_FAILED':
      return {
        userState: 'loginFailed'
      }
    case 'SET_LOGIN_BUTTON_CLICKED':
      return {
        userState: 'loginButtonCLicked'
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

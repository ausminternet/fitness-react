import * as app from './app'

export const checkLogin = () => {
  return (dispatch, getState, {api, db}) => {
    dispatch(setLoginStateToCheckIfLoggedIn())
    api.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user.email, user.uid, user.displayName))
        dispatch(app.goto('INDEX'))
      } else {
        dispatch(unsetUser())
        dispatch(app.goto('LOGIN'))
      }
    })
  }
}

export const checkSignup = (email, password, name) => {
  return (dispatch, getState, {api, db}) => {
    dispatch(setLoginStateToSigningUp())
    api.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      console.log(error.code, error.message)
    })
  }
}

const setLoginStateToCheckIfLoggedIn = () => {
  return {
    type: 'CHECK_IF_LOGGED_IN'
  }
}

const setLoginStateToSigningUp = () => {
  return {
    type: 'SIGNING_UP'
  }
}

export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginStateToLoggingIn())
    dispatch(loginToapi(email, password))
  }
}

export const logout = () => {
  return dispatch => {
    if (window.confirm('Logout, sure?')) {
      dispatch(setLoginStateToLoggingOut())
      dispatch(logoutFromapi())
    }
  }
}

export const loginButtonClicked = () => {
  return {
    type: 'SET_LOGIN_BUTTON_CLICKED'
  }
}

const setLoginStateToLoggingIn = () => {
  return {
    type: 'LOGGING_IN'
  }
}

const setLoginStateToLoggingOut = () => {
  return {
    type: 'LOGGING_OUT'
  }
}

const setUser = (email, uid, displayName) => {
  return {
    type: 'SET_USER',
    uid,
    email,
    displayName
  }
}

const unsetUser = () => {
  return {
    type: 'UNSET_USER',
  }
}

const setLoginStateToError = () => {
  return {
    type: 'LOGIN_FAILED'
  }
}

const loginToapi = (email, password) => {
  return (dispatch, getState, {api, db}) => {
    return api.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        dispatch(setUser(data.email, data.uid, data.displayName))
        dispatch(app.goto('INDEX'))
      })
      .catch(error => {
        console.log(error)
        dispatch(setLoginStateToError())
      })
  }
}

const logoutFromapi = () => {
  return (dispatch, getState, {api, db}) => {
    return api.auth().signOut()
      .then(data => {
        dispatch(unsetUser())
        dispatch(app.goto('LOGIN'))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

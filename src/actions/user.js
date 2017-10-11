import * as app from './app'

const setLoginStateTo = (type) => {
  return {
    type
  }
}

export const checkLogin = () => (dispatch, getState, {api}) => {
  api.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(postLogin(user))
    } else {
      dispatch(setLoginStateTo('LOGGED_OUT'))
      dispatch(app.hideLoader())
    }
  })
}

export const login = (email, password) => dispatch => {
  dispatch(setLoginStateTo('LOGGING_IN'))
  dispatch(loginToApi(email, password))
    .catch(error => {
      console.log(error)
      dispatch(setLoginStateTo('LOGIN_FAILED'))
    })
}

export const postLogin = (userData) => dispatch => {
  dispatch(setUser(userData.email, userData.uid, userData.displayName))
  dispatch(app.prepareAppAfterLogin())
  dispatch(setLoginStateTo('LOGGED_IN'))
  dispatch(app.goto('INDEX'))
}

export const postLogout = () => dispatch => {
  dispatch(unsetUser())
  dispatch(app.cleanUpOnLogout())
  dispatch(setLoginStateTo('LOGGED_OUT'))
  dispatch(app.goto('LOGIN'))
}

const loginToApi = (email, password) => (dispatch, getState, {api, db}) =>
  api.auth().signInWithEmailAndPassword(email, password)

const setUser = (email, uid, displayName) => {
  return {
    type: 'SET_USER',
    uid,
    email,
    displayName
  }
}

export const logout = () => dispatch => {
  if (window.confirm('Logout, sure?')) {
    dispatch(setLoginStateTo('LOGGING_OUT'))
    dispatch(logoutFromApi())
      .then(dispatch(postLogout()))
      .catch(error => {
        console.log(error)
      })
  }
}

const logoutFromApi = () => (dispatch, getState, {api, db}) =>
  api.auth().signOut()

const unsetUser = () => {
  return {
    type: 'UNSET_USER',
  }
}

export const checkSignup = (email, password, name) => {
  return (dispatch, getState, {api, db}) => {
    dispatch(setLoginStateTo('SIGNING_UP'))
    api.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      console.log(error.code, error.message)
    })
  }
}

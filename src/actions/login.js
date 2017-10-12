import * as app from '../app/actions'

export function setLoginStateTo(type) {
  return {type}
}

export function checkLogin() {
  return (dispatch, getState, {api}) => {
    api.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(postLogin(user))
      } else {
        dispatch(setLoginStateTo('LOGGED_OUT'))
        dispatch(app.hideLoader())
      }
    })
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginStateTo('LOGGING_IN'))
    dispatch(loginToApi(email, password))
      .catch(error => {
        console.log(error)
        dispatch(setLoginStateTo('LOGIN_FAILED'))
      })
  }
}

export function postLogin(userData) {
  return dispatch => {
    dispatch(setUser(userData.email, userData.uid, userData.displayName))
    dispatch(app.prepareAppAfterLogin())
    dispatch(setLoginStateTo('LOGGED_IN'))
    dispatch(app.goto('index'))
  }
}

export function postLogout() {
  return dispatch => {
    dispatch(unsetUser())
    dispatch(app.cleanUpOnLogout())
    dispatch(setLoginStateTo('LOGGED_OUT'))
    dispatch(app.goto('login'))
  }
}

function loginToApi(email, password) {
  return (dispatch, getState, {api, db}) =>
    api.auth().signInWithEmailAndPassword(email, password)
}

function setUser(email, uid, displayName) {
  return {
    type: 'SET_USER',
    uid,
    email,
    displayName
  }
}

export function logout() {
  return dispatch => {
    if (window.confirm('Logout, sure?')) {
      dispatch(setLoginStateTo('LOGGING_OUT'))
      dispatch(logoutFromApi())
        .then(dispatch(postLogout()))
        .catch(error => {
          console.log(error)
        })
    }
  }
}

function logoutFromApi() {
  return (dispatch, getState, {api, db}) =>
    api.auth().signOut()
}

function unsetUser() {
  return {
    type: 'UNSET_USER',
  }
}

export function checkSignup(email, password, name) {
  return (dispatch, getState, {api, db}) => {
    dispatch(setLoginStateTo('SIGNING_UP'))
    api.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      console.log(error.code, error.message)
    })
  }
}

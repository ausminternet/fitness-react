import firebaseConfig from '../data/firebaseConfig'
import * as firebase from 'firebase'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)

export const checkLogin = () => {
  return dispatch => {
    dispatch(setLoginStateToCheckIfLoggedIn())
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user.email, user.uid, user.displayName))
      } else {
        dispatch(unsetUser())
      }
    })
  }
}

const setLoginStateToCheckIfLoggedIn = () => {
  return {
    type: 'CHECK_IF_LOGGED_IN'
  }
}

export const login = (email, password) => {
  return dispatch => {
    dispatch(setLoginStateToLoggingIn())
    dispatch(loginToFirebase(email, password))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(setLoginStateToLoggingOut())
    dispatch(logoutFromFirebase())
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

const loginToFirebase = (email, password) => {
  return dispatch => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        dispatch(setUser(data.email, data.uid, data.displayName))
      })
      .catch(error => {
        console.log(error)
        dispatch(setLoginStateToError())
      })
  }
}

const logoutFromFirebase = () => {
  return dispatch => {
    return firebase.auth().signOut()
      .then(data => {
        dispatch(unsetUser())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

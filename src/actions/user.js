export function setUser(email, uid, displayName) {
  return {
    type: 'SET_USER',
    uid,
    email,
    displayName
  }
}

export function unsetUser() {
  return {
    type: 'UNSET_USER',
  }
}

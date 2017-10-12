export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createAction(actionType, payload = {}) {
  return {
    type: actionType,
    payload
  }
}

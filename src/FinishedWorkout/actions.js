import * as app from '../app/actions'
import { clearWorkout } from '../activeWorkout/actions'

export function endWorkout() {
  return async (dispatch) => {
    await dispatch(app.closeSheet())
    dispatch(clearWorkout())
  }
}

import config from '../data/config.json'

const createInitialState = () => {
  return {
    workout: {
      isStarted: false,
      isDone: false,
      currentExercise: undefined,
      exercises: Array.from(config.exercises).map(e => {
        return {
          type: e.type,
          isDone: false,
          repeats: {
            max: e.repeats.max,
            setMin: e.repeats.setMin,
            setMax: e.repeats.setMax,
            done: 0,
          }
        }
      })
    }
  }
}

export default createInitialState

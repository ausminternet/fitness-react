export const startWorkout = (effort, config) => {
  return {
    type: 'START_WORKOUT',
    config,
    effort
  }
}

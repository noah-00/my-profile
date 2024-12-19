/**
 * Returns the number of years since the start date.(2020-06-01)
 */
export const getExperienceYears = () => {
  const startDate = new Date('2020-06-01')
  const now = new Date()
  const diff = now.getTime() - startDate.getTime()
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) - 1
  return years
}

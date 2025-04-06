/**
 * Returns the number of years since the start date.(2020-06-01)
 */
export const getExperienceYears = () => {
  const startDate = new Date('2020-06-01')
  const now = new Date()

  const yearDiff = now.getFullYear() - startDate.getFullYear()
  const monthDiff = now.getMonth() - startDate.getMonth()
  const dayDiff = now.getDate() - startDate.getDate()

  const blankPeriod = 12

  let totalMonths = yearDiff * 12 + monthDiff - blankPeriod
  if (dayDiff < 0) {
    totalMonths -= 1
  }

  let years = Math.floor(totalMonths / 12)
  const remainingMonths = totalMonths % 12

  if (remainingMonths >= 6) {
    years += 1
  }

  return years
}

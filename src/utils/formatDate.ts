export function getAfterDays(days: number) {
  const today = new Date().getTime()
  const argDay = 1000 * 60 * 60 * 24 * days
  return new Date(today + argDay)
}

export function getDiffDays(date: Date) {
  const today = new Date().getTime()
  const dueDate = date.getTime()
  const remainingDate = dueDate - today

  return Math.round(remainingDate / (1000 * 60 * 60 * 24))
}

export const convertTimeToString = (timestamp: number) => {
  const dateObj = new Date(timestamp * 1000)
  const seconds = dateObj.getSeconds()
  const minutes = dateObj.getUTCMinutes()
  const isOverDay = dateObj.getDate() > 1
  let hours = isOverDay ? 24 * (dateObj.getDate() - 1) : dateObj.getUTCHours()

  return (
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')
  )
}

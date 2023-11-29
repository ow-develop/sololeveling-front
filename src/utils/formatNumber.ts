import { KeyboardEvent } from 'react'

export function truncateDecimals(number: number, digits: number) {
  const multiplier = Math.pow(10, digits)
  const adjustedNum = number * multiplier
  const truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum)

  return truncatedNum / multiplier
}

export function toFixedNum(num: number, size: number = 2): number {
  return Number(num.toFixed(size))
}

export function convertToLocale(
  num: number | string,
  size: number = 2
): string {
  return toFixedNum(Number(num), size).toLocaleString(undefined, {
    maximumFractionDigits: size
  })
}

export function getDiffPercent(pivotNum: number, num: number) {
  return Math.round(((pivotNum - num) / pivotNum) * 100)
}

export function abbreviateNumber(value: number) {
  const suffixes = ['', 'k', 'm', 'b', 't']
  let newValue = String(value)

  if (value >= 1000) {
    const suffixNum = Math.floor(('' + value).length / 3)
    let shortValue = 0
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum != 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      )

      const dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '')
      if (dotLessShortValue.length <= 2) {
        break
      }
    }
    if (shortValue % 1 != 0) shortValue = Number(shortValue.toFixed(1))
    newValue = shortValue + suffixes[suffixNum]
  }

  return newValue
}

export function replaceInputNumber(value: string) {
  const regex = /[^0-9.]/g
  return value.replace(regex, '')
}

export function rejectKeycode(e: KeyboardEvent<HTMLInputElement>) {
  const rejectKeycodeArray = ['-', '+', 'e', 'E', '=', '_', 'Shift']
  const even = (element: string) => element === e.key

  if (rejectKeycodeArray.some(even)) e.preventDefault()
}

export const numberToDigits = (formatNumber: number, maxLength = 2) => {
  if (typeof formatNumber !== 'number') return '00'
  return String(formatNumber).padStart(maxLength, '0')
}

export function calculateNextPage(
  pageTotal: number,
  all: number,
  size: number = 15
) {
  const isMaxSize = Math.ceil(pageTotal / size) <= all
  return isMaxSize ? undefined : all + 1
}

export const convertZero = (num: number) => {
  return num === 0 ? '-' : num
}

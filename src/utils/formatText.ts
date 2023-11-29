import { Regex } from '~/constants/form'

export const insertSpacesBehindUppercase = (text: string) => {
  return text.replaceAll(/([A-Z])/g, ' $1').trim()
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// TODO: [Hank] 양쪽 떼내는 함수 만들 예정
export const splitAddress = (address: string) => {
  if (!address) return 'Null Address'
  const firstAddress = address.slice(0, 5)
  const lastAddress = address.slice(-4, address.length)
  return `${firstAddress}...${lastAddress}`
}

export const convertNewLineToHtml = (text: string) => {
  return text.replaceAll(Regex.NEW_LINE, '<br />')
}

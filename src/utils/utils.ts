export const isPC = () => {
  if (!navigator) return false

  return navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/
  )
}

export const isGoogleInvalidBrowser = () => {
  if (!navigator) return false

  return navigator.userAgent.match(/(KAKAOTALK|NAVER)/)
}

import { useEffect } from 'react'

const usePreventBodyScroll = () => {
  const initScroll = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    document.querySelector('html').classList.add('overlay')

    return () => {
      document.querySelector('html').classList.remove('overlay')
      const scrollY = document.body.style.top
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  return { initScroll }
}

export default usePreventBodyScroll

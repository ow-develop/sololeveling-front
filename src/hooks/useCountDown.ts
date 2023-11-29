import { useCallback, useEffect, useRef } from 'react'

export function useCountDown() {
  const ref = useRef<number>()
  const startCountDown = useCallback((callback: Function, timer: number) => {
    ref.current = window.setTimeout(() => {
      callback()
    }, timer)
  }, [])

  useEffect(() => {
    return () => clearTimeout(ref.current)
  }, [])

  return { startCountDown }
}

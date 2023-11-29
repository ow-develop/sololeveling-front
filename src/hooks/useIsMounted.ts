import { useEffect, useState } from 'react'

function useIsMounted(type?: 'delay') {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (type === 'delay') {
      timeout = setTimeout(() => setMounted(true), 500)
    } else {
      setMounted(true)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [])

  return mounted
}

export default useIsMounted

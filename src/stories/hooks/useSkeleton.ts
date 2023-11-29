import { useEffect, useState } from 'react'

const useSkeleton = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(true), 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return {
    loading
  }
}

export default useSkeleton

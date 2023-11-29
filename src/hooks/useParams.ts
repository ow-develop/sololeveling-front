import { useRouter } from 'next/router'

const useParams = (key: string) => {
  const { query } = useRouter()
  return query[key] as string
}

export default useParams

import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

interface AuthCondition {
  id: string
  pwd: string
  available: boolean
}
interface Value {
  id: string
  pwd: string
}

const DevAccountMap: Record<string, AuthCondition> = {
  // env와 동일한 id,pwd 작성
  otherworld: {
    id: process.env.NEXT_PUBLIC_DEV_AUTH1_ID,
    pwd: process.env.NEXT_PUBLIC_DEV_AUTH1_PWD,
    available: true
  },
  a: {
    id: process.env.NEXT_PUBLIC_DEV_AUTH2_ID,
    pwd: process.env.NEXT_PUBLIC_DEV_AUTH2_PWD,
    available: true
  },
  Cube: {
    id: process.env.NEXT_PUBLIC_DEV_AUTH3_ID,
    pwd: process.env.NEXT_PUBLIC_DEV_AUTH3_PWD,
    available: true
  },
  Binance: {
    id: process.env.NEXT_PUBLIC_DEV_AUTH4_ID,
    pwd: process.env.NEXT_PUBLIC_DEV_AUTH4_PWD,
    available: true
  }
}

const KEY = 'DEV_AUTH'

const useDevAuth = () => {
  const sessionLogin =
    typeof window !== 'undefined' && localStorage.getItem(KEY)

  const [value, setValue] = useState<Value>({ id: '', pwd: '' })
  const [isValid, setIsValid] = useState(false)
  const [isInputErr, setIsInputErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrMsg('')
    const { value, name } = e.target
    setValue((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!value.id || !value.pwd) {
      setIsInputErr(true)
      return
    }
    const unAvailable = !DevAccountMap[value.id]?.['available']
    const idInvalid = !Object.keys(DevAccountMap).includes(value.id)
    const pwdInvalid = DevAccountMap[value.id]?.['pwd'] !== value.pwd

    if (idInvalid || pwdInvalid) {
      setIsInputErr(true)
      setErrMsg('Incorrect ID or password')
    } else if (unAvailable) {
      setErrMsg('Account access denied')
    }

    if (!unAvailable && !idInvalid && !pwdInvalid) {
      setIsValid(true)
      localStorage.setItem(KEY, 'true')
      router.reload()
    }
  }

  return {
    sessionLogin,
    isValid,
    isInputErr,
    errMsg,
    onChange: handleChange,
    onSubmit: handleSubmit
  }
}

export default useDevAuth

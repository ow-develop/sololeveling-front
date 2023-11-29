import { useToast } from '@ow-develop/ow-design-system'
import { debounce } from 'lodash-es'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { copy } from 'clipboard'

// FIXME 수정 필요
const useToastAction = () => {
  const { setToast } = useToast()
  const { t } = useTranslation()

  const copyToast = (copyValue: string, toastMessage: string) => {
    copy(copyValue)
    setToast(t(toastMessage), { type: 'success' })
  }

  const showSuccessToast = useCallback(
    debounce((toastMessage: string) => {
      if (toastMessage) {
        setToast(t(toastMessage), {
          type: 'success',
          autoClose: 3000
        })
      }
    }, 1000),
    []
  )

  const showFailToast = useCallback(
    debounce((toastMessage: string) => {
      if (toastMessage) {
        setToast(t(toastMessage), {
          type: 'error',
          autoClose: 3000
        })
      }
    }, 1000),
    []
  )

  return { copyToast, showSuccessToast, showFailToast }
}

export default useToastAction

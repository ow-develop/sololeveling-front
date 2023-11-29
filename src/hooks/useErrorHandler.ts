import { useToast } from '@ow-develop/ow-design-system'
import { ethers } from 'ethers'

import { ErrorMessage } from '~/constants/message'
import {
  errorConfig,
  getContractExceptionText
} from '~/lib/ethers-error-handler'
import { useI18next } from '~/lib/i18n'

const ContractErrorMessage: Partial<
  Record<(typeof errorConfig)[keyof typeof errorConfig], string>
> = {
  InvalidPrice:
    'Due to market fluctuations, your actual purchase amount have changed. Please check the price and try again.'
}

const useErrorHandler = () => {
  const { t } = useI18next()
  const { setToast } = useToast()

  const showErrorToast = (message: string) =>
    setToast(t(message), { type: 'error', autoClose: 2000 })

  const errorHandler = (error: any) => {
    console.error(error)

    const contractThrownErrorCode = getContractExceptionText(error)
    console.error('CONTRACT_EMIT_ERROR_CODE', contractThrownErrorCode)

    // 사용자가 던지는 에러
    if (!error.code && error.message) {
      return showErrorToast(t(error.message))
    }

    // 컨트랙트가 던지는 에러
    const commonErrorMap = {
      [-32603]: () => showErrorToast(t(ErrorMessage.INSUFFICIENT_FUNDS)),
      [ethers.errors.ACTION_REJECTED]: () =>
        showErrorToast(t(ErrorMessage.ACTION_REJECTED)),
      [ethers.errors.TIMEOUT]: () => showErrorToast(t(ErrorMessage.TIMEOUT)),
      [ethers.errors.UNPREDICTABLE_GAS_LIMIT]: () =>
        showErrorToast(t(ErrorMessage.TRANSACTION_FAILURE)),
      ['DEFAULT']: () => showErrorToast(t(ErrorMessage.TRANSACTION_FAILURE))
    }

    const noti = commonErrorMap[error.code] ?? commonErrorMap['DEFAULT']
    noti()
  }

  return { errorHandler, setToast, showErrorToast }
}

export default useErrorHandler

import { useState } from 'react'

import useErrorHandler from '~/hooks/useErrorHandler'
import useModal from '~/hooks/useModal'

export interface TransactionHandlerOptions {
  onSuccess?: () => any
  onError?: () => any
  onSettled?: () => any
  notUseLoading?: boolean
  errorText?: string
}

const useTransactionHandler = () => {
  const [loading, setLoading] = useState(false)
  const { openLoadingModal, closeLoadingModal } = useModal()
  const { errorHandler, showErrorToast } = useErrorHandler()

  const transaction = async ({
    onSuccess,
    onError,
    onSettled,
    notUseLoading
  }: TransactionHandlerOptions) => {
    try {
      setLoading(true)
      if (!notUseLoading) openLoadingModal()
      await onSuccess?.()
    } catch (error) {
      errorHandler(error)
      onError?.()
    } finally {
      setLoading(false)
      if (!notUseLoading) closeLoadingModal()
      onSettled?.()
    }
  }

  return {
    transaction,
    loading
  }
}

export default useTransactionHandler

import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import AsyncBoundary from '../async-boundary'

import { loadingModalState, modalState, showModalState } from '~/atoms/modal'
import TransactionLoading from '~/common/loading/transaction-loading'
import useModal from '~/hooks/useModal'

const Modal = () => {
  const [children, setChildren] = useRecoilState(modalState)
  const isShowLoadingModal = useRecoilValue(loadingModalState)
  const router = useRouter()
  const [isOpenModal, setIsOpenModal] = useRecoilState(showModalState)

  useEffect(() => {
    if (isOpenModal) {
      setIsOpenModal(false)
      setChildren(null)
    }
  }, [router])

  return (
    <AnimatePresence>
      {isOpenModal && (
        <AsyncBoundary loadingComponent={<></>}>{children}</AsyncBoundary>
      )}
      {isShowLoadingModal && <TransactionLoading />}
    </AnimatePresence>
  )
}

export default Modal

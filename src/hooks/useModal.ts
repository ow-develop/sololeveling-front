import { ReactNode, useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'

import { loadingModalState, modalState, showModalState } from '~/atoms/modal'

const useModal = () => {
  const [, setModal] = useRecoilState(modalState)
  const [, setShowModal] = useRecoilState(showModalState)
  const [, setLoadingModal] = useRecoilState(loadingModalState)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleModal = useCallback(
    (children: ReactNode) => {
      setShowModal(true)
      setModal(children)
      setIsOpenModal(true)
    },
    [setModal, setShowModal]
  )

  const handleClose = useCallback(() => {
    setModal(null)
    setShowModal(false)
    setIsOpenModal(false)
  }, [setModal, setShowModal])

  const handleLoadingModal = useCallback(
    (show: boolean) => {
      setLoadingModal(show)
    },
    [setLoadingModal]
  )

  return {
    isOpen: isOpenModal,
    openModal: handleModal,
    closeModal: handleClose,
    openLoadingModal: () => handleLoadingModal(true),
    closeLoadingModal: () => handleLoadingModal(false)
  }
}

export default useModal

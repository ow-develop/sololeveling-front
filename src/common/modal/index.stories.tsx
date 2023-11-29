import { Button } from '@ow-develop/ow-design-system'

import ModalLayout from '~/common/modal/modal-layout'
import ModalHeader from '~/common/modal/modal-layout/modal-header'
import useModal from '~/hooks/useModal'

export default {
  title: 'common/Modal'
}

const Template = () => {
  return (
    <ModalLayout>
      <ModalHeader title='Clear Now' />
      ddd
    </ModalLayout>
  )
}

export const Default = () => {
  const { isOpen, openModal } = useModal()

  return (
    <Button onClick={() => openModal(<Template />)}>
      {isOpen ? 'Show' : 'Hide'}
    </Button>
  )
}

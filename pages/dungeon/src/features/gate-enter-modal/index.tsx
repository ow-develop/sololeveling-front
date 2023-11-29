import GateBuyEnter from './gate-buy-enter'
import GateEnterApprove from './gate-enter-approve'
import GateKeyEnter from './gate-key-enter'

import ModalLayout from '~/common/modal/modal-layout'

interface Props {
  type?: 'approve' | 'enter' | 'buy-enter'
}

const GateEnterModal = ({ type }: Props) => {
  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header title='Gate Enter' />
      {type === 'approve' && <GateEnterApprove />}
      {type === 'enter' && <GateKeyEnter />}
      {type === 'buy-enter' && <GateBuyEnter />}
    </ModalLayout>
  )
}

export default GateEnterModal

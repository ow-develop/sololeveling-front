import GateClearApprove from './gate-clear-approve'
import GateClearNow from './gate-clear-now'

import ModalLayout from '~/common/modal/modal-layout'

interface Props {
  type?: 'approve' | 'clear'
}

const GateClearModal = ({ type }: Props) => {
  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header title='Clear now' />
      {type === 'approve' && <GateClearApprove />}
      {type === 'clear' && <GateClearNow />}
    </ModalLayout>
  )
}

export default GateClearModal

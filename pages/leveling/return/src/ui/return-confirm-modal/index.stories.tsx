import { ComponentMeta } from '@storybook/react'
import { useEffect } from 'react'

import ReturnConfirmModal from './index'

import DemoImage from '~/assets/image/rank/rank_a.webp'
import useModal from '~/hooks/useModal'

export default {
  title: 'leveling/return/Return Confirm Modal',
  component: ReturnConfirmModal
} as ComponentMeta<typeof ReturnConfirmModal>

export const Default = () => {
  const { openModal } = useModal()

  const showModal = () => {
    openModal(
      <ReturnConfirmModal onClick={async () => {}}>
        {Array(5)
          .fill('')
          .map((_, idx) => (
            <ReturnConfirmModal.List
              key={idx}
              type='Monster'
              title='Ice Elves'
              imgUrl={DemoImage.toString()}
              amount={10}
              isShadow={true}
            />
          ))}
      </ReturnConfirmModal>
    )
  }

  useEffect(() => {
    showModal()
  }, [])

  return <button onClick={showModal}>SHOW</button>
}

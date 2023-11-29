import { Button } from '@ow-develop/ow-design-system'
import { ArrowForwardIcon } from '@ow-develop/ow-icons/react/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect } from 'react'

import LevelingConfirmModal from './index'

import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import SvgIcon from '~/common/svg-icon'
import useModal from '~/hooks/useModal'

export default {
  title: 'leveling/System confirm modal',
  component: LevelingConfirmModal,
  argTypes: {
    title: {
      description: '상단에 표시되는 타이틀 정보입니다',
      defaultValue: 'Upgrade',
      type: 'string'
    },
    notification: {
      description: '하단 경고 메세지 정보입니다',
      defaultValue: 'Items will be burned after upgrade.',
      type: 'string'
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          'Modal 공통 내용은 해당 컴포넌트의 Props로 입력하고, 보여지는 Rank 컴포넌트는 내부 Item 컴포넌트를 사용하여 결합합니다.'
      }
    }
  }
} as ComponentMeta<typeof LevelingConfirmModal>

export const Default: ComponentStory<typeof LevelingConfirmModal> = (args) => {
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(
      <LevelingConfirmModal {...args}>
        <LevelingConfirmModal.Item
          title='Essence Stone'
          imgUrl={EssenceStoneImage.toString()}
          amount={3}
        />
        <SvgIcon icon={<ArrowForwardIcon />} color='icon-weak' size={20} />
        <LevelingConfirmModal.Item
          title='Essence Stone'
          imgUrl={EssenceStoneImage.toString()}
          amount={1}
        />
      </LevelingConfirmModal>
    )
  }

  useEffect(() => {
    handleClick()
  }, [])

  return <Button onClick={handleClick}>open</Button>
}

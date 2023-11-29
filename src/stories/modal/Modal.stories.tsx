import Layout from '~/stories/Layout'
import { Button } from '@ow-develop/ow-design-system'
import useModal from '~/hooks/useModal'
import StoryModalLayout, { StoryModalProps } from '~/stories/modal/modal-layout'
import StoryModalHeader from '~/stories/modal/modal-layout/modal-header'
import FullWidthImage from '~/common/image/full-width-image'
import RankEImg from '~/assets/image/key/gate_key_e.webp'
import { ImgBox } from '../../../pages/src/app/rank-claim/rank-claim-modal/style'
import React from 'react'
import { ButtonBox, TextUnit } from '~/common/modal/event-modal/style'
import DemoTransaction from '~/stories/modal/DemoTransaction'
import TransactionLoading from '~/common/loading/transaction-loading'

export default {
  title: 'demo/Modal'
  // decorators: [
  //   (Story: any) => (
  //     <Layout
  //       title={'Dungeon'}
  //       description={'Enter gate and clear to earn Monsters.'}
  //     >
  //       <Story />
  //     </Layout>
  //   )
  // ]
}

export const Animations = () => {
  const { isOpen, openModal } = useModal()

  const onClick = (type: StoryModalProps['animateType']) => {
    openModal(
      <StoryModalLayout animateType={type} contentWidth='sm'>
        <StoryModalHeader title='TEST' />

        <ImgBox>
          <FullWidthImage src={RankEImg.src} />
        </ImgBox>

        <TextUnit>
          A Gate key to open E-Rank Dungeon. Want to get today’s free item?
        </TextUnit>

        <ButtonBox>
          <Button width='fill' variant='tertiary' size='sm'>
            {'Get from Shop later'}
          </Button>
          <Button width='fill' variant='primary' size='sm'>
            {'Claim'}
          </Button>
        </ButtonBox>
      </StoryModalLayout>
    )
  }

  const list: StoryModalProps['animateType'][] = [
    'fadeIn',
    'dropIn',
    'scaleUp',
    'bottomUp',
    'flip',
    'newspaper'
  ]

  return (
    <Layout title='MODAL' description='모달 애니메이션 케이스'>
      <div style={{ display: 'flex', gap: '16px' }}>
        {list.map((type) => {
          return (
            <Button key={type} size='lg' onClick={() => onClick(type)}>
              {type.toUpperCase()}
            </Button>
          )
        })}
      </div>
    </Layout>
  )
}

export const TransactionLoadingAnimation = () => {
  const { openModal } = useModal()

  const onClick = (type: StoryModalProps['animateType']) =>
    openModal(<DemoTransaction type={type} />)

  const list: StoryModalProps['animateType'][] = [
    'fadeIn',
    'dropIn',
    'scaleUp',
    'topDown'
  ]

  return (
    <Layout title='트랜잭션 로딩 애니메이션'>
      <Button onClick={() => openModal(<TransactionLoading />)}>기존</Button>

      <div style={{ display: 'flex', gap: '16px' }}>
        {list.map((type) => {
          return (
            <Button key={type} size='lg' onClick={() => onClick(type)}>
              {type.toUpperCase()}
            </Button>
          )
        })}
      </div>
    </Layout>
  )
}

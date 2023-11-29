import { Button } from '@ow-develop/ow-design-system'
import { ComponentStory } from '@storybook/react'
import { useEffect } from 'react'
import styled from 'styled-components'

import DemoImage from '~/assets/image/rank/rank_a.webp'
import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import ReceiptModal from '~/common/modal/receipt-modal/index'
import useModal from '~/hooks/useModal'
import ScrollGradient from '~/common/scroll-gradient'

export default {
  title: 'common/Receipt modal',
  component: ReceiptModal
}

const Default: ComponentStory<typeof ReceiptModal> = ({
  title,
  description,
  txHash,
  button,
  children
}) => {
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(
      <ReceiptModal
        title={title}
        description={description}
        txHash={txHash}
        button={button}
      >
        {children}
      </ReceiptModal>
    )
  }

  useEffect(() => {
    handleClick()
  }, [])

  return <Button onClick={handleClick}>open</Button>
}

export const Block = Default.bind({})
Block.args = {
  title: 'Return',
  description:
    '1 of E-Rank Monsters  have been successfully returned to 5 of Essence Stones.',
  txHash: '0x####...####',
  button: (
    <Button width='fill' variant='secondary' size='sm' onClick={() => {}}>
      Go to Dungeon
    </Button>
  ),
  children: <ReceiptModal.Block imgUrl={EssenceStoneImage.toString()} />
}

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export const List = Default.bind({})

List.args = {
  title: 'Gate Clear',
  description: 'Gate has been successfully cleared.',
  txHash: '0x####...####',
  button: (
    <Button width='fill' variant='secondary' size='sm' onClick={() => {}}>
      Go to Dungeon
    </Button>
  ),
  children: (
    <ScrollGradient height={352} bottom={true}>
      <ListBox>
        {Array(10)
          .fill('')
          .map((_, idx) => (
            <ReceiptModal.List
              key={idx}
              type='Monster'
              title='Ice Elves'
              imgUrl={DemoImage.toString()}
              amount={10}
              isShadow={true}
            />
          ))}
      </ListBox>
    </ScrollGradient>
  )
}

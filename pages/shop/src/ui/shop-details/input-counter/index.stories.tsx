import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import { InputCounter } from './index'

export default {
  title: 'shop/Counter',
  component: InputCounter,
  argTypes: {
    disabled: {
      description: '판매가 종료되었을 때, 비활성화 상태',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    error: {
      description: '잔액 대비 구매 수량을 초과했을 때, 에러 상태',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  }
} as ComponentMeta<typeof InputCounter>

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 16px;
`

export const Default: ComponentStory<typeof InputCounter> = ({
  disabled,
  balance
}) => {
  const [count, setCount] = useState(1)

  return (
    <StoryWrapper>
      <InputCounter
        count={count}
        setAmount={setCount}
        balance={5}
        increase={1}
        disabled={disabled}
      />
    </StoryWrapper>
  )
}

export const Insufficient: ComponentStory<typeof InputCounter> = () => {
  const [count, setCount] = useState(1)
  return (
    <StoryWrapper>
      <InputCounter count={count} setAmount={setCount} increase={1} />
    </StoryWrapper>
  )
}

import { useDownCustom } from '@ow-develop/ow-design-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import LevelingInputCard from '.'
import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import { Breakpoint } from '~/constants/style'

export default {
  title: 'leveling/System input card',
  component: LevelingInputCard
} as ComponentMeta<typeof LevelingInputCard>

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 16px;
`

export const Unselected: ComponentStory<typeof LevelingInputCard> = () => {
  return (
    <StoryWrapper>
      <LevelingInputCard />
    </StoryWrapper>
  )
}

export const UnselectedAction: ComponentStory<
  typeof LevelingInputCard
> = () => {
  return (
    <StoryWrapper>
      <LevelingInputCard action={() => ''} />
    </StoryWrapper>
  )
}

export const Default: ComponentStory<typeof LevelingInputCard> = () => {
  return (
    <StoryWrapper>
      <LevelingInputCard
        title='Essence Stone'
        increase={1}
        imgUrls={[EssenceStoneImage.toString()]}
      />
    </StoryWrapper>
  )
}

export const Count: ComponentStory<typeof LevelingInputCard> = () => {
  const [count, setCount] = useState(1)
  const isMediumDownSize = useDownCustom(Breakpoint.M)

  const handleAction = () => ''

  return (
    <StoryWrapper>
      <LevelingInputCard
        title='Essence Stone'
        imgUrls={[EssenceStoneImage.toString()]}
        count={count}
        setCount={setCount}
        increase={3}
        action={isMediumDownSize && handleAction}
      />
    </StoryWrapper>
  )
}

export const CountBalance: ComponentStory<typeof LevelingInputCard> = () => {
  const [count, setCount] = useState(1)
  const isMediumDownSize = useDownCustom(Breakpoint.M)

  const handleAction = () => ''

  return (
    <StoryWrapper>
      <LevelingInputCard
        title='Essence Stone'
        imgUrls={[EssenceStoneImage.toString()]}
        count={count}
        setCount={setCount}
        action={isMediumDownSize && handleAction}
        increase={1}
        balance={5}
      />
    </StoryWrapper>
  )
}

export const MultipleSelect: ComponentStory<typeof LevelingInputCard> = () => {
  const [count, setCount] = useState(1)
  const isMediumDownSize = useDownCustom(Breakpoint.M)

  const handleAction = () => ''

  return (
    <StoryWrapper>
      <LevelingInputCard
        title='B-Rank monster'
        imgUrls={[]}
        increase={1}
        action={isMediumDownSize && handleAction}
      />
    </StoryWrapper>
  )
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { LevelingMenuCard } from '.'

import dummyImage from '~/assets/image/leveling/leveling_arise.webp'

export default {
  title: 'leveling/System menu card',
  component: LevelingMenuCard,
  argTypes: {
    title: {
      defaultValue: 'Title',
      control: {
        type: 'text'
      }
    },
    subtitle: {
      defaultValue: 'Sub title',
      control: {
        type: 'text'
      }
    },
    imgUrl: {
      defaultValue: dummyImage.toString(),
      control: {
        type: 'file'
      }
    }
  }
} as ComponentMeta<typeof LevelingMenuCard>

const StoryWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 16px;
`

export const Default: ComponentStory<typeof LevelingMenuCard> = (args) => {
  return <LevelingMenuCard {...args} />
}

export const Example: ComponentStory<typeof LevelingMenuCard> = (args) => {
  return (
    <StoryWrapper>
      <LevelingMenuCard
        title='Upgrade'
        subtitle='Upgrade Soul Stones to get higher rank Soul Stones.'
        imgUrl={dummyImage.toString()}
      />
      <LevelingMenuCard
        title='Split'
        subtitle='Split Monster to earn Soul Stone.'
        imgUrl={dummyImage.toString()}
      />
      <LevelingMenuCard
        title='Split'
        subtitle='Upgrade Soul Stones to get higher rank Soul Stones.'
        imgUrl={dummyImage.toString()}
      />
      <LevelingMenuCard
        title='Transform'
        subtitle='Transform Strange Stones to earn Soul Stone.'
        imgUrl={dummyImage.toString()}
      />
    </StoryWrapper>
  )
}

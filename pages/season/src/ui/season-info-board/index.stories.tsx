import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { SeasonInfoBoard } from './index'

import SeasonImg from '~/assets/image/season/season_banner.webp'

export default {
  title: 'season/Season Info Board',
  component: SeasonInfoBoard
} as ComponentMeta<typeof SeasonInfoBoard>

const StoryWrapper = styled.div`
  width: 100%;
`

const Template: ComponentStory<typeof SeasonInfoBoard> = (args) => {
  return (
    <StoryWrapper>
      <SeasonInfoBoard {...args} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  banner: SeasonImg.toString(),
  leftTitle: 'Pre-Season',
  rightTitle: '20%',
  leftDescription: '38,538,894 Block - 42,426,894 Block',
  rightDescription: '3,888,000 Block left',
  type: 'single',
  leftText: 'Pre-Season',
  leftSmall: '≈ 70 days',
  rightText: 'Season-off'
}

export const SeasonOff = Template.bind({})
SeasonOff.args = {
  banner: 'sky',
  leftTitle: 'Season-off',
  leftDescription: 'Claim Pre-Season reward.',
  type: 'multiple',
  leftText: 'Pre-Season',
  leftSmall: '≈ 70 days',
  rightText: 'Season-off',
  leftProgress: 100,
  rightProgress: 0
}

export const BeforeSeasonStart = Template.bind({})
BeforeSeasonStart.args = {
  banner: 'navy',
  leftTitle: 'Season-off',
  leftDescription: 'Claim Pre-Season reward.',
  rightDescription: '3,888,000 Block left until Season 1',
  type: 'multiple',
  leftText: 'Pre-Season',
  leftSmall: '≈ 70 days',
  rightText: 'Season-off',
  leftProgress: 100,
  rightProgress: 50
}

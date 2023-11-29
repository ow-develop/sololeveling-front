import { ComponentStory, ComponentMeta } from '@storybook/react'

import RankInputCard from './index'

export default {
  title: 'rank up/Rank input card',
  component: RankInputCard,
  argTypes: {
    disabled: {
      control: {
        defaultValue: false,
        type: 'boolean'
      }
    },
    shadow: {
      options: ['', 'rank-a', 'rank-b'],
      defaultValue: '',
      control: {
        type: 'radio'
      }
    },
    imgUrl: {
      control: {
        type: 'file',
        accept: ['.png', '.jpg', 'jpeg', '.webp']
      }
    }
  }
} as ComponentMeta<typeof RankInputCard>

export const Default: ComponentStory<typeof RankInputCard> = (args) => {
  return <RankInputCard {...args}>Select B-Rank Monster</RankInputCard>
}

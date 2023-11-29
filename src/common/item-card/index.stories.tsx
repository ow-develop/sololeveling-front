import { ComponentMeta, ComponentStory } from '@storybook/react'

import ItemCard from './index'

import SampleCardImage from '~/assets/image/card/card_a.webp'

export default {
  title: 'common/Item card',
  component: ItemCard,
  argTypes: {
    thumbnailUrl: {
      control: 'file',
      defaultValue: SampleCardImage.toString()
    },
    subtitle: {
      defaultValue: 'Shadow Army',
      control: 'text'
    },
    title: {
      defaultValue: 'Beru',
      control: 'text'
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    },
    selected: {
      defaultValue: false,
      control: 'boolean'
    },
    amount: {
      defaultValue: 1,
      control: 'range'
    }
  }
} as ComponentMeta<typeof ItemCard>

export const Default: ComponentStory<typeof ItemCard> = (args) => {
  return <ItemCard {...args} />
}

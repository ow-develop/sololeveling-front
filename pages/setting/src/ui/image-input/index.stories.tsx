import { ComponentMeta, ComponentStory } from '@storybook/react'

import ImageInput from './index'

export default {
  title: 'setting/Image input',
  component: ImageInput,
  argTypes: {
    imgUrl: {
      control: {
        type: 'file'
      }
    }
  }
} as ComponentMeta<typeof ImageInput>

const Template: ComponentStory<typeof ImageInput> = (args) => (
  <ImageInput {...args} />
)

export const Default = Template.bind({})

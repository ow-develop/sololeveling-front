import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LoadingIcon } from '~/common/loading-icon/index'

export default {
  title: 'common/Loading',
  component: LoadingIcon
} as ComponentMeta<typeof LoadingIcon>

const Template: ComponentStory<typeof LoadingIcon> = (args) => (
  <LoadingIcon {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 20
}

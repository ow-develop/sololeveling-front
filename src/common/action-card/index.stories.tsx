import { ConnectWalletIcon } from '@ow-develop/ow-icons/react/solo'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { ActionCard } from './'

import SvgIcon from '~/common/svg-icon'

export default {
  title: 'common/Action Card',
  components: ActionCard
} as ComponentMeta<typeof ActionCard>

const StoryWrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Template: ComponentStory<typeof ActionCard> = (args) => (
  <StoryWrapper>
    <ActionCard {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = {
  icon: <SvgIcon icon={<ConnectWalletIcon />} size={80} />,
  title: 'Connect Wallet',
  subTitle: 'Must connect wallet to continue.',
  actionText: 'Connect Wallet'
}

const onClick = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(null)
    }, 1000)
  )

export const Loading = Template.bind({})
Loading.args = {
  icon: <SvgIcon icon={<ConnectWalletIcon />} size={80} />,
  title: 'Connect Wallet',
  subTitle: 'Must connect wallet to continue.',
  actionText: 'Connect Wallet',
  onClick
}

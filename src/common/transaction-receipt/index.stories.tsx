import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { TransactionReceipt } from '~/common/transaction-receipt/index'

export default {
  title: 'common/Transaction receipt',
  component: TransactionReceipt
} as ComponentMeta<typeof TransactionReceipt>

const StoryWrapper = styled.div`
  width: 312px;
`

const Template: ComponentStory<typeof TransactionReceipt> = (args) => (
  <StoryWrapper>
    <TransactionReceipt {...args} />
  </StoryWrapper>
)

export const Default = Template.bind({})
Default.args = {
  txHash: '0xad98a775cf5e9eb7ea9f9cbada0a1f0a33334a63edd5f04185bef0dc95774be4'
}

export const Complete = Template.bind({})
Complete.args = {
  txHash: '0xad98a775cf5e9eb7ea9f9cbada0a1f0a33334a63edd5f04185bef0dc95774be4',
  status: 'complete'
}

export const Cancelled = Template.bind({})
Cancelled.args = {
  txHash: '0xad98a775cf5e9eb7ea9f9cbada0a1f0a33334a63edd5f04185bef0dc95774be4',
  status: 'cancelled'
}

import React from 'react'

import {
  ConfirmAmountUnit,
  ConfirmImageBox,
  ConfirmInfoField,
  ConfirmTitleUnit,
  LevelingConfirmItemWrapper
} from './style'

import FullWidthImage from '~/common/image/full-width-image'

export interface Props {
  title: string
  imgUrl: string
  amount: number
}

const LevelingConfirmItem = ({ title, imgUrl, amount }: Props) => {
  return (
    <LevelingConfirmItemWrapper>
      <ConfirmTitleUnit>{title}</ConfirmTitleUnit>
      <ConfirmInfoField>
        <ConfirmImageBox>
          <FullWidthImage src={imgUrl} />
        </ConfirmImageBox>
        <ConfirmAmountUnit>{amount}</ConfirmAmountUnit>
      </ConfirmInfoField>
    </LevelingConfirmItemWrapper>
  )
}

export default LevelingConfirmItem

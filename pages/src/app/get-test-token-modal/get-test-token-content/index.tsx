import React from 'react'
import {
  AmountBox,
  AmountField,
  ButtonBox,
  ContentBox,
  ContentUnit,
  ContentField,
  DescriptionUnit,
  GetTestTokenWrapper,
  TitleUnit,
  GuideTextUnit
} from './style'
import { Button } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'
import { GetTokenStep } from '../index'
interface Props {
  list: GetTokenStep[]
  guideText: string
}
const GetTestTokenContent = ({ list, guideText }: Props) => {
  const { t } = useTranslation()
  return (
    <GetTestTokenWrapper>
      {list.map((item, index) => (
        <ContentField key={item.title}>
          <TitleUnit>STEP{index + 1}</TitleUnit>

          <ContentBox>
            <ContentUnit>
              <TitleUnit>{t(item.title)}</TitleUnit>
              <DescriptionUnit>{t(item.description)}</DescriptionUnit>
            </ContentUnit>

            <ContentUnit>
              <AmountField>
                <DescriptionUnit>{t('Token Amount')}</DescriptionUnit>
                <AmountBox>
                  <DescriptionUnit>{item.totalAmount}</DescriptionUnit>
                  {item.icon}
                </AmountBox>
              </AmountField>
              <AmountField>
                <DescriptionUnit>{t('My Balance')}</DescriptionUnit>
                <AmountBox>
                  <DescriptionUnit>{item.myBalance}</DescriptionUnit>
                  {item.icon}
                </AmountBox>
              </AmountField>
            </ContentUnit>

            <ButtonBox>
              <Button
                variant={'primary'}
                size={'md'}
                fixedWidth={120}
                width={'fixed'}
                disabled={item.buttonDisable}
                loading={item.loading}
                onClick={item.onClick}
              >
                {item.buttonText}
              </Button>
            </ButtonBox>
          </ContentBox>
        </ContentField>
      ))}
      <GuideTextUnit>{t(guideText)}</GuideTextUnit>
    </GetTestTokenWrapper>
  )
}
export default GetTestTokenContent

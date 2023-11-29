import { ArrowDropDownIcon } from '@ow-develop/ow-icons/react/material'
import React from 'react'

import {
  ActiveBarBox,
  ActiveIconBox,
  BackgroundBox,
  BarBox,
  BarField,
  DescriptionBox,
  LeftBarBox,
  RightBarBox,
  SeasonInfoBoardWrapper,
  SmallTextUnit,
  TextBox,
  TextField,
  TextUnit,
  TitleBox,
  TitleField
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'
import useBreakpoint from '~/hooks/useBreakpoint'
import { useI18next } from '~/lib/i18n'

export interface SeasonInfoBoardProps {
  /**
   * 보드의 배경을 결정합니다.
   * img의 경로나 gradient type을 넣을 수 있습니다.
   * `gradient` : sky, navy
   */
  banner?: string | 'sky' | 'navy'
  mobileBanner?: string
  /**
   * 상단 타이틀의 왼쪽 텍스트를 의미합니다.
   */
  leftTitle?: string
  /**
   * 상단 타이틀의 오른쪽 텍스트를 의미합니다.
   */
  rightTitle?: string
  /**
   * 타이틀 하단의 왼쪽 설명 텍스트를 의미합니다.
   */
  leftDescription?: string
  /**
   * 타이틀 하단의 오른쪽 설명 텍스트를 의미합니다.
   */
  rightDescription?: string
  /**
   * Progress Bar가 하나인지 두개인지를 결정합니다.
   */
  type?: 'single' | 'multiple'
  /**
   * Progress Bar 하단의 왼쪽 텍스트 타이틀을 의미합니다.
   */
  leftText?: string
  /**
   * Progress Bar 하단의 왼쪽 텍스트 설명 텍스트를 의미합니다.
   */
  leftSmall?: string
  /**
   * Progress Bar 하단의 오른쪽 텍스트 타이틀을 의미합니다.
   */
  rightText?: string
  /**
   * 왼쪽 Progress Bar의 진행도를 의미합니다.
   */
  leftProgress?: number
  /**
   * 오른쪽 Progress Bar의 진행도를 의미합니다.
   */
  rightProgress?: number
}

const ActiveBar = ({ width }: { width: number }) => {
  return (
    <ActiveBarBox width={width}>
      {width !== 100 && (
        <ActiveIconBox>
          <SvgIcon icon={<ArrowDropDownIcon />} size={24} color='white-100' />
        </ActiveIconBox>
      )}
    </ActiveBarBox>
  )
}

export const SeasonInfoBoard = ({
  leftTitle,
  rightTitle,
  leftDescription,
  rightDescription,
  type = 'single',
  banner,
  mobileBanner,
  leftText,
  leftSmall,
  rightText,
  leftProgress,
  rightProgress
}: SeasonInfoBoardProps) => {
  const { t } = useI18next()
  const isGradient = ['sky', 'navy'].includes(banner)
  const { belowSmallWidth } = useBreakpoint()

  return (
    <SeasonInfoBoardWrapper>
      <TitleField>
        <TitleBox>
          <span>{t(leftTitle)}</span>
          <span>{t(rightTitle)}</span>
        </TitleBox>

        <DescriptionBox>
          <span>{t(leftDescription)}</span>
          <span>{t(rightDescription)}</span>
        </DescriptionBox>
      </TitleField>

      <BarField>
        <BarBox>
          <LeftBarBox>
            <ActiveBar width={leftProgress} />
          </LeftBarBox>

          <RightBarBox>
            {type === 'multiple' && <ActiveBar width={rightProgress} />}
          </RightBarBox>
        </BarBox>

        <TextField>
          <TextBox disabled={type === 'multiple'}>
            <TextUnit>{t(leftText)}</TextUnit>
            <SmallTextUnit>{t(leftSmall)}</SmallTextUnit>
          </TextBox>

          <TextBox disabled={type === 'single'}>
            <TextUnit>{t(rightText)}</TextUnit>
          </TextBox>
        </TextField>
      </BarField>

      <BackgroundBox banner={banner} mobileBanner={mobileBanner}>
        {!isGradient && (
          <FullWidthImage src={belowSmallWidth ? mobileBanner : banner} />
        )}
      </BackgroundBox>
    </SeasonInfoBoardWrapper>
  )
}

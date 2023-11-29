import { Button } from '@ow-develop/ow-design-system'
import React, { ReactNode } from 'react'

import {
  ActionCardWrapper,
  HeadingUnit,
  LeftField,
  RightField,
  TextBox,
  TextUnit
} from './style'

import { useI18next } from '~/lib/i18n'

export interface ActionCardProps {
  /**
   * 좌측에 배치될 element.
   */
  icon?: ReactNode
  /**
   * 텍스트 요소에 heading으로 들어갈 문구.
   */
  title?: string
  /**
   * 텍스트 요소에 subText로 들어갈 문구.
   */
  subTitle?: string
  /**
   * 액션 버튼에 들어갈 문구.
   */
  actionText?: string
  /**
   * 액션 버튼을 클릭할 때 호출할 함수.
   */
  onClick?: () => any | Promise<any>
  /**
   * true로 줄 때 버튼에 로딩 아이콘이 표시됩니다.
   */
  loading?: boolean
}

export const ActionCard = ({
  icon,
  title,
  subTitle,
  actionText,
  onClick,
  loading
}: ActionCardProps) => {
  const { t } = useI18next()

  return (
    <ActionCardWrapper>
      <LeftField>
        {icon}

        <TextBox>
          <HeadingUnit>{t(title)}</HeadingUnit>
          <TextUnit>{t(subTitle)}</TextUnit>
        </TextBox>
      </LeftField>

      <RightField>
        <Button size='lg' width='fill' onClick={onClick} loading={loading}>
          {t(actionText)}
        </Button>
      </RightField>
    </ActionCardWrapper>
  )
}

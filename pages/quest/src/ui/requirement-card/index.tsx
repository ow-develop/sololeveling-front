import { Button } from '@ow-develop/ow-design-system'
import { MouseEvent, ReactNode } from 'react'

import RequirementStatus from './requirement-status'
import {
  ActionBox,
  InformationField,
  RequirementCardWrapper,
  ThumbnailBox,
  TitleUnit
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'

export interface Props {
  title: string
  /**
   * 좌측에 필요한 정보의 이미지를 넣습니다.
   */
  imgUrlList?: string[]
  /**
   * 이미지 선택이 필요한 경우, 선택되지 않았을 때 표시할 기본 이미지를 넣습니다.
   */
  defaultImgUrl?: string
  /**
   * 우측에 표시 또는 버튼 정보를 넣습니다.
   */
  actionStatus?: 'disqualified' | 'qualified' | 'select' | 'complete'
  preceding?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

const RequirementCard = ({
  imgUrlList = [],
  defaultImgUrl,
  actionStatus = 'disqualified',
  preceding,
  onClick,
  title
}: Props) => {
  const { t } = useI18next()

  const selectButtonDescription =
    imgUrlList.length === 0 ? 'Select item' : 'Change Item'

  const getBackgroundStatus = () => {
    switch (true) {
      case preceding:
        return 'preceding'
      case actionStatus === 'disqualified':
      case actionStatus === 'select' && imgUrlList.length === 0:
        return 'requirement'
      default:
        return 'complete'
    }
  }

  const actionControlSet: Record<Props['actionStatus'], ReactNode> = {
    disqualified: <RequirementStatus status='disqualified' />,
    qualified: <RequirementStatus status='qualified' />,
    complete: <RequirementStatus status='complete' />,
    select: (
      <Button variant='secondary' size='sm' onClick={onClick}>
        {t(selectButtonDescription)}
      </Button>
    )
  }

  return (
    <RequirementCardWrapper status={getBackgroundStatus()}>
      <InformationField>
        <ThumbnailBox completed={actionStatus === 'complete'}>
          {imgUrlList.length !== 0 ? (
            imgUrlList?.map((v, key) => <FullWidthImage key={key} src={v} />)
          ) : (
            <FullWidthImage src={defaultImgUrl} />
          )}
        </ThumbnailBox>
        <TitleUnit completed={actionStatus === 'complete'}>
          {t(title)}
        </TitleUnit>
      </InformationField>
      <ActionBox>{actionControlSet[actionStatus]}</ActionBox>
    </RequirementCardWrapper>
  )
}

export default Object.assign(RequirementCard, {
  Status: RequirementStatus
})

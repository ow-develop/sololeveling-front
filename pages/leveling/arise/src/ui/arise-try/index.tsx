import React, { useCallback, useEffect, useState } from 'react'
import { AriseCount, AriseVideoBox } from '../style'
import {
  ButtonBox,
  CardContentField,
  OpenEffectWrapper
} from '~/common/open-effect/style'
import { Button } from '@ow-develop/ow-design-system'
import { useI18next } from '~/lib/i18n'
import useModal from '~/hooks/useModal'
import AriseSuccess from '../arise-success'
import AriseFail from '../arise-fail'
import { VideoType } from '~/constants/leveling'

export interface Props {
  requestAmount: number
  isSuccess: boolean
  aroseCount: number
  rank: string
  title: string
  imgUrl: string
  usedStone: number
}

const AriseTry = ({
  requestAmount,
  isSuccess,
  aroseCount,
  rank,
  title,
  imgUrl,
  usedStone
}: Props) => {
  const { openModal } = useModal()
  const { t, i18nextTranslate } = useI18next()
  const [count, setCount] = useState(0)
  const translate = i18nextTranslate(
    `{{value.count}} / {{value.requestAmount}} Arising···`,
    {
      value: { count, requestAmount }
    }
  )

  const onClick = useCallback(() => {
    if (isSuccess === true) {
      openModal(
        <AriseSuccess
          rank={rank}
          title={title}
          imgUrl={imgUrl}
          usedStone={usedStone}
        />
      )
    } else {
      openModal(<AriseFail usedStone={usedStone} />)
    }
  }, [isSuccess, openModal, rank, title, imgUrl, usedStone])

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < aroseCount) {
        setCount((prevCount) => prevCount + 1)
      } else if (count === aroseCount) {
        clearInterval(timer)
        onClick()
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [count, aroseCount, onClick])

  return (
    <OpenEffectWrapper>
      <CardContentField>
        <AriseVideoBox>
          <video loop autoPlay playsInline muted src={VideoType.ARISE_TRY} />
          <AriseCount>{translate}</AriseCount>
        </AriseVideoBox>
        <ButtonBox>
          <Button variant='secondary' size='sm' onClick={onClick}>
            {t('Skip')}
          </Button>
        </ButtonBox>
      </CardContentField>
    </OpenEffectWrapper>
  )
}

export default AriseTry

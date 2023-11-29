import { useEffect } from 'react'

import LoadingImg from '~/assets/image/loading/transaction_loading.gif'
import {
  ContentField,
  HeadingBox,
  ImgBox,
  LoadingWrapper,
  TextBox,
  TipUnit,
  TitleUnit
} from '~/common/loading/style'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import { useI18next } from '~/lib/i18n'
import FullWidthImage from '~/common/image/full-width-image'

const TransactionLoading = () => {
  const { t } = useI18next()
  const { initScroll } = usePreventBodyScroll()

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * 14) + 1
    return `loading_${randomIndex}`
  }

  const randomContent = getRandomIndex()

  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }

    initScroll()

    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [])

  return (
    <LoadingWrapper>
      <ContentField>
        <HeadingBox>
          <ImgBox>
            <FullWidthImage src={LoadingImg.src} />
          </ImgBox>
        </HeadingBox>
        <TextBox>
          <TitleUnit>Loading ···</TitleUnit>
          <TipUnit>{t(randomContent)}</TipUnit>
        </TextBox>
      </ContentField>
    </LoadingWrapper>
  )
}

export default TransactionLoading

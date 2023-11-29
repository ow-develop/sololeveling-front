import React from 'react'
import {
  ContentField,
  HeadingBox,
  ImgBox,
  LoadingWrapper,
  TextBox,
  TipUnit,
  TitleUnit
} from './DemoTransaction.styled'
import FullWidthImage from '~/common/image/full-width-image'
import LoadingImg from '~/assets/image/loading/transaction_loading.gif'
import { animateTypeMap } from '~/stories/modal/modal-layout/style'

const DemoTransaction = ({
  type = 'default'
}: {
  type?: keyof typeof animateTypeMap | 'default'
}) => {
  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * 14) + 1
    return `loading_${randomIndex}`
  }

  const randomContent = getRandomIndex()

  const animate = animateTypeMap[type]

  return (
    <LoadingWrapper>
      <ContentField>
        <HeadingBox>
          {type === 'default' ? (
            <ImgBox
              initial={{ opacity: 0, top: '-20px' }}
              animate={{
                opacity: 1,
                top: 100,
                transition: { duration: 0.5, delay: 0.5 }
              }}
              exit={{ opacity: 0, top: 0 }}
            >
              <FullWidthImage src={LoadingImg.src} />
            </ImgBox>
          ) : (
            <ImgBox
              initial={{ ...animate.variants.hidden, opacity: 0, top: '-20px' }}
              animate={{
                ...animate.variants.visible,
                opacity: 1,
                top: 0,
                transition: { duration: 0.5, delay: 0.5 }
              }}
              exit={{ ...animate.variants.exit, opacity: 0, top: 0 }}
              transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
            >
              <FullWidthImage src={LoadingImg.src} />
            </ImgBox>
          )}
        </HeadingBox>
        <TextBox>
          <TitleUnit>Loading ···</TitleUnit>
          <TipUnit>{randomContent}</TipUnit>
        </TextBox>
      </ContentField>
    </LoadingWrapper>
  )
}

export default DemoTransaction

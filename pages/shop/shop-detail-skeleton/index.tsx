import React from 'react'
import Skeleton from '~/common/skeleton'
import styled from 'styled-components'
import {
  InformationBox,
  InformationField
} from '../src/ui/shop-details/shop-details-card/style'
import { CommonMainLayout } from '~/layouts/style'

const ShopDetailSkeleton = () => {
  return (
    <Skeleton>
      <Wrapper>
        <Skeleton.Rect height={576} />
        <InformationField>
          <InformationBox>
            <Skeleton.Rect width={200} borderRadius={4} />
            <Skeleton.Rect height={38} borderRadius={4} />
            <Skeleton.Rect borderRadius={4} />
          </InformationBox>
          <ContentsBox>
            <Skeleton.Rect width={288} height={44} />
            <Skeleton.Rect width={133} borderRadius={4} />
          </ContentsBox>
          <ContentsBox>
            <Skeleton.Rect width={288} borderRadius={4} />
            <Skeleton.Rect width={288} borderRadius={4} />
            <Skeleton.Rect width={288} borderRadius={4} />
          </ContentsBox>
          <InformationBox>
            <Skeleton.Rect borderRadius={4} />
            <Skeleton.Rect height={44} />
          </InformationBox>
        </InformationField>
      </Wrapper>
    </Skeleton>
  )
}

export default ShopDetailSkeleton

const Wrapper = styled(CommonMainLayout)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  width: 100%;
`

const ContentsBox = styled(InformationBox)`
  align-items: flex-end;
`

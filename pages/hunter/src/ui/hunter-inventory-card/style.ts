import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { ellipsis } from '~/styles/mixin'

export const ItemCardWrapper = styled.div<{
  selected?: boolean
}>`
  display: flex;
  width: 100%;
  cursor: pointer;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const ThumbnailField = styled.div<{
  background?: string
}>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  overflow: hidden;

  ${({ background }) =>
    css`
      ${background}
    `};
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`

export const VideoUnit = styled.video`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ImageUnit = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const LabelBox = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`
export const AmountUnit = styled.div`
  padding: 6px 10px;
  color: var(--text-default);
  background-color: var(--button-default);
  border-radius: 8px;
  ${Token.typography.body_stronger};
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const SubtitleUnit = styled.div`
  text-align: center;
  color: var(--text-weak);
  ${Token.typography.body_strong};
  ${ellipsis};
`

export const TitleUnit = styled.div`
  text-align: center;
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};
  ${ellipsis};
`

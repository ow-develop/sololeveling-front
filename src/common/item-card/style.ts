import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { ellipsis, noneDraggable } from '~/styles/mixin'

export const ItemCardWrapper = styled.div<{
  disabled: boolean
  selected: boolean
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  height: fit-content;
  border-radius: 8px;
  background: var(--white-10);
  padding: 0;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-sizing: content-box;

  ${noneDraggable};
  ${Token.shadow.md};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}

  ${({ selected }) =>
    selected &&
    css`
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid var(--accent-button-default);
        box-sizing: border-box;
        border-radius: 8px;
      }
    `}

  :hover {
    ${Token.shadow.lg};
  }
`

export const ThumbnailField = styled.div<{ disabled: boolean }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;

  overflow: hidden;
  background-color: gray;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  top: 0;
  padding-top: 100%;
`

export const ImageUnit = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: contain;
`

export const AmountUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 12px;
  right: 12px;
  padding: 6px 10px;
  color: var(--text-on-accent);
  background-color: var(--white-20);
  backdrop-filter: blur(8px);
  border-radius: 8px;

  ${Token.typography.subtitle_strong};
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`

export const SubtitleUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.body};
  ${ellipsis};
`

export const TitleUnit = styled.div<{ disabled: boolean }>`
  color: var(--text-strong);
  ${Token.typography.body_strong};
  ${ellipsis};

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--text-weak);
    `}
`

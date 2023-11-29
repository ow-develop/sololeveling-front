import styled, { css } from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'
import { Breakpoint } from '~/constants/style'

export const CollectionCardWrapper = styled.div<{ unOwned: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 280px;
  margin-bottom: 65px;

  ${({ unOwned }) =>
    unOwned &&
    css`
      filter: grayscale(80%);
      opacity: 0.5;
    `};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    margin-bottom: 55px;
  }
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    margin-bottom: 16px;
  }
`

export const CardImgField = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 280px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 168px;
    height: 168px;
  }
`

export const LayeredImgUnit = styled.img`
  position: absolute;
  z-index: 2;
  width: 100%;

  background: var(--status-neutral-strong);
  mix-blend-mode: hard-light;
  opacity: 0.8;

  mask-size: contain;
  -webkit-mask-size: contain;
  background-image: url('/collection_card_mask.webp');
  -webkit-mask-image: url('/collection_card_mask.webp');
`

export const ImgUnit = styled.img<{ unOwned: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100%;
`

export const NameUnit = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.body_stronger};
  text-align: center;
`

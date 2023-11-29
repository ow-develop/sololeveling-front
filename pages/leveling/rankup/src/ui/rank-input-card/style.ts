import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Props } from './index'

export const RankInputCardWrapper = styled.button<Props>`
  display: flex;
  position: relative;
  padding: 0;
  width: 140px;
  height: 140px;
  color: var(--accent-button-default);
  background-color: var(--surface-floated);
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
  ${Token.typography.body_strong};
  ${Token.shadow.md};
  border: none;

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 2px 2px 20px var(--${shadow});
    `}

  :disabled {
    color: var(--accent-button-disabled);
    ${Token.shadow.md};
  }
`

export const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background: radial-gradient(
    66.79% 66.79% at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
`

export const DeleteButtonBox = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  right: -12px;
  top: -12px;
  border-radius: 50%;
  border: 2px solid var(--icon-weak);
  background-color: var(--surface-default);
`

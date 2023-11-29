import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { SelectDropdownProps } from '.'

import { ZIndex } from '~/constants/style'

const WidthMap: {
  [key in SelectDropdownProps['contentSize']]?: string
} = {
  fit: 'fit-content',
  fixed: '140px',
  fill: '100%'
}

export const SelectDropdownWrapper = styled.div<{
  contentSize?: SelectDropdownProps['contentSize']
}>`
  position: relative;
  display: flex;
  width: ${({ contentSize }) => WidthMap[contentSize ?? 'fill']};
  height: inherit;
`

export const TriggerField = styled.div`
  width: 100%;
`

export const TriggerButtonUnit = styled(Button)`
  width: 100%;
  height: auto;
  justify-content: space-between;
  padding: 6px 0 6px 0;

  > span {
    ${Token.typography.body_strong}
    color: var(--text-default);
  }
`

export const DropdownField = styled.ul<{
  isOpen: boolean
  width?: string
}>`
  overflow: hidden;
  position: absolute;
  z-index: ${ZIndex.DROPDOWN};
  bottom: ${({ isOpen }) => (isOpen ? 'calc(100% + 8px)' : 'calc(100% - 8px)')};
  right: 0;
  width: ${({ width }) => width || '100%'};
  min-width: 150px;
  background: var(--surface-default);
  border-radius: 8px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility, opacity, 0.3s ease;
  ${Token.shadow.lg}
  ${({ isOpen }) => !isOpen && 'pointer-events: none'};
`

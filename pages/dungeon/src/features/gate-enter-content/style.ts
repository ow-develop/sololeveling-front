import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'
import { Swiper } from 'swiper/react'

import { Breakpoint } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const GateEnterContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${noneDraggable}
`

export const ContentSwiper = styled(Swiper)`
  display: flex;
  width: 100%;
  min-width: 800px;

  .swiper {
    margin: 0;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    min-width: 260px;
  }
`

export const SlideContentBox = styled.div`
  overflow: hidden;
  position: relative;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 24px;
  }
`

export const ContentField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    max-height: none;
  }
`

export const PagingButtonUnit = styled(Button)<{ align: 'left' | 'right' }>`
  display: flex;
  width: 100%;
  justify-content: ${({ align }) =>
    align === 'left' ? 'flex-end' : 'flex-start'};
  height: 100%;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  ${noneDraggable}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    justify-content: ${({ align }) =>
      align === 'left' ? 'flex-start' : 'flex-end'};
  }
`

export const SlideTitleUnit = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.headline_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
  }
`

export const SlideContentField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    gap: 24px;
  }
`
export const TitleUnit = styled.div`
  ${Token.typography.body_stronger}
  color: var(--text-weakest);
`
export const ValueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ValueUnit = styled.div`
  display: flex;
  gap: 5.5px;
  ${Token.typography.headline_strong}
  color: var(--text-on-accent);
`
export const SubValueUnit = styled.div`
  ${Token.typography.body_strong}
  color: var(--text-weakest);
`

export const SlideContentItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`

export const SlideContentItemTitleUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--white-70);
  ${Token.typography.body_stronger}
`
export const SlideContentItemValueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SlideContentItemMultiValueBox = styled(SlideContentItemValueBox)`
  width: 100%;
  flex-direction: row;
`

export const MultiValueBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ExpandInfoItemValueUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-on-accent);
  ${Token.typography.headline_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
  }
`
export const ExpandInfoItemSubValueUnit = styled.div`
  color: var(--white-70);
  ${Token.typography.body_strong}
`

export const GateExpandActionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;
  width: 100%;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    padding: 0 4px;
  }
`

export const ActionTextBox = styled.div<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
  gap: 4px;
  color: var(--${({ color }) => color});
  letter-spacing: -0.5px;
  text-align: center;
  ${Token.typography.body}
`

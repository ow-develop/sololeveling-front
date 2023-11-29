import styled from 'styled-components'
import { Breakpoint, ZIndex } from '~/constants/style'
import { Button } from '@ow-develop/ow-design-system'

export const InventoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
  }
`
export const InventoryHeaderField = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`
export const FilterWrapper = styled.div``
export const HunterInventoryListField = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`
export const ButtonBox = styled.div`
  position: relative;
`
export const BadgeBox = styled.div`
  position: absolute;
  top: -11px;
  right: -11px;
  z-index: ${ZIndex.DEFAULT};
`
export const HunterInventoryCardBox = styled.div<{ isFilterShow: boolean }>`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-auto-rows: minmax(0px, 1fr);

  ${({ theme, isFilterShow }) => `${theme.breakpoints.up(Breakpoint.XL)} {
    grid-template-columns:  ${
      isFilterShow
        ? 'repeat(4, minmax(0px, 1fr))'
        : 'repeat(5, minmax(0px, 1fr))'
    };
  }}`}

  ${({ theme, isFilterShow }) => `${theme.breakpoints.down(Breakpoint.XL)} {
    grid-template-columns:  ${
      isFilterShow
        ? 'repeat(3, minmax(0px, 1fr))'
        : 'repeat(5, minmax(0px, 1fr))'
    };
  }}`}
  ${({ theme, isFilterShow }) => `${theme.breakpoints.down(Breakpoint.L)} {
    grid-template-columns:  ${
      isFilterShow
        ? 'repeat(3, minmax(0px, 1fr))'
        : 'repeat(4, minmax(0px, 1fr))'
    };
  }}`}

  ${({ theme, isFilterShow }) => `${theme.breakpoints.down(Breakpoint.L)} {
    grid-template-columns:  ${
      isFilterShow
        ? 'repeat(3, minmax(0px, 1fr))'
        : 'repeat(4, minmax(0px, 1fr))'
    };
  }}`}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
`

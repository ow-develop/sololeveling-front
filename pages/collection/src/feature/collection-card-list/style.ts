import styled from 'styled-components'
import { Breakpoint } from '~/constants/style'

export const CollectionCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const RankGroupField = styled.div`
  display: flex;
  flex-direction: column;
`

export const RankField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    margin-bottom: 28px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    margin-bottom: 24px;
  }
`

export const RankImgUnit = styled.img`
  width: 381px;
  height: 104px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 285px;
    height: 78px;
  }
`

export const RankUnit = styled.div`
  position: absolute;

  color: var(--text-on-accent);

  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-transform: capitalize;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.5), 0 -2px 4px rgba(0, 0, 0, 0.3),
    2px 0 4px rgba(0, 0, 0, 0.3), -2px 0 4px rgba(0, 0, 0, 0.3);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    font-size: 18px;
    line-height: 21px;
    text-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.5), 0px -1.5px 3px rgba(0, 0, 0, 0.3),
      1.5px 0px 3px rgba(0, 0, 0, 0.3), -1.5px 0px 3px rgba(0, 0, 0, 0.3);
  }
`

export const RankCardField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 50px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    margin-bottom: 30px;
  }
`

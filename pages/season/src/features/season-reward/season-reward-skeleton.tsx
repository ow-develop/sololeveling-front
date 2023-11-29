import React from 'react'
import Skeleton from '~/common/skeleton'
import { SeasonRewardWrapper } from './style'
import styled from 'styled-components'
import {
  ButtonBox,
  SeasonRewardCardWrapper
} from '../../ui/season-reward-card/style'
import { Breakpoint } from '~/constants/style'

const SeasonRewardSkeleton = () => {
  return (
    <Skeleton>
      <Wrapper>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <Card key={index}>
                <Skeleton.Circle size={200} />
                <Skeleton.Item
                  style={{
                    width: '200px',
                    height: '40px',
                    marginBottom: '10px'
                  }}
                />
                <Skeleton.Rect />
                <Skeleton.Rect />
                <Skeleton.Rect />
                <ButtonBox>
                  <Skeleton.Item
                    style={{
                      margin: '0 auto',
                      width: '200px',
                      height: '50px'
                    }}
                  />
                </ButtonBox>
              </Card>
            )
          })}
        <Card></Card>
      </Wrapper>
    </Skeleton>
  )
}

export default SeasonRewardSkeleton

const Wrapper = styled(SeasonRewardWrapper)`
  display: flex;
  justify-content: center;
  gap: 16px;

  > div {
    flex: 1;
  }

  > div:last-child {
    flex: none;
    width: 10%;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    > div:nth-child(3) {
      flex: none;
      width: 10%;
    }
    div:nth-child(3),
    div:last-child {
      display: none;
    }
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    div:nth-child(2),
    div:nth-child(3),
    div:last-child {
      display: none;
    }
  }
`
const Card = styled(SeasonRewardCardWrapper)`
  background: var(--surface-background);
`

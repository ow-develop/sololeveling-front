import React from 'react'
import Skeleton from '~/common/skeleton'
import styled from 'styled-components'
import useBreakpoint from '~/hooks/useBreakpoint'

interface Props {
  inputStone?: boolean
}
const LevelingInformationSkeleton = ({ inputStone = false }: Props) => {
  const { belowMediumWidth } = useBreakpoint()
  const inputColumn = inputStone ? 3 : 2

  return (
    <Skeleton>
      <InputBox column={belowMediumWidth ? 1 : inputColumn}>
        <Skeleton.Rect height={404} />
        <Skeleton.Rect height={404} />
        {inputStone && <Skeleton.Rect height={404} />}
      </InputBox>
      <ButtonBox>
        <Skeleton.Rect height={40} />
        <Skeleton.Rect height={40} />
      </ButtonBox>
    </Skeleton>
  )
}

export default LevelingInformationSkeleton

const InputBox = styled.div<{ column: number }>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ column }) =>
    `repeat(${column}, minmax(auto, 288px))`};
  justify-content: center;
  grid-gap: 48px;
`

const ButtonBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`

import styled from 'styled-components'

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--text-strong);

  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
`

export const TimeBox = styled.div`
  position: relative;
  width: 80px;
  height: 60px;
  font-size: 48px;

  .time {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.2s;
  }

  .time.up {
    opacity: 0;
    transform: translateY(-100%);
  }

  .time.down {
    opacity: 0;
    transform: translateY(100%);
  }
`

export const CountWrapper = styled.div``

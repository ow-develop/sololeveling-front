import { Indicator, ProgressBar, ProgressLinearWrapper } from './style'

export interface ProgressProps {
  bufferFlag?: boolean
  text?: string
  color?: 'light' | 'dark'
  progress?: number
  dynamic?: boolean
  location?: 'right' | 'bottomRight'
}

const ProgressLinear = ({
  bufferFlag = true,
  text,
  color = 'light',
  progress,
  dynamic,
  location = 'right'
}: ProgressProps) => {
  return (
    <ProgressLinearWrapper location={location}>
      <ProgressBar color={color}>
        {bufferFlag && <Indicator dynamic={dynamic} progress={progress} />}
      </ProgressBar>
      {text}
    </ProgressLinearWrapper>
  )
}

export default ProgressLinear

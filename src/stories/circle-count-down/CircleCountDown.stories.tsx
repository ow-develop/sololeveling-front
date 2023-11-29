import CirCleCountDown from '~/stories/circle-count-down/CircleCountDown'

export default {
  title: 'demo/Circle Count Down'
}

export const Circle = () => {
  return <CirCleCountDown duration={10} colors={'003684'} size={180} />
}

import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { DesktopInventoryLayoutWrapper } from './style'

import ScrollGradient from '~/common/scroll-gradient'

interface Props {
  children?: ReactNode
}
const DesktopInventoryLayout = ({ children }: Props) => {
  const { ref: topRef, inView: topInView } = useInView()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  return (
    <ScrollGradient top={topInView} bottom={bottomInView} height={568}>
      <DesktopInventoryLayoutWrapper>
        <div ref={topRef} />
        {children}
        <div ref={bottomRef} />
      </DesktopInventoryLayoutWrapper>
    </ScrollGradient>
  )
}

export default DesktopInventoryLayout

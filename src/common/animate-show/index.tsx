import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

import { AnimateShowWrapper } from './style'

export interface AnimateShowProps {
  /**
   * 내부에 wrapping된 컴포넌트의 노출 여부를 결정합니다.
   */
  on?: boolean
  /**
   * ss
   */
  children?: ReactNode
  /**
   * 타입별로 다른 형태의 애니메이션을 보여줍니다.
   */
  type?: 'heightExpand' | 'fadeIn'
  // FIXME: 스토리북 파일이 유니온 타입이 아닌 문자열 타입 한 개만 주면 해당 arg가 먹통이 되어 임시 추가
}

export const AnimateShow = ({
  on,
  children,
  type = 'heightExpand'
}: AnimateShowProps) => {
  return (
    <AnimatePresence>
      {on && (
        <AnimateShowWrapper animateType={type}>{children}</AnimateShowWrapper>
      )}
    </AnimatePresence>
  )
}

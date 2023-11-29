import Link from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

import { AnchorUnit, CommonLinkWrapper } from './style'

import { useI18next } from '~/lib/i18n'

export interface CommonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * <Link> 태그의 링크 url
   */
  href?: string
  /**
   * <Link> 태그의 문구
   */
  text?: ReactNode
  /**
   * 텍스트의 색깔. `design-token`을 참조합니다.
   *
   */
  color?: string
}

export const CommonLink = ({
  text,
  href,
  color = 'status-info-default',
  ...restProps
}: CommonLinkProps) => {
  const { t } = useI18next()

  return (
    <CommonLinkWrapper>
      <Link href={href}>
        <AnchorUnit color={color} {...restProps}>
          {t(text)}
        </AnchorUnit>
      </Link>
    </CommonLinkWrapper>
  )
}

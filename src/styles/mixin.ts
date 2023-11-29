import { Token } from '@ow-develop/ow-design-system'
import { css } from 'styled-components'

/**
 * @param lineHeight (Number)                  : 텍스트 Line Height
 * @param clamp     (Number)                  : 텍스트를 몇줄까지 처리할지
 * @param isProtect (Boolean : default false) : 텍스트가 없어도 영역을 지킬지
 * @returns css
 */
export const multipleEllipsis = (
  lineHeight: number,
  clamp: number,
  isProtect?: boolean
) => css`
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: ${clamp};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  max-height: ${lineHeight * clamp}px;
  ${isProtect && `min-height: ${lineHeight * clamp}px`};
`

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

export const lineBreak = css`
  white-space: pre-wrap;
  word-break: break-word;
`

export const hoverShadow = css`
  ${Token.shadow.md};
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    ${Token.shadow.lg};
  }
`
export const transition200 = css`
  transition: all 200ms ease;
`

export const noneDraggable = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const hideScroll = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

export const insideScroll = css`
  ::-webkit-scrollbar {
    position: absolute;
    right: 0;
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`

export const FocusRing = {
  gray: css`
    box-shadow: 0 0 0 4px #f5f5f5;
  `,
  error: css`
    box-shadow: 0 0 0 4px #fee4e2;
  `,
  success: css`
    box-shadow: 0 0 0 4px #12b76a;
  `
}

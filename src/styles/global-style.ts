import styled, { createGlobalStyle, css } from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'

export const CustomGlobalStyle = createGlobalStyle`
  // usePreventBodyScroll 관련 스크롤바 스타일
  html {
    scrollbar-gutter: stable;
    
    &.overlay {
      scrollbar-gutter: auto;
      
      body {
        overflow: hidden;
        position: fixed;
        inset: 0px;
        inset-inline-end: 15px;
      }
      
    }
  }
  
`

export const CardStyle = css`
  width: 100%;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  ${Token.shadow.md};
`

export const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: 100vh;
`

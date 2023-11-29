import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from '@ow-develop/ow-design-system'
import { CustomGlobalStyle } from '~/styles/global-style'

const StyledComponentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <CustomGlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default StyledComponentsProvider

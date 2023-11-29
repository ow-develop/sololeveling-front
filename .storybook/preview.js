import styled, { ThemeProvider } from 'styled-components'

import {
  darkTheme,
  GlobalStyle,
  lightTheme,
  Toast
} from '@ow-develop/ow-design-system'
import { RecoilRoot } from 'recoil'
import { darkVariables } from '../src/styles/variables'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Modal from '../src/common/modal'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeContainer } from '../pages/src/app/style'

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ theme }) => (theme.theme === 'light' ? darkVariables : darkVariables)};
`

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
        <ThemeContainer mode={useDarkMode() ? 'dark' : 'light'}>
          <RecoilRoot>
            <GlobalStyle />
            <Box>
              <Story />

              <Modal />
              <Toast />
            </Box>
          </RecoilRoot>
        </ThemeContainer>
      </ThemeProvider>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      '768px': {
        name: 'Desktop 768px',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      '480px': {
        name: 'Desktop 480px',
        styles: {
          width: '480px',
          height: '100%'
        }
      },
      '360px': {
        name: 'Desktop 360px',
        styles: {
          width: '360px',
          height: '100%'
        }
      },
      ...INITIAL_VIEWPORTS
    }
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    sort: 'requiredFirst'
  },
  darkMode: {
    current: 'dark'
  },
  nextRouter: {
    path: '/some-default-path',
    asPath: '/some-default-path',
    query: {},
    push: () => {}
  }
}

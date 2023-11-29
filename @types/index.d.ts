import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    theme: 'light' | 'dark'
    breakpoints: {
      up: any
      down: any
      between: any
    }
  }
}

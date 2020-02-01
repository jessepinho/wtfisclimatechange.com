import { createGlobalStyle } from 'styled-components'

import { FontFamily } from '../lib/theme'

const MainCSS = createGlobalStyle`
  a {
    color: inherit;
  }

  body {
    font-family: ${FontFamily.Primary};
  }
`

export default MainCSS

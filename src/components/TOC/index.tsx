import React from 'react'

import * as Styles from './styles'

const TOC: React.FC<{}> = props => (
  <Styles.Root>
    <Styles.H2>We've got your back.</Styles.H2>
    <Styles.Ul>
      <Styles.Li>How do we know it's real?</Styles.Li>
      <Styles.Li>What’s the devestation per degree of warming?</Styles.Li>
      <Styles.Li>
        What does it actually mean that sea levels are rising?
      </Styles.Li>
    </Styles.Ul>
  </Styles.Root>
)

export default TOC

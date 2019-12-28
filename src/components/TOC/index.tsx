import React from 'react'

import AnimatedShape from './AnimatedShape'

import * as Styles from './styles'

const TOC: React.FC<{}> = props => (
  <Styles.Root>
    <Styles.H2>We've got your back.</Styles.H2>
    <Styles.Ul>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <AnimatedShape color="#ec3836" animationIndex={0} id="one" />
        </Styles.LiBackgroundWrapper>
        How do we know it's real?
      </Styles.Li>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <AnimatedShape color="#96314f" animationIndex={1} id="two" />
        </Styles.LiBackgroundWrapper>
        What’s the devastation per degree of warming?
      </Styles.Li>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <AnimatedShape color="#211954" animationIndex={0} id="three" />
        </Styles.LiBackgroundWrapper>
        What does it actually mean that sea levels are rising?
      </Styles.Li>
    </Styles.Ul>
  </Styles.Root>
)

export default TOC

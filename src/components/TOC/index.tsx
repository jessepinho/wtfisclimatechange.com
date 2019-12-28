import React from 'react'

import MovingEllipse from './MovingEllipse'
import UndulatingShape from './UndulatingShape'

import * as Styles from './styles'

const TOC: React.FC<{}> = props => (
  <Styles.Root>
    <Styles.H2>We've got your back.</Styles.H2>
    <Styles.Ul>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <UndulatingShape />
        </Styles.LiBackgroundWrapper>
        How do we know it's real?
      </Styles.Li>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <MovingEllipse color="#96314f" translate="20px" />
        </Styles.LiBackgroundWrapper>
        What’s the devastation per degree of warming?
      </Styles.Li>
      <Styles.Li>
        <Styles.LiBackgroundWrapper>
          <MovingEllipse color="#211954" translate="-20px" />
        </Styles.LiBackgroundWrapper>
        What does it actually mean that sea levels are rising?
      </Styles.Li>
    </Styles.Ul>
  </Styles.Root>
)

export default TOC

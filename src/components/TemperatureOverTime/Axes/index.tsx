import React from 'react'

import * as Styles from './styles'

const YTick: React.FC<{ degrees: number }> = ({ degrees }) => (
  <span>
    <Styles.DegreesNumber>
      {degrees > 0 ? `+${degrees}` : degrees}
    </Styles.DegreesNumber>
    &deg;C
  </span>
)

const XAxis = () => <Styles.DashedLine />

const Axes: React.FC<{}> = props => (
  <Styles.Root>
    <YTick degrees={4} />
    <YTick degrees={3} />
    <YTick degrees={2} />
    <YTick degrees={1} />
    <XAxis />
    <YTick degrees={-1} />
    <YTick degrees={-2} />
    <YTick degrees={-3} />
    <YTick degrees={-4} />
  </Styles.Root>
)

export default Axes

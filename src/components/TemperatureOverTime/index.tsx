import React from 'react'
import Sticky from 'react-stickynode'

import Axes from './Axes'
import * as Styles from './styles'

const TemperatureOverTime: React.FC<{}> = props => (
  <Styles.Section>
    <Styles.H2>How do we know it's real?</Styles.H2>
    <Styles.P>
      Climate is constantly changing. That’s what it has always done and what it
      will keep on doing. What is happening now though is different from the
      natural fluctuation before.
    </Styles.P>

    <Sticky>
      <Axes />
    </Sticky>
  </Styles.Section>
)

export default TemperatureOverTime

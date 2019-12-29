import React from 'react'
import Sticky from 'react-stickynode'

import Axes from './Axes'
import * as Styles from './styles'

const TemperatureOverTime: React.FC<{}> = props => (
  <Styles.Section>
    <Styles.H2>How do we know it's real?</Styles.H2>
    <Styles.IntroText>
      Climate is constantly changing. That’s what it has always done and what it
      will keep on doing. What is happening now though is different from the
      natural fluctuation before.
    </Styles.IntroText>

    <Sticky>
      <Axes />
    </Sticky>

    <Styles.P>Let’s look at some benchmarks of the earth’s climate.</Styles.P>
    <Styles.P>
      This is the end of ice age. It was about 4.3°C colder than today.
    </Styles.P>
  </Styles.Section>
)

export default TemperatureOverTime

import React from 'react'
import Sticky from 'react-stickynode'

import Axes from './Axes'
import * as Styles from './styles'

const TemperatureOverTime: React.FC<{}> = props => (
  <Styles.Section>
    <Styles.H2>How do we know it's real?</Styles.H2>
    <Styles.IntroText>
      The temperature of the earth is in{' '}
      <a
        href="https://climate.nasa.gov/evidence/"
        target="_blank"
        rel="noopener"
      >
        constant, slow flux
      </a>
      . This has been the case for hundreds of thousands of years. What is
      happening now, though, is far different from the natural fluctuations of
      the past.
    </Styles.IntroText>

    <Sticky>
      <Styles.GraphWrapper>
        <Axes />

        <Styles.IndicatorDot />
      </Styles.GraphWrapper>
    </Sticky>

    <Styles.P>
      To illustrate this, let's look at a rough timeline of the earth's
      temperature over the last 20,0000 years.
    </Styles.P>
    <Styles.P>
      This is the end of ice age. It was about 4.3°C colder than today.
    </Styles.P>
  </Styles.Section>
)

export default TemperatureOverTime

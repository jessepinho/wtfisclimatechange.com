import React from 'react'
import Sticky from 'react-stickynode'

import * as Styles from './styles'

const Intro: React.FC<{}> = () => (
  <>
    <Sticky innerZ={-1}>
      <Styles.VerticalCenter>
        <lottie-player
          src="https://assets5.lottiefiles.com/datafiles/dc49lw7cOTLEo6y/data.json"
          background="transparent"
          speed="1"
          style={{ width: '100%' }}
          loop
          autoplay
        />
      </Styles.VerticalCenter>
    </Sticky>

    <Styles.P>
      <Styles.Span>Here is the earth.</Styles.Span>
    </Styles.P>
  </>
)

export default Intro

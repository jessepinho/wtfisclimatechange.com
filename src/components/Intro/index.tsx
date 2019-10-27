import React from 'react'
import Sticky from 'react-stickynode'

import * as Styles from './styles'

const Intro: React.FC<{}> = () => (
  <>
    <Sticky innerZ={-1} bottomBoundary="#Intro__text-bottom">
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
      <Styles.Span>
        So you've been reading the news, and you have some questions.
      </Styles.Span>
    </Styles.P>

    <Styles.P>
      <Styles.Span>What do sea level rises mean for my city?</Styles.Span>
    </Styles.P>
    <Styles.P>
      <Styles.Span>
        Is 400 parts per million of carbon in the atmosphere a high number?
      </Styles.Span>
    </Styles.P>
    <Styles.P>
      <Styles.Span>
        What does deforestation mean for global warming?
      </Styles.Span>
    </Styles.P>
    <Styles.P>
      <Styles.Span>
        How does it all fit together? What <Styles.Em>is</Styles.Em> climate
        change?!
      </Styles.Span>
    </Styles.P>

    <div id="Intro__text-bottom" />
  </>
)

export default Intro

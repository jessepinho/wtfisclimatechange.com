import React from 'react'
import { useScrollPercentage } from 'react-scroll-percentage'

import * as Styles from './styles'

const Splash: React.FC<{}> = props => {
  const [ref, percentage] = useScrollPercentage()

  // `percentage` starts at 0.5, since the scroll reference point is already
  // fully visible on-screen. So we'll account for that when we normalize the
  // percentage.
  const normalizedPercentage = (percentage - 0.5) * 2

  return (
    <>
      <Styles.Gradient style={{ opacity: 1 - normalizedPercentage }} />
      <Styles.ScrollReferencePoint ref={ref} />

      <Styles.Root>
        <Styles.H1>WTF is climate change?!</Styles.H1>
        <Styles.H2>A primer</Styles.H2>
      </Styles.Root>
    </>
  )
}
export default Splash

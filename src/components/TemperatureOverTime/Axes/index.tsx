import React, { useEffect, useState } from 'react'
import { useScrollPercentage } from 'react-scroll-percentage'

import * as Styles from './styles'

const YTick: React.FC<{ degrees: number }> = ({ degrees }) => (
  <Styles.YTick>
    <Styles.DegreesNumber>
      {degrees > 0 ? `+${degrees}` : degrees}
    </Styles.DegreesNumber>
    &deg;C
    <Styles.Dash> &ndash;</Styles.Dash>
  </Styles.YTick>
)

const XAxis = () => <Styles.DashedLine />

const Axes: React.FC<{}> = props => {
  const [ref, percentage] = useScrollPercentage()
  const [yTicksVisible, setYTicksVisible] = useState(false)

  useEffect(() => {
    setYTicksVisible(prevYTicksVisible => {
      if (percentage >= 0.5 && !prevYTicksVisible) {
        return true
      } else if (percentage < 0.5 && prevYTicksVisible) {
        return false
      }

      return prevYTicksVisible
    })
  }, [percentage])

  return (
    <Styles.Root ref={ref}>
      {yTicksVisible && (
        <>
          <YTick degrees={4} />
          <YTick degrees={3} />
          <YTick degrees={2} />
          <YTick degrees={1} />
        </>
      )}
      <XAxis />
      {yTicksVisible && (
        <>
          <YTick degrees={-1} />
          <YTick degrees={-2} />
          <YTick degrees={-3} />
          <YTick degrees={-4} />
        </>
      )}
    </Styles.Root>
  )
}

export default Axes

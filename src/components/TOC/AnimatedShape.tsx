import React, { useEffect } from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  width: 100%;
`

const ANIMATIONS = [
  {
    duration: 5500,
    paths: [
      'M400,21c0,0-35.6-8-80-8c-34.8,0-75.8-13-104-13c-60.8,0-88,10-125,10C71,10,0,0,0,0v400h400V21z',
      'M400,0c0,0-13.3,8.2-57.7,8.2c-34.8,0-78.2,18.1-106.4,18.1C175,26.3,128,4.3,91,4.3C71,4.3,0,9.8,0,9.8V400h400V0z',
    ],
  },
  {
    duration: 4500,
    paths: [
      'M400,21c0,0-162.5-21-263.5-21C52.5,0,0,25.7,0,25.7V400h400V21z',
      'M400,1.6c0,0-48.4,9.3-149.4,9.3C166.7,10.9,0,6,0,6v394h400V1.6z',
    ],
  },
  {
    duration: 4500,
    paths: [
      'M400,0c0,0-35.6,13-80,13c-34.8,0-75.8-13-104-13c-60.8,0-88,10-125,10C71,10,0,0,0,0v400h400V0z',
      'M400,10.9c0,0,6.4-10.9-38-10.9c-34.8,0-110.1,8.2-138.3,8.2c-60.8,0-49.7-8-86.7-8.2C97.6-0.2,0,7.6,0,7.6V400h400V10.9z',
    ],
  },
]

const AnimatedShape: React.FC<{
  color: string
  animationIndex: number
  id: string
}> = ({ color, animationIndex, id }) => {
  useEffect(() => {
    // Import Snap via a runtime require(), since it includes a reference to
    // `window` that breaks server-side rendering.
    const Snap = require('snapsvg-cjs')
    const pathElement = Snap.select(`#AnimationShape__path--${id}`)

    const animationFunctions = ANIMATIONS[animationIndex].paths.map(
      (path, index) => {
        const nextIndex =
          index === ANIMATIONS[animationIndex].paths.length - 1 ? 0 : index + 1

        return () =>
          pathElement.animate(
            { d: path },
            ANIMATIONS[animationIndex].duration,
            mina.linear,
            animationFunctions[nextIndex]
          )
      }
    )

    animationFunctions[0]()
  }, [])

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMinYMin slice"
    >
      <path
        fill={color}
        d={ANIMATIONS[animationIndex].paths[0]}
        id={`AnimationShape__path--${id}`}
      />
    </SVG>
  )
}

export default AnimatedShape

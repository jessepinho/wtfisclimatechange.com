import React, { useEffect } from 'react'
import Snap from 'snapsvg-cjs'
import styled from 'styled-components'

const SVG = styled.svg`
  height: 100%;
  width: 100%;
`

const ANIMATIONS = [
  {
    duration: 5500,
    paths: [
      'M400,21c0,0-35.6-8-80-8c-34.8,0-75.8-13-104-13c-60.8,0-88,10-125,10C71,10,0,0,0,0v100h400V21z',
      'M400,0c0,0-35.6,3-80,3c-34.8,0-74.8,2-103,2c-60.8,0-92-3-129-3C68,2,0,10,0,10v90h400V0z',
    ],
  },
  {
    duration: 4500,
    paths: [
      'M400,25c0,0-119-20-183-20C156.2,5,96,1,59,1C23,1,0,10,0,10v90h400V25z',
      'M400,12c0,0-137.8-12-166-12c-60.8,0-83,3-120,3C94,3,0,10,0,10v90h400V12z',
      'M400,4c0,0-68-4-121-4c-60.8,0-113,3-150,3C109,3,0,10,0,10v90h400V4z',
    ],
  },
]

const AnimatedShape: React.FC<{
  color: string
  animationIndex: number
  id: string
}> = ({ color, animationIndex, id }) => {
  useEffect(() => {
    console.log('AnimatedShape useEffect', ANIMATIONS)
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
      viewBox="0 0 400 100"
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

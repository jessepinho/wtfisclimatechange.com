import React, { useEffect } from 'react'
import Snap from 'snapsvg-cjs'
import styled from 'styled-components'

const SVG = styled.svg`
  height: 100%;
  width: 100%;
`

const UndulatingShape: React.FC<{}> = props => {
  useEffect(() => {
    const one = Snap.select('#ItemOneSVG__one')
    const two = Snap.select('#ItemOneSVG__two')

    const onePathPoints = one.node.getAttribute('d')
    const twoPathPoints = two.node.getAttribute('d')

    const oneToTwo = () =>
      one.animate({ d: twoPathPoints }, 7000, mina.linear, twoToOne)
    const twoToOne = () =>
      one.animate({ d: onePathPoints }, 7000, mina.linear, oneToTwo)

    oneToTwo()
  }, [])

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 100"
      preserveAspectRatio="xMinYMin slice"
    >
      <path
        fill="#ec3836"
        d="M400,21c0,0-35.6-8-80-8c-34.8,0-75.8-13-104-13c-60.8,0-88,10-125,10C71,10,0,0,0,0v100h400V21z"
        id="ItemOneSVG__one"
      />
      <path
        d="M400,0c0,0-35.6,3-80,3c-34.8,0-74.8,2-103,2c-60.8,0-92-3-129-3C68,2,0,10,0,10v90h400V0z"
        opacity="0"
        id="ItemOneSVG__two"
      />
    </SVG>
  )
}

export default UndulatingShape

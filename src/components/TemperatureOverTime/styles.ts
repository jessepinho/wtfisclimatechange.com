import styled from 'styled-components'

import { FontFamily } from '../../lib/theme'

export const Section = styled.section`
  background-color: #ec3836;
  position: relative;
`

export const H2 = styled.h2`
  color: white;
  font-family: ${FontFamily.Heading};
  font-size: 1.5rem;
  line-height: 1.875rem;
  margin-bottom: 1.75rem;
  padding: 2.5rem 1rem 0;
`

export const IntroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.875rem;
  padding: 0 1rem;
`

export const P = styled.p`
  width: 8rem;
  line-height: 1.25rem;
  padding-left: 1rem;
  margin-bottom: 75vh;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const GraphWrapper = styled.div`
  height: 100vh;
  position: relative;
`

export const IndicatorDot = styled.div`
  background-color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;

  offset-path: path('M0,44C75.6,44,263.5,16.3,348,2.47');
  position: absolute;
  bottom: 2rem;
`

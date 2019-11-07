import styled from 'styled-components'

export const P = styled.p`
  color: #ffcc11;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5em;

  margin: 50vh 1rem 50vh;

  &:last-of-type {
    margin-bottom: 100vh;
  }
`

export const Span = styled.span`
  background-color: #df459b;
`

export const AnimationWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;
`

export const Em = styled.em`
  font-style: italic;
  text-transform: uppercase;
`

export const ScrollReferencePoint = styled.div`
  height: 100vh;
  width: 100%;
`

export const TextWrapper = styled.div`
  margin-top: -30vh;
`

export const Root = styled.div`
  margin-top: -50vh;
`

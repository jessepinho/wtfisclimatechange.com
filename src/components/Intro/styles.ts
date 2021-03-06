import styled from 'styled-components'

export const P = styled.p`
  color: #ffcc11;
  font-size: 2rem;
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

  background-color: white;
`

export const Credits = styled.a`
  color: rgb(65, 137, 222);
  font-size: 0.75rem;
  text-decoration: none;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  transition: opacity 0.35s;
`

export const FadeToBlue = styled.div`
  background-color: rgb(65, 137, 222);
  height: 100%;
`

export const Em = styled.em`
  text-transform: uppercase;
`

export const ScrollReferencePoint = styled.div`
  margin-top: -50vh;
  height: 50vh;
  width: 100%;
`

export const TextWrapper = styled.div`
  margin-top: -30vh;
`

export const Root = styled.div`
  margin-top: -50vh;
`

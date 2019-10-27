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

export const VerticalCenter = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Em = styled.em`
  font-style: italic;
  text-transform: uppercase;
`

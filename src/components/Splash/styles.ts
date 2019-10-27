import styled, { css } from 'styled-components'

export const Gradient = styled.div`
  background-image: linear-gradient(#ffcc11, #df459b);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`

export const ScrollReferencePoint = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  width: 100%;
  z-index: -2;
`

export const Root = styled.div`
  height: 200vh;
`

const Header = css`
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
`

export const H1 = styled.h1`
  ${Header}

  font-size: 3.75rem;
  font-weight: 900;
  line-height: 1.15em;

  margin: 25vh 0 3rem;
`

export const H2 = styled.h2`
  ${Header}

  font-size: 1.875rem;
`

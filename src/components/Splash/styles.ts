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

  background-image: url('data:image/svg+xml,%3Csvg width="73" height="29" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M3.202 3.699l33 22 33-22" stroke="%23FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".75"/%3E%3C/svg%3E');
  background-position: center calc(100vh - 5rem);
  background-repeat: no-repeat;
`

const Header = css`
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
`

export const H1 = styled.h1`
  ${Header}

  font-size: 3.75rem;
  line-height: 1.15em;

  padding: 25vh 2rem 3rem;
`

export const H2 = styled.h2`
  ${Header}

  font-size: 1.875rem;
`

import styled from 'styled-components'

import { FontFamily } from '../../lib/theme'

export const Root = styled.div`
  background-color: rgb(65, 137, 222);
  color: white;

  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const H2 = styled.h2`
  font-family: ${FontFamily.Heading};
  font-size: 4rem;

  flex-grow: 1;
  display: flex;
  align-items: center;

  padding: 0 1rem;
`

export const Ul = styled.ul``

export const Li = styled.li`
  font-size: 1.25rem;
  line-height: 1.5rem;

  height: 7rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  position: relative;
  z-index: 0;

  overflow: hidden;

  &:nth-child(2) {
    background-color: #ec3836;
  }

  &:nth-child(3) {
    background-color: #96314f;
  }
`

export const LiBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: -1;
`

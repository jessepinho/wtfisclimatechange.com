import styled, { keyframes, css } from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;

  height: 100vh;

  overflow: hidden;
`

export const DegreesNumber = styled.span`
  font-size: 2.25rem;
`

export const DashedLine = styled.div`
  border-bottom: 2px dashed black;
  width: 100%;
`

export const Dash = styled.span`
  color: white;
`

const yTickAnimation = keyframes`
from {
  opacity: 0;
  transform: translateX(5px);
}

to {
  opacity: 1;
  transform: translateX(0);
}
`

const animationDelays = Array(8)
  .fill(null)
  .map(
    (_, index) => css`
      &:nth-of-type(${index + 1}) {
        animation-delay: ${index * 0.05}s;
      }
    `
  )

export const YTick = styled.span`
  animation: ${yTickAnimation} 0.5s backwards ease-in-out;
  ${animationDelays}
`

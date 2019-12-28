import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = (translate: string) => keyframes`
from {
  transform: scale(2);
}

to {
  transform: scale(5) translate(${translate});
}
`

const Div = styled.div<{ color: string; translate: string }>`
  background-color: ${props => props.color};
  border-radius: 50%;
  transform-origin: top;

  height: 100%;

  animation: ${props => animation(props.translate)} 5s ease-in-out infinite
    alternate;
`

const MovingEllipse: React.FC<{ color: string; translate: string }> = ({
  color,
  translate,
}) => <Div color={color} translate={translate} />

export default MovingEllipse

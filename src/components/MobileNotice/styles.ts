import styled from "styled-components";

export const Overlay = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(#ffcc11, #df459b);
  }
`

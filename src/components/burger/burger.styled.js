import styled from '@emotion/styled';

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 20;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  &::focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => (props.open ? 'black' : '#333')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-of-type(2) {
      opacity: ${props => (props.open ? '0' : '1')};
      transform: ${props =>
        props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-of-type(3) {
      transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
